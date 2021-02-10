import { WorldRegion, CountryResponseModel, CountryDetailsResponseModel } from "core/types";


export  class Country {
  
  readonly alpha3Code:string;
  readonly name:string;
  readonly capital: string;
  readonly population: number;
  readonly region: WorldRegion;
  readonly flag: string;
  
  constructor({ alpha3Code, name, capital, population, region, flag }: CountryResponseModel)
    {
    
    this.alpha3Code = alpha3Code;
    this.name = name;
    this.capital = capital;
    this.population = population;
    this.region = region;
    this.flag = flag;
    
  }
};

export class CountryDetails extends Country {
  
  readonly nativeName:string;
  readonly subregion: string;
  readonly topLevelDomain: string;
  readonly languages: Array<string>;
  readonly borderCodes: Array<string>;
  readonly borderCountries: Array<string>;
 
  constructor( {nativeName, languages,subregion,topLevelDomain,borders,...responseModel} : CountryDetailsResponseModel, borderCountries: Array<string> = []){
    super(responseModel);
    
    this.nativeName = nativeName;
    this.subregion = subregion;
    this.topLevelDomain = topLevelDomain;
    this.languages = languages.map(language => language.name);
    this.borderCodes = borders;
    this.borderCountries = borderCountries;
    
  }
}