import React, { useState } from "react";
import "../styles/register.css";
import { useNavigate } from "react-router-dom";
import api from "../Api";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleInput = (e, name) => {
    const value = e.target.value;
    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validateUsername = (username) => {
    return username === username.toLowerCase();
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

    // Validate username
    if (!data.username) {
      setErrors((prev) => ({ ...prev, username: "Username is required" }));
      valid = false;
    } else if (!validateUsername(data.username)) {
      setErrors((prev) => ({
        ...prev,
        username: "Username must be in lowercase",
      }));
      valid = false;
    }

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
        const response = await api.post("/users/register", data);
        console.log(response.data);
        if (response.status === 201) {
          alert("User registered");
          navigate("/login");
        }
      } catch (error) {
        alert(
          "Error: " + (error.response ? error.response.data : error.message)
        );
      }
    }
  };

  return (
    <div className="registerBlock">
      <h3>Register User</h3>
      <img src="/assets/signup.webp" alt="" />
      <div className=" text-center">
        <input
          type="text"
          placeholder="Enter your Name"
          onChange={(e) => handleInput(e, "username")}
        />
        {errors.username && (
          <div
            className="error mt-0 pt-0"
            style={{ color: "red", fontSize: "12px" }}
          >
            {errors.username}
          </div>
        )}
      </div>

      <div className=" text-center">
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
          <div className="error" style={{ color: "red", fontSize: "12px" }}>
            {errors.password}
          </div>
        )}
      </div>

      <button onClick={handleSubmit}>Register</button>
    </div>
  );
};

export default Register;
