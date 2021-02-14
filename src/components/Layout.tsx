import { useContext } from "react";
import { ThemeContext } from "components/ThemeProvider";

interface LayoutProps {
  children: React.ReactChildren;
}
const Layout = ({ children }: LayoutProps) => {

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