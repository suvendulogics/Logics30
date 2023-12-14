import React, { useState } from "react";
import "./SetPwd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);
  const navigate = useNavigate();

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword, confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const newConfirmPassword = e.target.value;
    setConfirmPassword(newConfirmPassword);
    validatePassword(password, newConfirmPassword);
  };

  const validatePassword = (newPassword, newConfirmPassword) => {
    if (newPassword === newConfirmPassword && newPassword.length >= 8) {
      setIsValidPassword(true);
    } else {
      setIsValidPassword(false);
    }
  };

  // const handleSave = () => {
  //   if (!password) {
  //     setIsPasswordEmpty(true);
  //     return;
  //   }

  //   setIsPasswordEmpty(false);

  //   if (isValidPassword) {
  //     console.log("Password:", password);

  //     navigate("/");
  //   }
  // };

  const handleSave = () => {
    if (!password) {
      setIsPasswordEmpty(true);
      return;
    }

    setIsPasswordEmpty(false);

    if (isValidPassword) {
      const apiUrl = "http://localhost:5035/resetpwd/api/Login/ResetPassword";

      const urlWithParams = `${apiUrl}?token=abcd&password=${encodeURIComponent(
        password
      )}&confirmPassword=${encodeURIComponent(confirmPassword)}`;

      const headers = {
        accept: "*/*",
        "Content-Type": "application/json",
      };

      fetch(urlWithParams, {
        method: "POST",
        headers,
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.isError) {
            console.error("Error:", data.errorMessage);
          } else {
            console.log(data.result);
            navigate("/");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  };

  return (
    <div className="password-reset-container">
      <div className="password-box">
        <div className="lo_logo">
          lo<span className="g_logo">g</span>ics
        </div>
        <div className="reset_pwd_heading">Reset Password</div>
        <div className="password-input">
          <FontAwesomeIcon icon={faLock} className="lock-icon" />
          <input
            type="password"
            className="input_field input_3"
            placeholder="Enter your New Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <div className="password-input">
          <FontAwesomeIcon icon={faLock} className="lock-icon" s />
          <input
            type="password"
            className="input_field input_3"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </div>

        <p className="password-length-info">
          Password must be at least 8 characters and have both letters and
          numbers
        </p>
        {isPasswordEmpty && (
          <p className="error-message">Please enter password.</p>
        )}
        {!isValidPassword && (
          <p className="error-message">
            Passwords should match and contain at least 8 characters.
          </p>
        )}
        <button className="save-button" onClick={handleSave}>
          Save & Log In
        </button>
      </div>
      <div className="copy_right">
        <p>© 2023 Intellirose LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default PasswordResetPage;
