import { createServer, Response } from "miragejs"
import stubs from "./stubs";

const apiURL = "mirage/api";
const initServer =  () => createServer({
  routes() {
    this.namespace = apiURL;
    this.get("/all", () => stubs);
    this.get("/error", ()=> new Response(500,{},{error: "Internal server error"}));
    this.get("/name/:name", (_,request)=>{
      const name = request.params.name;
      const result = stubs.filter(item => item.name.toLocaleLowerCase() === name.toLocaleLowerCase());
      return result && result.length ? result : new Response(404);
    });
    this.get("/alpha/:code", (_,request)=>{
      const code = request.params.code;
      return stubs.find(item => item.alpha3Code.toUpperCase() === code.toUpperCase()) || new Response(404);
    })
  },
});

export default initServer;

