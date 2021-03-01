import CountriesAPIService from "core/api";
import  initServer from "../../mirageServer.js"; 


beforeAll(()=>{
   const server = initServer();
   server.logging = false;
});


describe("CountriesAPIService", ()=>{
  const service = new CountriesAPIService("mirage/api");
  
  describe("fetchAll", () => {
    it("should successfully fetch all countries from api", () => {
      return service.fetchAll().then(response =>{
        expect(response).toBeDefined();
        expect(response).toBeInstanceOf(Array);
        expect(response.length).toBeGreaterThan(0);      
      });
      
    });
  });
  
  describe("fetchByName", ()=>{
    it("should successfully fetch country by specified name", () => {
      return service.fetchByName("japan").then(response =>{
        expect(response).toBeDefined();
          expect(response).toBeInstanceOf(Array);
          expect(response.length).toBeGreaterThan(0);
          expect(response[0].capital).toEqual("Tokyo");
        }) 
      });

      it("should return Not Found error message when there is no country that match specified name", ()=>{
        return service.fetchByName("chj").catch(error => {
          expect(error).toBeInstanceOf(Error)
        })

     });
    });
    describe("fetchByAlphaCodes",()=>{
      it("should successfully fetch countries by alpha3Codes", () => {
        return service.fetchByAlphaCodes(["POL","jpn"]).then(response =>{
          
          expect(response).toBeDefined();
          expect(response).toBeInstanceOf(Array);
          expect(response.length).toEqual(2);
          
        }) 
      });
      it("should return Not Found error message when there is no country that match specified code", ()=>{
        return service.fetchByAlphaCodes(["chj"]).catch(error => {
          expect(error).toBeInstanceOf(Error);
        })
     });

    });
  
  });
