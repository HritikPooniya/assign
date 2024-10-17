import React, { useState } from "react"; 
import { useAuth } from "./AuthContext";
import { useDispatch,  } from "react-redux";
import "../styles/register.css";
import { useNavigate,Navigate } from "react-router-dom";
import api from "../Api";

const Login = () => {
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [data, setData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const dispatch = useDispatch();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" />;
  }

  const handleInput = (e, name) => {

 
    
    const value = e.target.value;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[0-9])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    // Validate email
    if (!data.email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      valid = false;
    } else if (!validateEmail(data.email)) {
      setErrors((prev) => ({ ...prev, email: "Invalid email format" }));
      valid = false;
    }

    // Validate password
    if (!data.password) {
      setErrors((prev) => ({ ...prev, password: "Password is required" }));
      valid = false;
    } else if (!validatePassword(data.password)) {
      setErrors((prev) => ({
        ...prev,
        password:
          "Password must be at least 8 characters long, contain at least one number and one uppercase letter",
      }));
      valid = false;
    }

    if (valid) {
      try {
        const response = await api.post("/users/login", data);
        const { accessToken, refreshToken } = response.data?.data; 

        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        const username = response?.data?.data?.user?.username;
        console.log({username})

        dispatch(login(username));
        login();
        navigate("/dashboard");
      } catch (error) {
        alert(error?.data?.message);
        console.error("Login failed:", error);
      }
    }
  };

  return (
    <>
      <div className="registerBlock">
        <h3>LogIn</h3>
        <img src="/assets/signup.webp" alt="" />

        <div className="mx-auto">
          <input
            type="email"
            placeholder="Enter your Email"
            onChange={(e) => handleInput(e, "email")}
          />
          {errors.email && (
            <div className="error" style={{ color: "red", fontSize: "12px" }}>
              {errors.email}
            </div>
          )}
        </div>
        <div className=" text-center">
          <input
            type="password"
            placeholder="Enter your password"
            onChange={(e) => handleInput(e, "password")}
          />
          {errors.password && (
            <div
              className="error mt-0 pt-"
              style={{ color: "red", fontSize: "12px" }}
            >
              {errors.password}
            </div>
          )}
        </div>
        <button onClick={handleSubmit}>LogIn</button>
      </div>
      <button className="singUpbtn mt-2" onClick={() => navigate("/register")}>
        Register ?
      </button>
    </>
  );
};

export default Login;
