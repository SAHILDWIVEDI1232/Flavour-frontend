
import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/auth0share.css';

const FoodPartnerLogin = () => {
  const videoRef = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/food-partner/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Login Response:", response.data);

      alert(response.data.message || "Food Partner Login Successful!");

      e.target.reset();
      navigate('/create-food');

    } catch (error) {
      console.error("Food Partner Login Error:", error);

      alert(
        error.response?.data?.message ||
        "Login failed. Please check your email and password."
      );
    }
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <div className="auth-container">

      <video
        ref={videoRef}
        className="background-video"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/register-bg.mp4" type="video/mp4" />
      </video>

      <div className="video-overlay"></div>

      <div className="auth-card">
        <h2>Food Partner Login</h2>
        <p>Login to manage your business.</p>

        <form className="auth-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <button type="submit" className="auth-button">
            Login
          </button>

        </form>

        <div className="auth-footer">
          New Food Partner?
          <Link to="/food-partner/register"> Register</Link>
        </div>

      </div>
    </div>
  );
};

export default FoodPartnerLogin;
