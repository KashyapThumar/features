import { Link, Outlet } from "react-router-dom";
import Logo from "../../assets/lion.png";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <header>
            <div className="flex items-center">
              <Link to="/">
                <img src={Logo} alt="Logo" className="logo" />
              </Link>
            </div>
            <nav>
              <Link to="/">Home</Link>
              <Link to="/products">Products</Link>
              <Link to="/about-us">About Us</Link>
              <Link to="/contact-us">Contact Us</Link>
            </nav>
          </header>
        </div>
        <Outlet />
      </div>
    </>
  );
};

export default Header;
