import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSyncAlt,
  faFile,
  faPhoneVolume,
  faMessage,
  faComment,
  faClose,
  faSave,
  faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import "../../styles/SubHeaderFirst.css";

const SubHeaderFirst = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [selectedItem, setSelectedItem] = useState(null);

  const handleDropDownChange = (event) => {
    const selectedValue = event.target.value;
    setSelectedItem(selectedValue);
  };
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };
  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };
  const [selectedStatus, setSelectedStatus] = useState("Extremely High");
  const prospect = ["Prospect"];
  const dropdownRef = useRef(null);
  const probabilityData = [
    "Extremely High",
    "High",
    "Med-High",
    "Med",
    "Med-Low",
    "Low",
    "Very Low",
    "Extremely Low",
  ];
  const dropdownData = ["Submit for Approval"];

  const [isPopupVisible, setPopupVisible] = useState(false);
  const [isPopupVisiblesms, setPopupVisiblesms] = useState(false);
  const [isPopupVisiblesave, setPopupVisiblesave] = useState(false);
  const openPopup = () => {
    setPopupVisible(true);
  };

  const closePopup = () => {
    setPopupVisible(false);
  };

  const openPopupsave = () => {
    setPopupVisiblesave(true);
  };

  const closePopupsave = () => {
    setPopupVisiblesave(false);
  };

  const openPopupsms = () => {
    setPopupVisiblesms(true);
  };

  const closePopupsms = () => {
    setPopupVisiblesms(false);
  };
  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleDropdownOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleDropdownOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDropdownOutsideClick);
    };
  }, [showDropdown]);
  return (
    <div>
      <div id="toolbars" className="main_sub_div_mob">
        <div className="sub_head_div"   style={{
           
            width:"100%",
            height: "40px",
            backgroundColor: "#5e6c7f",
          }}>
          <div id="menuType_NoRO" className="subhead_cont">
            {/* <FontAwesomeIcon icon={faFile} className="fafile_icon" /> */}
            <span className="type_txt_mob">Type:</span>

            {/* <span
              style={{
                color: "#FFFFCC",
                fontWeight: "bold",
                fontFamily: "verdana",
                fontSize: "12px",
              }}
              onClick={handleDropdownClick}
            >
              Prospect
            </span> */}
            <div
              id="Probability"
              className="subhead_cont"
              style={{
                paddingLeft: "4px",
              }}
            >
              <select className="inp_field_pros" defaultValue="Prospect">
                {prospect.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            {selectedItem && (
              <div className="popup_pros">
                <div className="popup-content_pros">
                  <div className="prospect_pop">
                    <div className="missing_txt"> Missing required fields</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faClose}
                        className="faClose"
                        onClick={() => setSelectedItem(null)}
                      />
                    </div>
                  </div>
                  <div className="prospect_cont">
                    <div>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="faTimesCircle"
                      />
                    </div>
                    <div>
                      <div className="first_part">
                        {" "}
                        Please enter a value for following required fields
                        before saving:
                      </div>

                      <div className="second_part">
                        {" "}
                        Tax Liability, First Name, Last Name, Mobile, Lead
                        Source
                      </div>
                    </div>
                  </div>
                  <div className="prosp_ok_btn">
                    <button
                      onClick={() => setSelectedItem(null)}
                      className="ok_prosp"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* {showDropdown && (
              <div ref={dropdownRef}>
                {dropdownData.map((item, index) => (
                  <div
                    key={index}
                    className="dropdown-item"
                    onClick={() => setShowDropdown(false)}
                  >
                    {item}
                  </div>
                ))}
              </div>
            )} */}
          </div>

          <div id="Status" className="subhead_cont">
            <span className="status_txt_mob">Status:</span>
            <select
              className="status_dropdown"
              value={selectedStatus}
              onChange={handleStatusChange}
            >
              {probabilityData.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {/* <DropDownList className="status_dropdown_mob" /> */}
          </div>

        
        </div>
        <div className="custom-lines_sub"></div>

        <div
          className="subhead_cont"
          style={{
            // marginRight: "43%",
            width:"100%",
            height: "26px",
            backgroundColor: "#5e6c7f",
          }}
        >
            <div id="Probability" className="subhead_cont">
            <span id="lblProbability" className="prob_txt_mob" style={{marginLeft:"10px"}}>
              Probability :
            </span>
            <span  unselectable="on">
              <DropDownList
                data={probabilityData}
                // defaultValue="Prospect "
                className="inp_field_prob_mob"
              />
              {/* <input type="text" className="inp_field_prob" /> */}
            </span>
          </div>
          <div className="refresh_mob">
            <FontAwesomeIcon icon={faSyncAlt} className="fasyncalt" />
          </div>

          <div
            className="subhead_cont"
            style={{
              marginLeft: "5px",
            }}
          >
            <div
              id="btnCallToIRS"
              className="subhead_cont subhead_cont_hov"
              onClick={openPopup}
              style={{
                width: "40px",
                // marginLeft: "5px",
              }}
            >
              <FontAwesomeIcon icon={faPhoneVolume} className="faPhoneVolume" />
              {/* <div className="callirs_txt">Call IRS</div> */}
            </div>
            {isPopupVisible && (
              <div className="popup">
                <div className="popup-content_IRS">
                  <div className="irs_error_txt">Error</div>
                  <div className="irs_err_cnts">
                    <div>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="faTimesCircle"
                        style={{ marginLeft: "10px", marginTop: "10px" }}
                      />
                    </div>
                    <span className="call_pop">This case is not saved yet</span>
                  </div>

                  <button onClick={closePopup} className="irs_call_ok_btn">
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            id="SendSMS"
            className="subhead_cont"
        
          >
            <div
              type="button"
              onClick={openPopupsms}
              className="subhead_cont subhead_cont_hov"
              style={{
                width: "35px",
              }}
            >
              <FontAwesomeIcon icon={faComment} className="faComment" />
              {/* <span className="sendsms_txt">Send SMS</span> */}
            </div>
            {isPopupVisiblesms && (
              <div className="popup">
                <div className="popup-content_sms">
                  <div className="a2phead">
                    <div className="irs_error_txt">A2P Pending</div>
                    <FontAwesomeIcon
                      icon={faClose}
                      onClick={closePopupsms}
                      className="faClosesms"
                    />
                  </div>
                  <div className="irs_err_cnts">
                    <div>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="faTimesCircle"
                        style={{ marginLeft: "10px", marginTop: "10px" }}
                      />
                    </div>
                    <span className="sms_pop">
                      A2P business profile registration is yet to be completed.
                      Please reach out to Logics Support.
                    </span>
                  </div>

                  <button
                    onClick={closePopupsms}
                    className="irs_call_ok_btn sms_ok"
                  >
                    OK
                  </button>
                </div>
              </div>
            )}
          </div>

          <div
            id="Print"
            className="subhead_cont"
           
          >
            <div
              type="button"
              id="btnPrint"
              className="subhead_cont subhead_cont_hov"
              style={{
                width: "35px",
              }}
            >
              <FontAwesomeIcon icon={faMessage} className="faComment" />
              {/* <span className="sendsms_txt">Send Docs</span> */}
            </div>
          </div>

          <div
            id="Save"
            className="subhead_cont "
          
          >
            <div
              type="button"
              id="btnSave"
              className="subhead_cont subhead_cont_hov"
              style={{
                width: "35px",
              }}
              onClick={openPopupsave}
            >
              <FontAwesomeIcon icon={faSave} className="faComment" />
              {/* <span className="sendsms_txt">Save</span> */}
            </div>

            {isPopupVisiblesave && (
              <div className="popup_pros">
                <div className="popup-content_pros">
                  <div className="prospect_pop">
                    <div className="missing_txt"> Missing required fields</div>
                    <div>
                      <FontAwesomeIcon
                        icon={faClose}
                        className="faClose"
                        onClick={closePopupsave}
                      />
                    </div>
                  </div>
                  <div className="prospect_cont">
                    <div>
                      <FontAwesomeIcon
                        icon={faTimesCircle}
                        className="faTimesCircle"
                      />
                    </div>
                    <div>
                      <div className="first_part">
                        {" "}
                        Please enter a value for following required fields
                        before saving:
                      </div>

                      <div className="second_part">
                        {" "}
                        Tax Liability, First Name, Last Name, Mobile, Lead
                        Source
                      </div>
                    </div>
                  </div>
                  <div className="prosp_ok_btn">
                    <button onClick={closePopupsave} className="ok_prosp">
                      OK
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubHeaderFirst;
