
import { useState } from "react";

import Header from "components/Header";
import ModeButton from "components/ModeButton";
import Searchbar from "components/Searchbar";
import RegionSelect from "components/RegionSelect";

function App() {
  
  const [mode, setMode] = useState("light");
  const regions = ["Africa", "America","Asia","Europe","Oceania"]  
  return (
    <div className={`${mode}-theme`}>
      <div className="wrapper">
        <Header>
          <ModeButton mode={mode} onThemeSwitch={() => mode === 'light'? setMode("dark") : setMode("light")} />
        </Header>
        <aside className="element controls">
        <Searchbar />
        <RegionSelect options={regions} />
        </aside>
      </div>
    </div>
  );
}

export default App;
