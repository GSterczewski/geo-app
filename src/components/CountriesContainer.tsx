import { useCountries } from "components/CountriesProvider";
import CountriesList from "components/CountriesList";

export default function CountriesContainer() {

  const { countries } = useCountries();

  return (
    <>
      <CountriesList countries = {countries} />
    </>
  )
};
