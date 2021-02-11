

interface CountryInfoProps{
  name:string;
  population:number;
  capital:string;
  flag:string;
  region:string;
}
interface CountryFullInfo extends CountryInfoProps {
  alpha3Code:string;

}
interface CountriesListProps{
  countries: Array<CountryFullInfo>;
}

const CountryInfo = ({name,population,capital,flag,region} : CountryInfoProps) => (
      <li className="country-info">
        <img className="country-info__flag" src={flag} alt={`${name} flag`}></img>
        <div className="country-info__content">
          <p className="country-info__name">{name}</p>
          <p><span className="country-info__label">Population: </span>{population}</p>
          <p><span className="country-info__label">Region: </span>{region}</p>
          <p><span className="country-info__label">Capital: </span>{capital}</p>
        </div>
      </li>
);

const CountriesList = ({countries}:CountriesListProps) => {

  return (
    <>
    <ul className="country-list">
    {countries.map(({alpha3Code,...country})=>(
      <CountryInfo key={alpha3Code} {...country} />
      ))}
    </ul>
  </>
  )
};

export default CountriesList;