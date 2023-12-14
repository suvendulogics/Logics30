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
  const dropdownRef = useRef(null);
  const prospect = ["Prospect"];
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
  const [selectedStatus, setSelectedStatus] = useState("Extremely High");
  const [selectedProbability, setSelectedProbability] = useState(
    "Extremely High"
  );
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

  const handleStatusChange = (event) => {
    setSelectedStatus(event.target.value);
  };

  const handleProbabilityChange = (event) => {
    setSelectedProbability(event.target.value);
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
      <div id="toolbar" className="main_sub_div">
        <div className="sub_head_div">
          <div id="menuType_NoRO" className="subhead_cont">
            <FontAwesomeIcon icon={faFile} className="fafile_icon" />
            <span className="type_txt">Type:</span>
            &nbsp;
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
            {/* <DropDownList
              data={dropdownData}
              defaultValue="Prospect "
              className="prospect_name"
              onChange={handleDropDownChange}
            /> */}
            <div
              id="Probability"
              className="subhead_cont"
              style={{
                paddingLeft: "2px",
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

          <div id="Status" className="subhead_cont" style={{marginRight:"-10px"}}>
            <span className="status_txt">Status:</span>
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
          </div>
          {/* <div
            id="Probability"
            className="subhead_cont"
            style={{
              paddingLeft: "2px",
            }}
          >
            <span id="lblProbability" className="prob_txt">
              Probability:
            </span>
            <select
              className="inp_field_prob"
              value={selectedProbability}
              onChange={handleProbabilityChange}
            >
              {probabilityData.map((option, index) => (
                <option key={index} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div> */}
          <div
            id="Probability"
            className="subhead_cont"
            style={{
              paddingLeft: "2px",
            }}
          >
            <span id="lblProbability" className="prob_txt">
              Probability:
            </span>
            <span tabindex="-1" unselectable="on">
              <DropDownList
                data={probabilityData}
       style={{marginLeft:"5px",height:"23px"}}
                className="inp_field_prob"
              />
              
            </span>
          </div>
        </div>

        <div
          className="subhead_cont"
          // style={{
          //   marginRight: "10px",
          // }}
        >
          <div className="refresh">
            <FontAwesomeIcon icon={faSyncAlt} className="fasyncalt" />
          </div>

          <div
            className="subhead_cont"
            // style={{
            //   marginLeft: "5px",
            // }}
          >
            <div
              id="btnCallToIRS"
              className="subhead_cont subhead_cont_hov"
              onClick={openPopup}
              style={{
                width: "70px",
                // marginLeft: "5px",
              }}
            >
              <FontAwesomeIcon icon={faPhoneVolume} className="faPhoneVolume" />
              <div className="callirs_txt">Call IRS</div>
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
            style={{
              marginLeft: "10px",
            }}
          >
            <div
              type="button"
              onClick={openPopupsms}
              className="subhead_cont subhead_cont_hov"
              style={{
                width: "80px",
              }}
            >
              <FontAwesomeIcon icon={faComment} className="faComment" />
              <span className="sendsms_txt">Send SMS</span>
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
            style={{
              marginLeft: "10px",
            }}
          >
            <div
              type="button"
              id="btnPrint"
              className="subhead_cont subhead_cont_hov"
              style={{
                width: "80px",
              }}
            >
              <FontAwesomeIcon icon={faMessage} className="faComment" />
              <span className="sendsms_txt">Send Docs</span>
            </div>
          </div>

          <div
            id="Save"
            className="subhead_cont "
            style={{
              marginLeft: "10px",
            }}
          >
            <div
              type="button"
              id="btnSave"
              className="subhead_cont subhead_cont_hov"
              style={{
                width: "55px",
              }}
              onClick={openPopupsave}
            >
              <FontAwesomeIcon icon={faSave} className="faComment" />
              <span className="sendsms_txt">Save</span>
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
