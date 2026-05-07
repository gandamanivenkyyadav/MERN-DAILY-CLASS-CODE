import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";

import "./Register.css";

function Register() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  
  // Handle Input Change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    toast.success("Registration Successful!");

    navigate("/login");
  };

  // Reset Form
  const handleCancel = () => {
    setFormData({
      fullName: "",
      email: "",
      password: "",
    });
  };

  return (
    <div className="register-container">
      <div className="register-card">

        <h2 className="register-title">Register</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Enter Full Name"
            value={formData.fullName}
            onChange={handleChange}
            className="register-input"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={formData.email}
            onChange={handleChange}
            className="register-input"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={formData.password}
            onChange={handleChange}
            className="register-input"
            required
          />

          <button type="submit" className="register-btn" onClick={handleCancel}>
            Register
          </button>

          <button
            type="button"
            className="cancel-btn-"
            
          >
            Cancel
          </button>
        </form>

        <p className="register-text">
          Already have an account?
          <Link to="/login" className="register-link">
            {" "}Login
          </Link>
        </p>

      </div>
    </div>
  );
}

export default Register;
