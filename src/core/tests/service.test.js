
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
      return service.getAllCountries().then(results => {
        expect(results).toBeInstanceOf(Array);
        expect(results.length).toBeGreaterThan(0);
        results.forEach(result => {
          expect(result).toBeInstanceOf(Country);
        })
      })
    })
  })
  describe("getCountriesByName", ()=>{
    it("should return empty array when no country match provided pattern", ()=>{
      return service.getCountriesByName("chj").then(results => {
        expect(results).toBeInstanceOf(Array);
        expect(results).toHaveLength(0);
      })
    })
  })
})
