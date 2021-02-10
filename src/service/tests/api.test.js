import  initServer from "../../../mirageServer.js"; 
import CountriesAPIService from "service/api";


beforeAll(()=>{
   const server = initServer();
   server.logging = false;
})

const testSuccessResponse = (response) => {
  expect(response.hasErrors).toBeDefined();
  expect(response.hasErrors).toEqual(false);
  expect(response.result).toBeDefined();
  
};

const testFailResponse = (response) => {
  expect(response.hasErrors).toBeDefined();
  expect(response.hasErrors).toEqual(true);
  expect(response.result).not.toBeDefined();
  expect(response.error).toBeDefined();
};

describe("CountriesAPIService", ()=>{
  const service = new CountriesAPIService("mirage/api");
  
  describe("fetchAll", () => {
    it("should successfully fetch all countries from api", () => {
      return service.fetchAll().then(response =>{
        testSuccessResponse(response);
        expect(response.result).toBeInstanceOf(Array);
        expect(response.result.length).toBeGreaterThan(0);      
      });
      
    });
  });

    describe("fetchByName", ()=>{
      it("should successfully fetch country by specified name", () => {
        return service.fetchByName("japan").then(response =>{
          testSuccessResponse(response);
          expect(response.result).toBeInstanceOf(Array);
          expect(response.result.length).toBeGreaterThan(0);
          expect(response.result[0].capital).toEqual("Tokyo");
        }) 
      });

      it("should return Not Found error message when there is no country that match specified name", ()=>{
        return service.fetchByName("chj").then(response =>{
          testFailResponse(response);
          expect(response.error).toEqual("Not Found");
        });

     });
    });
    describe("fetchByAlphaCode",()=>{
      it("should successfully fetch country by alpha3code", () => {
        return service.fetchByAlphaCode("POL").then(response =>{
          testSuccessResponse(response);
          expect(response.result).toBeInstanceOf(Object);
          expect(response.result.name).toEqual("Poland");
        }) 
      });
      it("should return Not Found error message when there is no country that match specified code", ()=>{
        return service.fetchByAlphaCode("chj").then(response =>{
          testFailResponse(response);
          expect(response.error).toEqual("Not Found");
        })
     });

    });
  
  });
