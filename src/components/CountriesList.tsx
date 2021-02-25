
import CountryInfo, { CountryInfoProps } from "components/CountryInfo";

interface CountriesListProps{
  countries: Array<CountryInfoProps>;
}

const CountriesList = ({countries}:CountriesListProps) => {
  if(!countries || !countries.length) return (<h1>No countries found</h1>)
  return (
    <>
    <ul className="country-list">
    {countries.map(country=>(
      <CountryInfo key={country.alpha3Code} {...country} />
      ))}
    </ul>
  </>
  )
};

export default CountriesList;