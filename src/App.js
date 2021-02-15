import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import { ThemeProvider } from "components/ThemeProvider";
import  CountriesProvider  from "components/CountriesProvider";
import Layout from "components/Layout";
import Header from "components/Header";
import ThemeButton from "components/ThemeButton";
import HomePage from "components/HomePage";
import CountryPage from "components/CountryPage";

function App() {

  return (
    <ThemeProvider>
    <Layout>
        <Header>
          <ThemeButton />
        </Header>
        <CountriesProvider>
        <Router>
          <Switch>
            <Route path="/" exact>
              <HomePage />
            </Route>
            <Route path="/:name" exact>
              <CountryPage />
            </Route>
          </Switch>
        </Router>
        </CountriesProvider>
    </Layout>
      
    </ThemeProvider>
  );
}

export default App;
