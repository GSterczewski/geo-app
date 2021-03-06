import { useCountries } from "components/CountriesProvider";
import { WorldRegion } from "core/types";

export default function RegionSelect(){
  const { regions, selectRegion, selectedRegion } = useCountries();
  
  
  const handleChange = (region: string) => {
        selectRegion(region as WorldRegion);
  };
  
  return (
    <select className="input region-select"  value={selectedRegion} aria-label="filter by world region"  onChange={e => handleChange(e.target.value)}>
      <option disabled  defaultValue="">Filter by region</option>
      {Object.values(regions).map(region => <option key={region} value={region} >{region}</option>)}
    </select>
  )
}