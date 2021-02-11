
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

    it("should return first 2 Countries", ()=>{
      return service.getAllCountries(1,2).then(results => {
        expect(results).toBeInstanceOf(Array);
        expect(results).toHaveLength(2);
        results.forEach(result => {
          
          expect(result).toBeInstanceOf(Country);
        })
      })
    })
  })
})
