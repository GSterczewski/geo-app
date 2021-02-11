
import React, { createContext, useState, useEffect, useContext } from "react";
import { Country } from "core/country";

import { testService as service } from "core/index";
import initServer from "../mirageServer";
import { WorldRegion } from "core/types";
initServer();

interface CountriesContextType {
  countries: Country[];
  regions: typeof WorldRegion;
  setCountries : (countries: Country[]) => void;
  selectRegion: (region: WorldRegion | null) => void;
}



type ContextProvider = (props: React.PropsWithChildren<null>) => React.ReactNode;

export const CountriesContext = createContext<CountriesContextType>({
  countries:[],
  regions: WorldRegion,
  setCountries: () => console.warn("No countries provider"),
  selectRegion: () => console.warn("No regions provider")
});

export const useCountries = () => useContext(CountriesContext);

const CountriesProvider: ContextProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [selectedRegion, selectRegion] = useState<WorldRegion|null>(null);


  useEffect(()=>{
    if(selectedRegion){
      setFilteredCountries(countries.filter(country => country.region === selectedRegion));
    }
    else{
      setFilteredCountries(countries)
    }
  },[countries,selectedRegion])

  useEffect(()=>{
    service.getAllCountries()
    .then(countries => {
      setCountries(countries);
      setIsLoading(false);
    }).catch(() => {
      setIsLoading(false);
      setIsError(true);
    })
  },[]);

  if(isLoading) return (<div>loading....</div>)
  if(isError) return (<div>ooops something went wrong :(</div>)
  return (
    <CountriesContext.Provider value={{ countries: filteredCountries, regions:WorldRegion, selectRegion, setCountries }}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider;