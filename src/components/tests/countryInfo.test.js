import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import CountryInfo from "components/CountryInfo";
import { BrowserRouter as Router } from "react-router-dom";
let container;

beforeEach(()=>{
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(()=>{
  document.body.removeChild(container);
  container = null;
});

describe("CountryInfo", ()=>{
  it("renders component with all info passed as props", ()=>{
    const stub = global.stubs.countriesInfo[0];
    act(()=>{
      ReactDOM.render(
      <Router>
        <CountryInfo {...stub} />
      </Router>, container )
    });
    const img = document.querySelector("img");
    const link = document.querySelector("a");
    const info = Array.from(document.getElementsByClassName("country-info__content")[0].children);
    expect(link.getAttribute("href")).toEqual(`/${stub.alpha3Code}`)
    expect(img.getAttribute("src")).toBeDefined();
    expect(img.getAttribute("src")).toEqual(stub.flag);
    expect(info.some(element => element.textContent === stub.name)).toEqual(true);
    expect(info.some(element => element.textContent === `Population: ${stub.population}`)).toEqual(true);
    expect(info.some(element => element.textContent === `Capital: ${stub.capital}`)).toEqual(true);
    expect(info.some(element => element.textContent === `Region: ${stub.region}`)).toEqual(true);
  });
  it("renders component when some info is missing", ()=> {
    const stub = {
      alpha3Code: "GER",
      name: "Some country",
      population: null,
      flag: "urlToFlag"
    }
    act(()=>{
      ReactDOM.render(
      <Router>
        <CountryInfo {...stub} />
      </Router>, container )
    });
    const img = document.querySelector("img");
    const link = document.querySelector("a");
    const info = Array.from(document.getElementsByClassName("country-info__content")[0].children);
    expect(link.getAttribute("href")).toEqual(`/${stub.alpha3Code}`)
    expect(img.getAttribute("src")).toBeDefined();
    expect(img.getAttribute("src")).toEqual(stub.flag);
    expect(info.some(element => element.textContent === stub.name)).toEqual(true);
    expect(info.some(element => element.textContent === `Population: `)).toEqual(true);
    expect(info.some(element => element.textContent === `Capital: `)).toEqual(true);
    expect(info.some(element => element.textContent === `Region: `)).toEqual(true);
    
  })
})