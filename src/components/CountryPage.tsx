
import { useParams, Link } from "react-router-dom";
import { useCountries } from "./CountriesProvider";
import { useMemo } from "react";
import { Country } from "core/country";

interface RouterParams {
  name: string
}

interface CountryDetailsProps {
  country: {
    info: Country,
    borderCountries: Array<Country["name"] | undefined>
  }
}
const CountryDetails = ({ country : {info, borderCountries} } : CountryDetailsProps) => (
  <div className="country-details">
      <img className="country-details__img" src={info.flag} alt={`${info.name} flag`}/>
      <h2 className="country-details__heading country-details__name">{info.name}</h2>
      <ul className="country-details__list">
        <li><span className="country-details__label">Native name: </span>{info.nativeName}</li>
        <li><span className="country-details__label">Population: </span>{info.population}</li>
        <li><span className="country-details__label">Region: </span>{info.region}</li>
        <li><span className="country-details__label">Sub Region: </span>{info.subregion}</li>
        <li><span className="country-details__label">Capital: </span>{info.capital}</li>
      </ul>
      <ul className="country-details__list">
        <li><span className="country-details__label">Top Level Domain: </span>{info.topLevelDomain}</li>
        <li><span className="country-details__label">Currencies: </span>{info.currencies.join(" ")}</li>
        <li><span className="country-details__label">Languages: </span>{info.languages.join(" ")}</li>
      </ul>
      <h3>Border Countries</h3>
      <ul>
        {borderCountries.map(name => (<li key={name} className="button">
          <Link to={`/${name}`}>{name}</Link>
        </li>))}

      </ul>
  </div>
)
export default function CountryPage(){
  const { name }: RouterParams = useParams();
  const { countries } = useCountries();
  const selectedCountry = useMemo(()=> {
    const country = countries.find(country => country.name === name);
    const borderCountries = country ? country.borderCodes.map(code => countries.find(country => country.alpha3Code === code)?.name).filter(Boolean) : [];
    
    return {
      info:country,
      borderCountries
    }
  }, [name,countries]);
  
  if (!selectedCountry.info) return
  
  return(
    <div className="element">
      <Link to="/" className="button">Back</Link>
      <CountryDetails country={{info:selectedCountry.info, borderCountries:selectedCountry.borderCountries}} />
    </div>
  )
}