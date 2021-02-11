import { useCountries } from "components/CountriesProvider";
import CountriesList from "components/CountriesList";

const CountriesContainer = () => {

  const { countries } = useCountries();

  return (
    <>
      <h1>Countries</h1>
      <CountriesList countries = {countries} />
    </>
  )
};

export default CountriesContainer;