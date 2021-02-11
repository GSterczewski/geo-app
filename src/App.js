
import Layout from "components/Layout";
import Header from "components/Header";
import ThemeButton from "components/ThemeButton";
import Searchbar from "components/Searchbar";
import RegionSelect from "components/RegionSelect";

import { ThemeProvider } from "components/ThemeProvider";

function App() {
  
  const regions = [{
    id: 'region-1',
    name: "Africa",
    value: "africa"
  },{
    id: 'region-2',
    name: "America",
    value: "america"
  },
  {
    id: 'region-3',
    name: "Asia",
    value: "asia"
  },
  {
    id: 'region-4',
    name: "Europe",
    value: "europe"
  },{
    id: 'region-5',
    name: "Oceania",
    value: "oceania"
  }]
  
  

  return (
    <ThemeProvider>
    <Layout>
        <Header>
          <ThemeButton />
        </Header>
        <aside className="element controls">
        <Searchbar />
        <RegionSelect options={regions} label="Filter by region" />
        </aside>
        <main>
        </main>
    </Layout>
      
    </ThemeProvider>
  );
}

export default App;
