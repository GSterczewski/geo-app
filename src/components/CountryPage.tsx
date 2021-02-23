
import { useParams, Link } from "react-router-dom";
import { useCallback } from "react";
import useService from "hooks/useService";
import {  Country } from "core/country";
import { testService as service } from "core/index";

interface RouterParams {
  code: string
}

interface CountryDetailsProps {
  country: Country
}
 interface BorderListProps {
   borders: Array<string>;
 }

const BorderList = ({ borders }: BorderListProps) => {
  const getBorderNames = useCallback(()=> service.getCountryNamesByCodes(borders),[borders])
  const {isLoading, error, resource : borderCountries} = useService<Array<{code:string;name:string}>>(getBorderNames);

  if(isLoading) return (<ul className="country-details__borders-list">
    <li className="country-details__border-link">
      <div className="button">loading...</div>
    </li>
  </ul>)
  if(error.length) return <div>{error}</div>
  return (
    <ul className="country-details__borders-list">
{borderCountries && borderCountries.map(({name,code}) => (<li key={code} className="country-details__border-link" >
  <Link className="button" to={`/${code}`}>{name}</Link>
</li>))}
</ul>
  )
} 

const CountryDetailsView = ({ country : {borderCodes, ...info} } : CountryDetailsProps) => (
  <article className="country-details">
      <img className="country-details__img" src={info.flag} alt={`${info.name} flag`}/>
      
      <section className="country-details__info">
      <h2 className="country-details__name">{info.name}</h2>
      <div className="country-details__lists">
      <ul className="country-details__main-list">
        <li className="country-details__list-item"><span className="country-details__label">Native name: </span>{info.nativeName}</li>
        <li className="country-details__list-item"><span className="country-details__label">Population: </span>{info.population}</li>
        <li className="country-details__list-item"><span className="country-details__label">Region: </span>{info.region}</li>
        <li className="country-details__list-item"><span className="country-details__label">Sub Region: </span>{info.subregion}</li>
        <li className="country-details__list-item"><span className="country-details__label">Capital: </span>{info.capital}</li>
      </ul>
      <ul className="country-details__secondary-list">
        <li className="country-details__list-item"><span className="country-details__label">Top Level Domain: </span>{info.topLevelDomain}</li>
        <li className="country-details__list-item"><span className="country-details__label">Currencies: </span>{info.currencies.join(" ")}</li>
        <li className="country-details__list-item"><span className="country-details__label">Languages: </span>{info.languages.join(" ")}</li>
      </ul>
      </div>
      
      <div className="country-details__borders">
      <h3 className="country-details__label">Border Countries: </h3>
      <BorderList borders={borderCodes}/>
      </div>
      </section>
  </article>
)
export default function CountryPage(){
  const { code }: RouterParams = useParams();
 
  const getDetails = useCallback(()=>service.getCountryDetails(code),[code])
  const { isLoading, error, resource } = useService<Country | undefined>(getDetails)
  
 
  if (isLoading) return (<div>loading....</div>)
  if (error.length) return (<div>{error}</div>)
  
  return(
    <div className="element">
      <Link to="/" className="button country-page__button">Back</Link>
      {resource && <CountryDetailsView country={resource} />}
    </div>
  )
}