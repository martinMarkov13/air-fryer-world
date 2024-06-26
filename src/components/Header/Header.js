import { useLocation, Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

export default function Header() {
  const { isAuthenticated, userEmail } = useContext(AuthContext);

  const location = useLocation();
  const pathname = location.pathname.split("/")[1];
  return (
    <header>
      <div className="header">
        <div className="container">
                  <div className="logo">
                    <a href="/home">
                      <img
                        className="navBar-logo"
                        alt="Not available"
                        src="images/logo2.png"
                        style={{ maxWidth: "100%" }}
                      />
                    </a>
                  </div>
            {!isAuthenticated && (
              <div style={{width: "100%", display: "inline"}}>
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className={pathname === "home" ? "active" : ""}>
                          <Link to="/home">Home</Link>
                        </li>
                        <li className={pathname === "about" ? "active" : ""}>
                          <Link to="/about">What is Airfryer</Link>
                        </li>
                        <li className={pathname === "devices" ? "active" : ""}>
                          <Link to="/devices">Devices</Link>
                        </li>
                        <li className={pathname === "recipes" ? "active" : ""}>
                          <Link to="/recipes">All Recipes</Link>
                        </li>
                        <li className={pathname === "login" ? "active" : ""}>
                          <Link to="/login">Login</Link>
                        </li>
                        <li className={pathname === "register" ? "active" : ""}>
                          <Link to="/register">Register</Link>
                        </li>
                        <li className={pathname === "contacts" ? "active" : ""}>
                          <Link to="/contacts">Contact Us</Link>
                        </li>
                      </ul>
                    </nav>
              </div>
            )}

            {isAuthenticated && (
              <div  style={{width: "100%", display: "inline"}}>
                <div className="menu-area">
                  <div className="limit-box">
                    <nav className="main-menu">
                      <ul className="menu-area-main">
                        <li className={pathname === "about" ? "active" : ""}>
                          <Link to="/about">About</Link>
                        </li>
                        <li className={pathname === "devices" ? "active" : ""}>
                          <Link to="/devices">Devices</Link>
                        </li>
                        <li className={pathname === "recipes" ? "active" : ""}>
                          <Link to="/recipes">All Recipes</Link>
                        </li>
                        <li className={pathname === "myRecipes" ? "active" : ""}>
                          <Link to="/myRecipes">My Recipes</Link>
                        </li>
                        <li
                          className={pathname === "addRecipe" ? "active" : ""}
                          >
                          <Link to="/addRecipe">Add recipe</Link>
                        </li> 
                          <span style={{ fontWeight: 'bold', fontSize: "18px" }}> {userEmail}</span>
                        <li
                          className={pathname === "logout" ? "active" : ""}
                        >
                          <Link to="/logout">Logout</Link>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            )}
        </div>
      </div>
    </header>
  );
}
