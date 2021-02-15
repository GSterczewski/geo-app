import { useContext } from "react";
import { ThemeContext } from "components/ThemeProvider";

interface LayoutProps {
  children: React.ReactChildren;
}
const Layout = ({ children }: LayoutProps) => {

  const { theme } =  useContext(ThemeContext);
  return (
    <div className={`wrapper ${theme}-theme`}>
        { children }
    </div>
  )
}

export default Layout;