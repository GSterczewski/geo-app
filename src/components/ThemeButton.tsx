
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { useTheme } from "components/ThemeProvider";


export default function ThemeButton(){
  const { theme, themes, switchTheme} = useTheme();
  return (
    <button className="mode-button" onClick={switchTheme}>
      {theme === themes.Light ? <FaMoon className="mode-button__icon" /> : <IoSunnySharp className="mode-button__icon" />}
      <span className="mode-button__text">{theme === themes.Light ? 'Dark Mode' : 'Light Mode'}</span>
    </button>
  )
}