import { Link } from "react-router-dom";

const isLoggedIn = () => !!localStorage.getItem("token");

function Layout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          {isLoggedIn() ? (
            <>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/logout">Logout</Link></li>
            </>
          ) : (
            <>
              <li><Link to="/register">Register</Link></li>
              <li><Link to="/login">Login</Link></li>
            </>
          )}
        </ul>
      </nav>
      <main>{children}</main>
    </>
  );
}

export default Layout;
