import { Link } from "react-router-dom";
import { useState }  from "react";
export interface CountryInfoProps{
  name:string;
  population:number;
  capital:string;
  flag:string;
  region:string;
  alpha3Code:string;
}

const CountryInfo = ({ alpha3Code, name, population, capital, flag, region } : CountryInfoProps) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const styling = {
    hidden : {
      display:'none'
    },
  }
  return (
    <li className="country-info">
    <Link className="country-info__link" to={`/${alpha3Code}`}>
     <div className="country-info__flag-container">
      <img className="country-info__flag" style={ imgLoaded ? {} : styling.hidden } src={flag} alt={`${name} flag`} onLoad={()=>setImgLoaded(true)}></img>
    </div> 
    <div className="country-info__content">
      <p className="country-info__name">{name}</p>
      <p><span className="country-info__label">Population: </span>{population}</p>
      <p><span className="country-info__label">Region: </span>{region}</p>
      <p><span className="country-info__label">Capital: </span>{capital}</p>
    </div>
    </Link>
  </li>
    )
  };

export default CountryInfo;