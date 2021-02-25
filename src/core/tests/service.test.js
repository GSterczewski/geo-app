
import CountriesService from "core/service";
import CountriesAPI from "core/api";
import { Country } from "core/country";
import  initServer from "../../mirageServer.js"; 


beforeAll(()=>{
   const server = initServer();
   server.logging = false;
})

const service = new CountriesService(new CountriesAPI("mirage/api"));

describe("CountriesService", ()=>{
  describe("getAllCountries", ()=>{

    it("should return all Countries", ()=>{
      return service.getAllCountries().then(response => {
        expect(response.hasErrors).toEqual(false);
        expect(response.result).toBeInstanceOf(Array);
        expect(response.result.length).toBeGreaterThan(0);
        response.result.forEach(country => {
          expect(country).toBeInstanceOf(Country);
        })
      })
    })
  })
  describe("getCountriesByName", ()=>{
    it("should return empty array when no country match provided pattern", ()=>{
      return service.getCountriesByName("chj").then(response => {
        expect(response.result).toBeInstanceOf(Array);
        expect(response.result).toHaveLength(0);
      })
    })
    it("should return array with countries matching provided pattern", ()=>{
      return service.getCountriesByName("poland").then(response =>{
        expect(response.result).toBeInstanceOf(Array);
        expect(response.result).toHaveLength(1);
        expect(response.result[0].name).toEqual("Poland");
      })
    })
  });
  describe("getCountryDetails", ()=>{
    it("should return full country data based on provided alpha3Code", () => {
      return service.getCountryDetails("poL")
      .then(response => {
        expect(response.result).toBeInstanceOf(Country);
        expect(response.result.name).toEqual("Poland");
        expect(response.result.borderCountries).toBeInstanceOf(Array);
        expect(response.result.borderCountries.length).toBeGreaterThan(0);
      });
    })
  })
})
