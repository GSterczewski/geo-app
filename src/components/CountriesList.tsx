
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
      <li className="dummy-country-info" aria-hidden="true"></li>
      <li className="dummy-country-info" aria-hidden="true"></li>
    </ul>
  </>
  )
};

export default CountriesList;