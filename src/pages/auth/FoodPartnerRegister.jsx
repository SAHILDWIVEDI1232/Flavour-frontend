
import React, { useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/auth0share.css';

const FoodPartnerRegister = () => {

  const videoRef = useRef(null);
  const navigate = useNavigate();

  // Handle Food Partner Registration
  const handleSubmit = async (e) => {
    e.preventDefault();

    const businessName = e.target.businessName.value;

    const email = e.target.email.value;
    const contactname = e.target.contactname.value;
    const phoneno = e.target.phoneno.value;
    const password = e.target.password.value;

    try {

      const response = await axios.post(
        "http://localhost:3000/api/auth/food-partner/register",
        {
          name: businessName,
          email,
          password,
          contactname,
          phoneno
        },
        {
          withCredentials: true
        }
      );

      console.log("Registration Response:", response.data);

      alert(response.data.message || "Food Partner Registered Successfully!");

      e.target.reset();

      navigate("/create-food");

    } catch (error) {

      console.error("Food Partner Registration Error:", error);

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

      <div className="video-overlay"></div>

      {/* Food Partner Registration Form */}
      <div className="auth-card">

        <h2>Food Partner Registration</h2>

        <p>Register your business with us.</p>

        <form
          className="auth-form"
          onSubmit={handleSubmit}
        >

          {/* Business Name */}
          <div className="form-group">
            <label>Business Name</label>

            <input
              type="text"
              name="businessName"
              placeholder="Enter your business name"
              required
            />
          </div>

          {/* Contact Name */}
          <div className="form-group">
            <label>Contact Name</label>

            <input
              type="text"
              name="contactname"
              placeholder="Enter contact name"
              required
            />
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>

            <input
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
          </div>

          

          {/* Phone Number */}
          <div className="form-group">
            <label>Phone Number</label>

            <input
              type="tel"
              name="phoneno"
              placeholder="Enter phone number"
              required
            />
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>

            <input
              type="password"
              name="password"
              placeholder="Create password"
              minLength={6}
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="auth-button"
          >
            Register Business
          </button>

        </form>

        {/* Login Link */}
        <div className="auth-footer">
          Already registered?

          <Link to="/food-partner/login">
            {" "}Login
          </Link>
        </div>

        {/* User Registration Link */}
        <div className="role-switch">
          Want to register as a User?

          <Link to="/user/register">
            {" "}Register as User
          </Link>
        </div>

      </div>

    </div>
  );
};

export default FoodPartnerRegister;
