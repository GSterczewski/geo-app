import { useCallback } from "react";
import { useCountries } from "components/CountriesProvider";
import debounce from "lib/debounce";
export default function Searchbar(){
  const { setNameQuery } = useCountries();
  const debouncedInput = useCallback(debounce((query) =>{
    setNameQuery(query);
    
  },100),[setNameQuery])
  const onInput = (value:string) => {
    
    debouncedInput(value);
    
  }
  
  return (  
    <input className="input searchbar" type="text" placeholder="Search for a country..."  onChange={e => onInput(e.target.value)} />
  )
}