enum WorldRegion {
  africa = "Africa",
  america = "America",
  asia = "Asia",
  europe = "Europe",
  oceania = "Oceania",
}

interface CountryResponseModel {
  alpha3code:string;
  name:string;
  nativeName:string;
  population: number;
  region: WorldRegion;
  subgregion: string;
  languages : Array<{
    name: string;
    nativeName:string;
  }>;
  capital: string;
  topLevelDomain: string;
  borders: Array<CountryResponseModel["alpha3code"]>;
}

interface APIResponse <T>{
  hasErrors: boolean;
  error?: string;
  result?: T;
}



export interface CountriesAPI {
  fetchAll(slug:string): Promise<APIResponse<CountryResponseModel[]>>;
  fetchByAlphaCode(code:CountryResponseModel["alpha3code"]): Promise<APIResponse<CountryResponseModel>>;
  fetchByName: (name: CountryResponseModel["name"]) => Promise<APIResponse<CountryResponseModel[]>>;
};




export default class CountriesAPIService implements CountriesAPI {
  
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
  public async fetchAll(slug="/all"){
    return this.request<CountryResponseModel[]>(this.createQuery(slug));

  }
  public async fetchByAlphaCode(code:string){
    return this.request<CountryResponseModel>(this.createQuery(`/alpha/${code}`));
  }
  public async fetchByName(name:string){
    return this.request<CountryResponseModel[]>(this.createQuery(`/name/${name}`));
  }
}

