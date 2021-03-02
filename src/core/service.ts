import { CountryResponseModel, ServiceResponse } from "core/types";
import  CountriesAPI  from "./api";
import { Country } from "./country";


interface CountriesState {
  list : Array<Country["alpha3Code"]>;
  map: { [code:string]: Country };
}



class Cache<T> {
  cacheKey:string;
  constructor(cacheKey:string){
    this.cacheKey = cacheKey;
  }
  private isAvailable():boolean {
    try{
      localStorage.setItem("test","test");
      localStorage.getItem("test");
      return true;

    } catch(err){
      return false;
    }
  }

  public load(): T | null {
    if(this.isAvailable()){
      const item = localStorage.getItem(this.cacheKey);
      return item ? JSON.parse(item) : null;
    }
    return null
  }
  public save(data : T):boolean {
    if(this.isAvailable()){
      try{
        localStorage.setItem(this.cacheKey, JSON.stringify(data));
      } catch(err){
        return false;
      }
    }
    return false;
  }
}
export default class CountriesService {
  
  state : CountriesState;
  loaded: boolean;
  error?: string;
  cache: Cache<CountryResponseModel[]>;
  constructor(private api : CountriesAPI){
    this.api = api;
    this.state = {
      list: [],
      map: {}
};
    this.loaded = false;
    this.cache = new Cache<CountryResponseModel[]>("countries")
  };
   
  private handleSuccess<T>(result : T ):ServiceResponse<T>{
      return {
        hasErrors:false,
        result
      }
  }
  private handleError<T>(result : T):ServiceResponse<T>{
    return {
      hasErrors:true,
      error: this.error,
      result
    }
}

  private normalizeCountryData(countries:Country[]): CountriesState{
    const map:CountriesState["map"] = {};
    const list:CountriesState["list"] = [];
    countries.forEach(country => {
      map[country.alpha3Code] = country;
      list.push(country.alpha3Code);
    });

    return {
      map,
      list
    }
  }
  private async loadCountries(){
     let countries = this.loadFromCache();
     if(!countries || countries.length === 0){
        countries = await this.loadFromAPI();
      }
      this.setState(countries);
  }
  
  private setState(countries: CountryResponseModel[]){
    const { list,map } = this.normalizeCountryData(countries.map(countryData => new Country(countryData)));
      this.state.list = list;
      this.state.map = map;
      this.state.list.forEach(code => {
        const country = this.state.map[code];
        const borderCountries = country.borderCodes.map(borderCode => this.state.map[borderCode]).filter(Boolean) ;
        country.addBorderCountries(borderCountries);
      })
      this.loaded = true;
      this.error = undefined;
  };
  private loadFromCache():CountryResponseModel[]{
    return this.cache.load() || [];
    
  };

  private async loadFromAPI():Promise<CountryResponseModel[]>{
    try{
      const countriesApiData = await this.api.fetchAll("/all?fields=name;capital;population;alpha3Code;flag;region;languages;borders;currencies;nativeName;topLevelDomain;subregion"); 
      this.cache.save(countriesApiData);
      return countriesApiData;
     
    } catch(error){
      console.error(error);
      this.error = error.message;
      return [];    
    }
  }
  public async getAllCountries(): Promise<ServiceResponse<Country[]>> {
    
    if(!this.loaded){
      await this.loadCountries();
    }
    if(this.error){
      return this.handleError([]);

    }
    return this.handleSuccess(this.state.list.map(code => this.state.map[code]))
   
  }

  public async getCountriesByName(nameQuery:string): Promise<ServiceResponse<Country[]>>{
    if(!this.loaded){
      await this.loadCountries();
    }
    if(this.error){
      return this.handleError([]);
    }
    return this.handleSuccess(this.state.list.map(code => this.state.map[code]).filter(country => country.name.toLowerCase().includes(nameQuery.toLowerCase())))
    
  }

  public async getCountryDetails(code : CountryResponseModel["alpha3Code"]):Promise<ServiceResponse<Country|null>>{
    if(!this.loaded){
      await this.loadCountries();
    }
    if(this.error){
      console.log(this.error);
      return this.handleError(null);
    }
    return this.handleSuccess(this.state.map[code.toUpperCase()]);
  }
}