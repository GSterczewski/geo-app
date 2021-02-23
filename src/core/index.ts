import CountriesAPI from "core/api";
import CountriesService from "core/service";

const RESTCOUNTRIES_URL = "https://restcountries.eu/rest/v2";
const TEST_URL = "mirage/api";

const service = new CountriesService(new CountriesAPI(RESTCOUNTRIES_URL));

export const testService = new CountriesService(new CountriesAPI(TEST_URL));

export default service;