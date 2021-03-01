import CountriesAPI from "core/api";
import CountriesService from "core/service";

const RESTCOUNTRIES_URL = "https://restcountries.eu/rest/v2";
const TEST_URL = "mirage/api";

const prodService = new CountriesService(new CountriesAPI(RESTCOUNTRIES_URL));

const testService = new CountriesService(new CountriesAPI(TEST_URL));
const service = process.env.NODE_ENV === 'production' ? prodService : testService;

export default service;