import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import URL from "../utils/util";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    phoneNumber: "",
    password: "",
  });

  const handleLoginInputChange = (e) => {
    const { name, value } = e.target;
    setLoginFormData({
      ...loginFormData,
      [name]: value,
    });
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`${URL}/users/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginFormData),
        credentials: "include", // without this we can't store token in cookie storage only in "localhost"
      });
      if (response.status === 200) {
        const responseData = await response.json();

        console.log(responseData);

        // Reset form after submission
        setLoginFormData({
          email: "",
          phoneNumber: "",
          password: "",
        });

        navigate("/");
      } else {
        console.log("Error logging in:", response.statusText);
      }
    } catch (error) {
      console.log("Error logging in:", error);
    }
  };

  return (
    <div className="home">
      <div className="form_container">
        <form onSubmit={handleLoginSubmit}>
          <h2>Login</h2>
          <div className="input_box">
            <input
              type="text"
              name="email"
              value={loginFormData.email}
              onChange={handleLoginInputChange}
              placeholder="Enter Email-ID"
            />
            <div className="line"></div>
          </div>
          <div className="input_box">
            <input
              type="text"
              name="phoneNumber"
              value={loginFormData.phoneNumber}
              onChange={handleLoginInputChange}
              placeholder="Enter Phone No"
            />
            <div className="line"></div>
          </div>
          <div className="input_box">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={loginFormData.password}
              onChange={handleLoginInputChange}
              placeholder="Enter Password"
              required
            />
            <div
              className="password-toggle"
              onClick={handleTogglePasswordVisibility}
            >
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </div>
            <div className="line"></div>
          </div>
          <button className="button" type="submit">
            Login Now
          </button>

          <div className="login_signup">
            Dont have an account?
            <Link to="/login/register" className="forgot_pw">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
