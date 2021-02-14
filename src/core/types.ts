export enum WorldRegion {
  all =" All",
  africa = "Africa",
  america = "America",
  asia = "Asia",
  europe = "Europe",
  oceania = "Oceania",
}


export interface APIResponse <T>{
  hasErrors: boolean;
  error?: string;
  result?: T;
}


export interface CountryResponseModel  {
  alpha3Code:string;
  name:string;
  flag:string;
  capital: string;
  population: number;
  region: WorldRegion;
  
  
}

export interface CountryDetailsResponseModel extends CountryResponseModel{
  
  nativeName:string;
  subregion: string;
  topLevelDomain: string;
  languages : Array<{
    name: string;
    nativeName:string;
  }>;
  borders: Array<CountryResponseModel["alpha3Code"]>;
}

