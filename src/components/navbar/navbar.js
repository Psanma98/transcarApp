import CartWidget from "./CartWidget";



const NavBar = () =>{

  return (
    <>
    <nav>
      <div className="red nav-wrapper">
        <a href="g.html" className="red">
        TRANSCAR DEL VALLE</a>
        <ul className="red right hide-on-med-and-down">
        </ul>
      </div>
</nav>
<nav>
  <div className="nav-wrapper">
      <a href="#!" className="brand-logo">"logo"</a>
    <a href="5.html" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons"></i></a>
    <ul className="right hide-on-med-and-down">
      <li><a href="sass.html"><i className="material-icons">search</i></a></li>
      <li><a href="badges.html"><CartWidget/></a></li>
      <li><a href="collapsible.html"><i className="material-icons">help_outline</i></a></li>
      
    </ul>
  </div>
</nav>
</>
  );
 
}



export default NavBar;