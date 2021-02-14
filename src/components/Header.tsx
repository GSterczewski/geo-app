
interface HeaderProps{
  children: React.ReactChildren
}
export default function Header({ children }:HeaderProps){
  return(
    <header className="element header">
      <h1 className="header__title">Where in the world ?</h1>
      {children}
    </header>
    )
};
