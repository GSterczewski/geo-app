import { useState, createContext, useContext } from "react";

enum Theme {
  Dark = "dark",
  Light = "light"
}

type ThemeProviderContext = {
  theme: Theme,
  themes:typeof Theme,
  switchTheme : () => void;
};

export const ThemeContext = createContext<ThemeProviderContext>({ theme:Theme.Light, themes:Theme, switchTheme: () =>{
  console.warn("no theme provider");
} });

export const useTheme = () => useContext(ThemeContext);
export const ThemeProvider:(props: React.PropsWithChildren<null>) => React.ReactNode = ({ children }) => {
  
  const [theme, setTheme] = useState(Theme.Light);
 
  const switchTheme = () => {
    console.log("switching theme")
    theme === Theme.Light ? setTheme(Theme.Dark) : setTheme(Theme.Light)
  };
  
  return(
    <ThemeContext.Provider value={{ theme, switchTheme, themes:Theme }}>
      { children }
    </ThemeContext.Provider>
  )
};
