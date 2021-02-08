import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";

export default function ModeButton({mode, onThemeSwitch}){
  return (
    <button className="mode-button" onClick={onThemeSwitch}>
      {mode === "light" ? <FaMoon className="mode-button__icon" /> : <IoSunnySharp className="mode-button__icon" />}
      <span className="mode-button__text">{mode === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  )
}