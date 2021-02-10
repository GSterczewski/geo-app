import { CountryResponseModel } from "core/types";
//import ResponseCache from "./cache";
import  CountriesAPI  from "./api";
import { Country } from "./country";



export default class CountriesService {
 
  constructor(private api : CountriesAPI){
    this.api = api;
    //this.cache = cache;
  };
 
  private paginateResponse(response: CountryResponseModel[], pageNumber:number, pageSize:number):CountryResponseModel[] {
    return response.slice(( pageNumber * pageSize) - pageSize , pageNumber * pageSize );
  }
  
  public async getAllCountriesByPopulation(page = 1, pageSize = 50): Promise<Array<Country>> {
      
    const request = await this.api.fetchAll("/all?fields=name;capital;population;alpha3Code;flag;region");
    if(request.hasErrors){
      console.error(request.error);
      return Promise.resolve([]);
    }
    if(request.result && request.result.length){
      const paginatedResponse = this.paginateResponse(request.result, page, pageSize);
      return paginatedResponse.map(countryData => new Country(countryData));
    }
    return [];
  }
}