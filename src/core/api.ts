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

  private async request<T>(url:string){
    try{
      const response = await fetch(url);
      if(response.ok){
        return this.success<T>(await response.json())
      }
        return this.failure<T>(response.statusText);

    }catch(error){
      return this.failure<T>(error);
    }
  }
  public async fetchAll(slug = "/all"){
    return this.request<CountryResponseModel[]>(this.createQuery(slug));

  }
  public async fetchByAlphaCodes(codes:string[]){
    const query = codes.join(";");
    return this.request<CountryResponseModel>(this.createQuery(`/all/alpha?codes=${query}`));
  }
  public async fetchByName(name:string){
    return this.request<CountryResponseModel[]>(this.createQuery(`/name/${name}`));
  }
}

