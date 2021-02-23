import { Link } from "react-router-dom";

interface CountryInfoProps{
  name:string;
  population:number;
  capital:string;
  flag:string;
  region:string;
  alpha3Code:string;
}

interface CountriesListProps{
  countries: Array<CountryInfoProps>;
}

const CountryInfo = ({ alpha3Code, name, population, capital, flag, region } : CountryInfoProps) => (
      <li className="country-info">
        <Link className="country-info__link" to={`/${alpha3Code}`}>
        <img className="country-info__flag" src={flag} alt={`${name} flag`}></img>
        <div className="country-info__content">
          <p className="country-info__name">{name}</p>
          <p><span className="country-info__label">Population: </span>{population}</p>
          <p><span className="country-info__label">Region: </span>{region}</p>
          <p><span className="country-info__label">Capital: </span>{capital}</p>
        </div>
        </Link>
      </li>
);

const CountriesList = ({countries}:CountriesListProps) => {
  if(!countries.length) return (<h1>No countries found</h1>)
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