import { CountryResponseModel } from "core/types";



export default class CountriesAPI {
  
constructor(private readonly url: string){
  this.url = url;
}

  private createQuery(slug:string){
    return this.url + slug;
  }
  
  private async request<T>(url:string):Promise<T>{
    
      const response = await fetch(url);
      if(response.ok){
         return await response.json();
      }
      throw new Error(response.statusText);
       
    
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

