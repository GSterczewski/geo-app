
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useState } from "react";

function ModeButton({mode, onThemeSwitch}){
  return (
    <button className="mode-button" onClick={onThemeSwitch}>
      {mode === "light" ? <FaMoon className="mode-button__icon" /> : <IoSunnySharp className="mode-button__icon" />}
      <span className="mode-button__text">{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  )
}

function App() {
  
  const [mode, setMode] = useState("light");
  
  return (
    <div className={`${mode}-theme`}>
      <div className="wrapper">
      <header className="header">
        <h1 className="header__title">Where in the world ?</h1>
        <ModeButton mode={mode} onThemeSwitch={() => mode === 'light'? setMode("dark") : setMode("light")} />
      </header>
      </div>
    </div>
  );
}

export default App;
