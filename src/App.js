
import { ThemeProvider } from "components/ThemeProvider";
import  CountriesProvider  from "components/CountriesProvider";

import Layout from "components/Layout";
import Header from "components/Header";
import ThemeButton from "components/ThemeButton";
import Searchbar from "components/Searchbar";
import RegionSelect from "components/RegionSelect";
import CountriesContainer from "components/CountriesContainer";

function App() {
  return (
    <ThemeProvider>
    <Layout>
        <Header>
          <ThemeButton />
        </Header>
        <CountriesProvider>
        <aside className="element controls">
        <Searchbar />
        <RegionSelect/>
        </aside>
        <main className="element">
          <CountriesContainer />
        </main>
        </CountriesProvider>
    </Layout>
      
    </ThemeProvider>
  );
}

export default App;
