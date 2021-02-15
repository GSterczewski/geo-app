import { WorldRegion, CountryResponseModel } from "core/types";


export  class Country {
  
  readonly alpha3Code:string;
  readonly name:string;
  readonly capital: string;
  readonly population: number;
  readonly region: WorldRegion;
  readonly flag: string;
  readonly nativeName:string;
  readonly subregion: string;
  readonly topLevelDomain: string;
  readonly languages: Array<string>;
  readonly borderCodes: Array<string>;
  readonly currencies: Array<string>;
  //readonly borderCountries: Array<string>;
  
  constructor(response: CountryResponseModel)
    {
    
    this.alpha3Code = response.alpha3Code;
    this.name = response.name;
    this.capital = response.capital;
    this.population = response.population;
    this.region = response.region;
    this.flag = response.flag;
    this.nativeName = response.nativeName;
    this.subregion = response.subregion;
    this.topLevelDomain = response.topLevelDomain;
    this.languages = response.languages.map(language =>language.name);
    this.currencies = response.currencies.map(currency => currency.name);
    this.borderCodes = response.borders;
    //this.borderCountries = response.borderCountries;
  }
};
