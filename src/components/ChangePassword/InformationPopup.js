import React from "react";
import "../../styles/InformationPopup.css";
import info from '../../assets/info.png';
const InformationPopup = ({show, onClose }) => {
    if (!show) {
        return null;
      }
  return (
    <div className="exclude_div">
 <div className="information-popup">
      <div className="pwd_recovery">
        <h2>Password Recovery</h2>
      </div>

      <div className="info">
        <img src={info} className="info_img"/>
        <p className="recovery_content">
          We have emailed a password reset nk to your email address. Checkour
          email for this link. When you click on it, we'll reset your password.
        </p>
      
      </div>
      <button onClick={onClose} className="ok_btn">
          OK
        </button>
    </div>
    </div>
   
  );
};

export default InformationPopup;


