import { createServer, Response } from "miragejs"
import stubs from "./stubs";

const apiURL = "mirage/api";
//const apiURL = "https://restcountries.eu/rest/v2";

const initServer =  () => createServer({
  routes() {
    this.namespace = apiURL;
    this.get("/all", () => {
      return stubs;
    });
    
    this.get("/alpha", (_,request) => {
      const codes = request.queryParams.codes.split(";").map(code => code.toUpperCase());
      
      if(codes && codes.length){
       
        const result =  stubs.filter(stub => codes.includes(stub.alpha3Code) || codes.includes(stub.alpha2Code))
        return result.length ? result : new Response(404); 
      }
      return Response(400);
    });
        
    this.get("/error", ()=> new Response(500));
    this.get("/name/:name", (_,request)=>{
      const name = request.params.name;
      const result = stubs.filter(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return result && result.length ? result : new Response(404);
    });

    this.get("/alpha/:code", (_ , request)=>{
      const code = request.params.code;
      return stubs.find(item => item.alpha3Code.toUpperCase() === code.toUpperCase()) || new Response(404);
    })
  },
});

export default initServer;

