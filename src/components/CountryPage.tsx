
import { useParams, Link } from "react-router-dom";
import { useCallback, useState, useEffect } from "react";
import {  Country } from "core/country";
import { testService as service } from "core/index";

interface RouterParams {
  code: string
}

interface CountryDetailsProps {
  country: Country
}
 interface BorderListProps {
   borders: Array<{
     code:string;
     name:string;
   }>;
 }

const BorderList = ({ borders }: BorderListProps) =>  (
    <ul className="country-details__borders-list">
{borders.map(({name,code}) => (<li key={code} className="country-details__border-link" >
  <Link className="button" to={`/${code}`}>{name}</Link>
</li>))}
</ul>
  )
 

const CountryDetailsView = ({ country : {borderCountries, ...info} } : CountryDetailsProps) => (
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
      <BorderList borders={borderCountries}/>
      </div>
      </section>
  </article>
)
export default function CountryPage(){
  const { code }: RouterParams = useParams();
 
  const getDetails = useCallback(()=>service.getCountryDetails(code),[code])
  const [isLoading, setIsLoading] = useState(true);
  const [country, setCountry] = useState<Country|null>(null);
  const [error, setError] = useState<string|null>(null);
  
  useEffect(()=>{
    getDetails()
    .then(response => {
      if(response.error){
        setIsLoading(false);
        setError(response.error);
      }
      else{
        setIsLoading(false);
        setCountry(response.result);
      }
    })
  },[getDetails])

  if (isLoading) return (<div>loading....</div>)
  if (error) return (<div>{error}</div>)
  
  return(
    <div className="element">
      <Link to="/" className="button country-page__button">Back</Link>
      {country && <CountryDetailsView country={country} />}
    </div>
  )
}