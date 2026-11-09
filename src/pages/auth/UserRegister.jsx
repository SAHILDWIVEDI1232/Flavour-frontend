
import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth0share.css';
import axios from 'axios';
import{useNavigate} from 'react-router-dom'

const UserRegister = () => {

  const videoRef = useRef(null);
    const navigate=useNavigate()
  // Handle Registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/user/register",
        {
          fullName: firstName + " " + lastName,
          email,
          password
        },{withCredentials:true
    });

      alert(response.data.message || "Registration successful!");

      console.log("Registration Response:", response.data);
       navigate("/")
      e.target.reset();

    } catch (error) {
      console.error("Registration Error:", error);

      alert(
        error.response?.data?.message ||
        "Registration failed. Please try again."
      );
    }
  };

  // Background Video Speed
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="auth-container">

      {/* Background Video */}
      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source
          src="/videos/register-bg.mp4"
          type="video/mp4"
        />
      </video>

      {/* Video Overlay */}
      <div className="video-overlay"></div>

      {/* Register Form */}
      <div className="auth-card">

        <h2>Create Account</h2>

        <p>Join us and explore delicious food!</p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* First Name */}
          <div className="form-group">
            <label>First Name</label>

            <input
              type="text"
              name="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>

          {/* Last Name */}
          <div className="form-group">
            <label>Last Name</label>

            <input
              type="text"
              name="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              minLength={6}
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Register
          </button>

        </form>

        {/* Login Link */}
        <div className="auth-footer">
          Already have an account?

          <Link to="/user/login">
            {" "}Login
          </Link>
        </div>

        {/* Food Partner Registration */}
        <div className="role-switch">
          Want to register as a Food Partner?

          <Link to="/food-partner/register">
            {" "}Register as Food Partner
          </Link>
        </div>

      </div>

    </div>
  );
};

export default UserRegister;
