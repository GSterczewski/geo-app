import { APIResponse, CountryResponseModel } from "core/types";

/*
export interface CountriesAPI {
  fetchAll(slug?:string): Promise<APIResponse<CountryResponseModel[]>>;
  fetchByAlphaCode(code:CountryResponseModel["alpha3Code"]): Promise<APIResponse<CountryResponseModel>>;
  fetchByName: (name: CountryResponseModel["name"]) => Promise<APIResponse<CountryResponseModel[]>>;
};
*/

export default class CountriesAPI {
  
constructor(private readonly url: string){
  this.url = url;
}

  private createQuery(slug:string){
    return this.url + slug;
  }
  /*
  private success<T>(result: T):APIResponse<T>{
    return{
      hasErrors: false,
      result
    }
  }
  private failure<T>(error: string):APIResponse<T>{
    return{
      hasErrors: true,
      error
    }
  }
*/
  private async request<T>(url:string):Promise<T>{
    
      const response = await fetch(url);
      if(response.ok){
        // return this.success<T>(await response.json())
         return await response.json();
      }
      throw new Error(response.statusText);
        //throw new Error(response.statusText);
        // return this.failure<T>(response.statusText);

    
  }
  public async fetchAll(slug = "/all"){
    return this.request<CountryResponseModel[]>(this.createQuery(slug));

  }
  public async fetchByAlphaCodes(codes:string[]){
    const query = codes.join(";");
    return this.request<CountryResponseModel[]>(this.createQuery(`/alpha?codes=${query}`));
  }
  public async fetchByAlphaCode(code: string){
    
    return this.request<CountryResponseModel>(this.createQuery(`/alpha/${code}`));
  }
  public async fetchByName(name:string){
    return this.request<CountryResponseModel[]>(this.createQuery(`/name/${name}`));
  }
}

