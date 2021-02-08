
export default function Header({ children }){
  return(
    <header className="element header">
      <h1 className="header__title">Where in the world ?</h1>
      {children}
    </header>
    )
};
