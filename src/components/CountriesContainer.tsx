import { useCountries } from "components/CountriesProvider";
import CountriesList from "components/CountriesList";

export default function CountriesContainer() {

  const { countries } = useCountries();

  return (
    <>
      <h1>Countries</h1>
      <CountriesList countries = {countries} />
    </>
  )
};
