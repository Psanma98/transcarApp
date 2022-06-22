import MarketCart from "./CartWidget";

const Navbar = () =>{

  return (

    <nav>

      <div class="nav-wrapper">
        <a href="#!" class="brand-logo"><i class="material-icons"></i>TIENDA ONLINE</a>
        <ul class="right hide-on-med-and-down">

          <li>

            <a href="sass.html">

              <i class="material-icons">
                search
              </i>

            </a>

          </li>

          <li id="cart"><MarketCart/></li>
  
          <li>

            <a href="mobile.html">

              <i class="material-icons">

                help_outline

              </i>

            </a>
            
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default Navbar;