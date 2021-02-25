import { CountryResponseModel, ServiceResponse } from "core/types";
import  CountriesAPI  from "./api";
import { Country } from "./country";


interface CountriesState {
  list : Array<Country["alpha3Code"]>;
  map: { [code:string]: Country };
}


export default class CountriesService {
  
  state : CountriesState;
  loaded: boolean;
  error?: string;
  constructor(private api : CountriesAPI){
    this.api = api;
    this.state = {
      list: [],
      map: {}
};
    this.loaded = false;
    
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
    try{
      const countriesApiData = await this.api.fetchAll("/all?fields=name;capital;population;alpha3Code;flag;region"); 
      const { list,map } = this.normalizeCountryData(countriesApiData.map(coutryData=> new Country(coutryData)));
      this.state.list = list;
      this.state.map = map;
      this.state.list.forEach(code => {
        const country = this.state.map[code];
        const borderCountries = country.borderCodes.map(borderCode => this.state.map[borderCode]).filter(Boolean) ;
        country.addBorderCountries(borderCountries);
      })
      this.loaded = true;
      this.error = undefined;  

    } catch(error){
      console.error(error);
      this.error = error.message;
      
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
    return this.handleSuccess(this.state.list.map(code => this.state.map[code]).filter(country => country.name.toLowerCase() === nameQuery.toLowerCase()))
    
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