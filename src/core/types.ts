export enum WorldRegion {
  all =" All",
  africa = "Africa",
  america = "America",
  asia = "Asia",
  europe = "Europe",
  oceania = "Oceania",
}


export interface CountryResponseModel  {
  alpha3Code:string;
  name:string;
  flag:string;
  capital: string;
  population: number;
  region: WorldRegion;
  nativeName:string;
  subregion: string;
  topLevelDomain: string;
  languages : Array<{
    name: string;
    nativeName:string;
  }>;
  currencies: Array<{
    code: string;
    name: string;
    symbol: string;
  }>;
  borders: Array<CountryResponseModel["alpha3Code"]>; 
  
};


export interface ServiceResponse<T> {
  result : T;
  hasErrors: boolean;
  error?:string;
}