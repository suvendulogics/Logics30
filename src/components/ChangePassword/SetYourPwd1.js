import React, { useState } from "react";
import "../../styles/SetYourPwd.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from "react-router-dom";
import { faLock } from "@fortawesome/free-solid-svg-icons";
const SetYourPwd = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState(true);
  const history = useHistory();

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  // const handleSave = () => {
  //   if (password === confirmPassword && password !== "") {
  //     alert("Password saved successfully!");
  //     setPasswordMatch(true);
  //   } else {
  //     setPasswordMatch(false);
  //   }
  // };
  const handleSave = () => {
    if (password === confirmPassword && password !== "") {
      alert("Password saved successfully!");
      setPasswordMatch(true);
      
     
      history.push("/");
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div>
      <div className="password-form">
        <div className="lo_logo">
          lo<span className="g_logo">g</span>ics
        </div>
        <div className="lock_title">
          <p className="set_pwd">Reset Password</p>
        </div>
        <div className="inp_div2">
          <div className="password-input-container">
            <FontAwesomeIcon icon={faLock} className="lock-icon" />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your new password"
              onChange={handlePasswordChange}
              className="password-input"
            />
          </div>
          <div className="password-input-container">
            <FontAwesomeIcon icon={faLock} className="lock-icon" />
            <input
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              placeholder="Confirm password"
              className="password-input"
            />
          </div>

          {/* <hr /> */}
          <p className="pwd_info">
            Password must be at least 8 characters and have both letters and
            numbers
          </p>
        </div>

        {!passwordMatch && (
          <p className="error-message">
            Passwords do not match. Please retype the password.
          </p>
        )}

        <button onClick={handleSave} className="button_log">
          Save & LogIn
        </button>
      </div>
      <div className="copy_right">
        <p>© 2023 Intellirose LLC. All rights reserved.</p>
      </div>
    </div>
  );
};

export default SetYourPwd;


