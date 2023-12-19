import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

export default function Navbar() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/public">Public</Link>
        </li>
        {isAuthenticated && (
          <li>
            <Link to="/protected">Protected</Link>
          </li>
        )}
        {!isAuthenticated && (
          <li>
            <LoginButton />
          </li>
        )}
        {isAuthenticated && (
          <li>
            <LogoutButton />
          </li>
        )}
      </ul>
    </div>
  );
}
