import { useCallback, useState } from "react";
import { useCountries } from "components/CountriesProvider";
import debounce from "lib/debounce";
export default function Searchbar(){

  const { nameQuery, setNameQuery } = useCountries();
  const [localQuery, setLocalQuery] = useState(nameQuery || "");
  const debouncedInput = useCallback(debounce((query) =>{
    setNameQuery(query);
    
  },100),[setNameQuery])
  const onInput = (value:string) => {
    setLocalQuery(value);
    debouncedInput(value);
    
  }
  
  return (  
    <input className="input searchbar" type="text" aria-label="search for a country" placeholder="Search for a country..." value={localQuery}  onChange={e => onInput(e.target.value)} />
  )
}