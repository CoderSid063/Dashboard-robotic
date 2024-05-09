import "../styles/navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/authSlice";
import URL from "../utils/util";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = async () => {
    try {
      const response = await fetch(`${URL}/users/logout`, {
        method: "POST",
        credentials: "include",
      });
      console.log(response);

      if (response.status === 200) {
        // Clear tokens from Redux store and local storage
        dispatch(authActions.clearTokens());
        alert("Logout Successfully");
        navigate("/");
      } else {
        console.error("Failed to logout:", response.data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return (
    <div className="nav">
      <h1>Robot</h1>
      {isAuthenticated ? (
        <>
          <Link to="user-profile">
            <FontAwesomeIcon icon={faUser} />
          </Link>

          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <Link to="login">
          <button>Login</button>
        </Link>
      )}
    </div>
  );
};

export default Navbar;
