import React, { useState } from "react";
import "../../styles/PasswordRecovery.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const PasswordRecovery = ({ show, onClose }) => {
  const [showPasswordRecovery, setShowPasswordRecovery] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState("");
  const [recoveryEmailError, setRecoveryEmailError] = useState("");

  const handleOkClick = () => {
    setShowPasswordRecovery(false);
  };
  const handlePasswordRecoverySubmit = (e) => {
    e.preventDefault();
    if (!recoveryEmail) {
      setRecoveryEmailError("Please enter your email address.");
      return;
    }
    console.log("Recovery Email:", recoveryEmail);
    setShowPasswordRecovery(false);
  };

  const handlePasswordRecoveryCancel = () => {
    setShowPasswordRecovery(false);
  };

  if (!show) {
    return null;
  }

  return (
    <div>
      <div className="modal">
        <div className="modal-content">
          <div className="title_div">
            <div className="close">
              Password Recovery
              <span
                onClick={handlePasswordRecoveryCancel}
                className="close_btn"
              >
                &times;
              </span>
            </div>
          </div>

          <div onSubmit={handlePasswordRecoverySubmit}>
            <div className="input-container">
              <FontAwesomeIcon icon={faEnvelope} className="input-icon" />
              <input
                type="email"
                placeholder="Enter your email"
                className="email-input"
              />
            </div>
          </div>
          <div className="submit_div">
            <div className="btn_div_pop_up">
              <button type="submit" className="ok_btn1" onClick={onClose}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PasswordRecovery;
