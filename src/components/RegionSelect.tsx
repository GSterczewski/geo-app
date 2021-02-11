import { useState } from "react";
import { useCountries } from "components/CountriesProvider";
import { WorldRegion } from "core/types";

export default function RegionSelect(){
  const { regions, selectRegion } = useCountries();
  const  [selectedRegion, setRegion] = useState("Filter by region");
  const handleChange = (region:WorldRegion) => {
    setRegion(region);
    selectRegion(region);
  }
  return (
    <select className="input region-select" value={selectedRegion} onChange={e => handleChange(e.target.value)}>
      <option disabled selected value={selectedRegion}>{selectedRegion}</option>
      {Object.values(regions).map(region => <option key={region} value={region} >{region}</option>)}
    </select>
  )
}