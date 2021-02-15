import Searchbar from "components/Searchbar";
import RegionSelect from "components/RegionSelect";
import CountriesContainer from "components/CountriesContainer";

export default function HomePage(){
  return (
    <div className="home-page">
        <aside className="element controls">
        <Searchbar />
        <RegionSelect/>
        </aside>
        <main className="element">
          <CountriesContainer />
        </main>
    </div> 
  )
}