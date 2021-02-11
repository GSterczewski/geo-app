import { useContext } from "react";
import { ThemeContext } from "components/ThemeProvider";

interface LayourProps {
  children: React.ReactChildren;
}
const Layout = ({ children }: LayourProps) => {

  const { theme } =  useContext(ThemeContext);
  return (
    <div className={`${theme}-theme`}>
      <div className="wrapper">
        { children }
    </div>
    </div>
  )
}

export default Layout;