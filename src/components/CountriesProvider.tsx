
import React, { createContext, useState, useEffect, useContext } from "react";
import { Country } from "core/country";

import { testService as service } from "core/index";
import initServer from "../mirageServer";
import { WorldRegion } from "core/types";
initServer();

interface CountriesContextType {
  countries: Country[];
  regions: typeof WorldRegion;
  setNameQuery: (query:string) => void;
  setCountries: (countries: Country[]) => void;
  selectRegion: (region: WorldRegion) => void;
}



type ContextProvider = (props: React.PropsWithChildren<null>) => React.ReactNode;

export const CountriesContext = createContext<CountriesContextType>({
  countries: [],
  regions: WorldRegion,
  setNameQuery: () => console.warn("No nameQuery setter"),
  setCountries: () => console.warn("No countries provider"),
  selectRegion: () => console.warn("No regions provider")
});

export const useCountries = () => useContext(CountriesContext);

const CountriesProvider: ContextProvider = ({ children }) => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [filteredCountries, setFilteredCountries] = useState<Country[]>([]);
  const [selectedRegion, selectRegion] = useState<WorldRegion>(WorldRegion.all);
  const [nameQuery, setNameQuery] = useState<string>("");

  useEffect(() => {
    if (selectedRegion === WorldRegion.all) {
      setFilteredCountries(countries);
    } else {
      setFilteredCountries(countries.filter(country => country.region === selectedRegion) || []);
    }

  }, [countries, selectedRegion])

const loadCountries = (request : Promise<Country[]>) => {
  request.then(countries => {
    setCountries(countries);
    setIsLoading(false);
  }).catch(() => {
    setIsLoading(false);
    setIsError(true);
  })
}
  useEffect(() => {
    if(nameQuery.length){
      loadCountries(service.getCountriesByName(nameQuery));
    }
    else {
      loadCountries(service.getAllCountries());
      
    }
  }, [nameQuery]);

  if (isLoading) return (<div>loading....</div>)
  if (isError) return (<div>ooops something went wrong :(</div>)
  return (
    <CountriesContext.Provider value={{ countries: filteredCountries, regions: WorldRegion, selectRegion, setCountries, setNameQuery }}>
      {children}
    </CountriesContext.Provider>
  )
}

export default CountriesProvider;