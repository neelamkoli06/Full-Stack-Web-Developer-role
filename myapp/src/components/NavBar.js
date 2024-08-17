import { Link } from "react-router-dom";
import "./Navbar.css";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container">
        <ul className="navbar-nav d-flex justify-content-around w-100">
          <li className="nav-item">
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">
              Products
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
