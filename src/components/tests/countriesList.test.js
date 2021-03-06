import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import CountriesList from "components/CountriesList";
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

describe("ContainerList", ()=>{
  it("renders component and message, when empty array was passed as prop", ()=>{
    act(()=>{
      ReactDOM.render(<CountriesList countries={[]} />, container);
    });
    const heading = document.querySelector("h1");
    expect(heading.textContent.length).toBeGreaterThan(0);
  });
  it("renders component and message, when no props were passed", ()=>{
    act(()=>{
      ReactDOM.render(<CountriesList />, container);
    });
    const heading = document.querySelector("h1");
    expect(heading.textContent.length).toBeGreaterThan(0);
  });
  it("renders component and list of countries", ()=>{
    const stubCountries = global.stubs.countriesInfo;
    act(()=>{
      ReactDOM.render(<Router><CountriesList countries={stubCountries} /> </Router>, container);
    });
    const ul = document.querySelector("ul");
    const children = ul.children;
    expect(ul).toBeDefined();
    expect(children).toBeDefined();
    expect(children.length).toBeGreaterThan(0);
  })
})