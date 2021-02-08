
import { useState } from "react";

import Header from "components/Header";
import ModeButton from "components/ModeButton";

function App() {
  
  const [mode, setMode] = useState("light");
  
  return (
    <div className={`${mode}-theme`}>
      <div className="wrapper">
        <Header>
          <ModeButton mode={mode} onThemeSwitch={() => mode === 'light'? setMode("dark") : setMode("light")} />
        </Header>
      </div>
    </div>
  );
}

export default App;
