// import React, { useRef, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom'

// const UserLogin = () => {
//   const navigate=useNavigate();
//   const videoRef = useRef(null);
//   const handleSubmit=(e)=>{
//     e.preventDefault();
//     const email=e.target.email.value;
//     const password=e.target.password.value;
//     const response=axios.post("http://localhost:3000/api/auth/user/login",{
//       email,
//       password
//     },{withCredentials:true});
//     console.log(response.data);
//     navigate("/")
//   }
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.8;
//     }
//   }, []);
//   return (
//     <div className="auth-container">
//       <video
//        ref={videoRef}
//         className="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/register-bg.mp4" type="video/mp4" />
//       </video>

//       <div className="video-overlay"></div>
//       <div className="auth-card">
//         <h2>User Login</h2>
//         <p>Welcome back! Login to continue.</p>

//         <form className="auth-form" onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           <div className="form-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           <button type="submit" className="auth-button">
//             Login
//           </button>
//         </form>

//         <div className="auth-footer">
//           Don't have an account?
//           <Link to="/user/register"> Register</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;

// import React, { useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UserLogin = () => {
//   const navigate = useNavigate();
//   const videoRef = useRef(null);

//   // Handle Login
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/auth/user/login",
//         {
//           email,
//           password,
//         },
//         {
//           withCredentials: true,
//         },
//       );

//       console.log("Login Response:", response.data);

//       alert(response.data.message || "Login successful!");

//       e.target.reset();

//       navigate("/");
//     } catch (error) {
//       console.error("Login Error:", error);

//       alert(
//         error.response?.data?.message ||
//           "Login failed. Please check your credentials.",
//       );
//     }
//   };

//   // Background Video Speed
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.8;
//     }
//   }, []);

//   return (
//     <div className="auth-container">
//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source src="/videos/register-bg.mp4" type="video/mp4" />
//       </video>

//       <div className="video-overlay"></div>

//       {/* Login Form */}
//       <div className="auth-card">
//         <h2>User Login</h2>

//         <p>Welcome back! Login to continue.</p>

//         <form className="auth-form" onSubmit={handleSubmit}>
//           {/* Email */}
//           <div className="form-group">
//             <label>Email</label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="form-group">
//             <label>Password</label>

//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button type="submit" className="auth-button">
//             Login
//           </button>
//         </form>

//         {/* Register Link */}
//         <div className="auth-footer">
//           Don't have an account?
//           <Link to="/user/register"> Register</Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserLogin;



// import React, { useRef, useEffect } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// const UserLogin = () => {
//   const navigate = useNavigate();
//   const videoRef = useRef(null);

//   // Handle Login
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//     try {
//       const response = await axios.post(
//         "http://localhost:3000/api/auth/user/login",
//         {
//           email,
//           password,
//         },
//         {
//           withCredentials: true,
//         }
//       );

//       console.log("Login Response:", response.data);

//       alert(response.data.message || "Login successful!");

//       e.target.reset();

//       // Login successful -> Open Home Page
//       navigate("/home");

//     } catch (error) {
//       console.error("Login Error:", error);

//       alert(
//         error.response?.data?.message ||
//         "Login failed. Please check your credentials."
//       );
//     }
//   };

//   // Background Video Speed
//   useEffect(() => {
//     if (videoRef.current) {
//       videoRef.current.playbackRate = 0.8;
//     }
//   }, []);

//   return (
//     <div className="auth-container">

//       {/* Background Video */}
//       <video
//         ref={videoRef}
//         className="background-video"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         <source
//           src="/videos/register-bg.mp4"
//           type="video/mp4"
//         />
//       </video>

//       <div className="video-overlay"></div>

//       {/* Login Form */}
//       <div className="auth-card">
//         <h2>User Login</h2>

//         <p>Welcome back! Login to continue.</p>

//         <form className="auth-form" onSubmit={handleSubmit}>

//           {/* Email */}
//           <div className="form-group">
//             <label>Email</label>

//             <input
//               type="email"
//               name="email"
//               placeholder="Enter your email"
//               required
//             />
//           </div>

//           {/* Password */}
//           <div className="form-group">
//             <label>Password</label>

//             <input
//               type="password"
//               name="password"
//               placeholder="Enter your password"
//               required
//             />
//           </div>

//           {/* Login Button */}
//           <button
//             type="submit"
//             className="auth-button"
//           >
//             Login
//           </button>

//         </form>

//         {/* Register Link */}
//         <div className="auth-footer">
//           Don't have an account?
//           <Link to="/user/register"> Register</Link>
//         </div>

//       </div>
//     </div>
//   );
// };

// export default UserLogin;



import React, { useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../../services/api";

const UserLogin = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await API.post(
        "/api/auth/user/login",
        {
          email,
          password,
        }
      );

      console.log("Login Response:", response.data);

      alert(response.data.message || "Login successful!");

      e.target.reset();
      navigate("/home");

    } catch (error) {
      console.error("Login Error:", error);

      alert(
        error.response?.data?.message ||
        "Login failed. Please check your credentials."
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
        <h2>User Login</h2>
        <p>Welcome back! Login to continue.</p>

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
          Don't have an account?
          <Link to="/user/register"> Register</Link>
        </div>
      </div>
    </div>
  );
};

export default UserLogin;
