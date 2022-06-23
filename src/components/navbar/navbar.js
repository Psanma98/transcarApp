import CartWidget from "./CartWidget";

const NavBar = () =>{

  return (
    <nav>
      <div className=" red nav-wrapper">
        <a href="#!" className="red brand-logo center-align"><i className=" material-icons "></i>TIENDA ONLINE</a>
        <ul className=" red right hide-on-med-and-down">

          <li>
            <a href="sass.html">
              <i className="material-icons">
                search
              </i>
            </a>
          </li>

          <li>
              <CartWidget/>
          </li>
  
          <li>
            <a href="mobile.html">
              <i className="material-icons">
                help_outline
              </i>

            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;