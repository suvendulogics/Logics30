import React, { useState, useEffect, useRef } from "react";
import {
  faListOl,
  faCheckCircle,
  faMoneyBillAlt,
  faFileAlt,
  faMobileAlt,
  faUnlink,
  faCog,
  faLongArrowAltRight,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import PowerOfAttorney from "./PowerOfAttorney";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Input, Checkbox, MaskedTextBox } from "@progress/kendo-react-inputs";
import "../../styles/Services.css";
import LevyRelease from "./LevyRelease";
import TaxPreperation from "./TaxPreperation";
import ReqDocs from "./ReqDocs";
import PrgmStatus from "./PrgmStatus";
import Collections from "./Collections";
import PartialPay from "./PartialPay";
import IRSDecision from "./IRSDecision";
import StateDecision from "./StateDecision";
import IdentityTheft from "./IdentityTheft";
import PenaltyAbatement from "./PenaltyAbatement";
import TaxAutho from "./TaxAutho";
import ServiceCase from "./ServiceCase";
import ServicesMob from './ServicesMob';

const Services = () => {
  // const [selectedComponent, setSelectedComponent] = useState();
  const [selectedComponent, setSelectedComponent] = useState("ServiceDetails"); 
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  if (selectedComponent == null || "") {
    setSelectedComponent("ServiceDetails");
  }
  const handleViewComponentClicked = (component) => {
    setSelectedComponent(component);
  };
 
  return (
    <div style={{ height: "150vh", overflow: "auto" ,width:"fit-content" }} id="services">
      <div className="tr_div">
        <div className="newtr">
          <div>
            <div
              className="main_heading"
              //   onClick={handleToggleActivities}
            >
              Services Contracted for
            </div>
            <div className="custom-lines"></div>
            <div className="alignment_full">
              <div>
                <div className="align_cols">
                  <div className="service_row">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        marginRight: "5px",
                      }}
                    >
                      <div className="alignment alignment_cont">
                        <div className="label_name"> Service (1):</div>
                        <DropDownList
                          className="drpodown_list"
                          //   data={type}
                        />
                      </div>
                      <div className="alignment alignment_cont">
                        <div className="label_name"> Service (2):</div>
                        <DropDownList
                          className="drpodown_list"
                          //   data={type}
                        />
                      </div>
                      <div className="alignment alignment_cont">
                        <div className="label_name"> Service (3):</div>
                        <DropDownList
                          className="drpodown_list"
                          //   data={type}
                        />
                      </div>
                    </div>
                    <div className="service">
                      <div className="alignment alignment_cont">
                        <div className="label_name"> Service (4):</div>
                        <DropDownList
                          className="drpodown_list"
                          //   data={type}
                        />
                      </div>
                      <div className="alignment alignment_cont">
                        <div className="label_name"> Service (5):</div>
                        <DropDownList
                          className="drpodown_list"
                          //   data={type}
                        />
                      </div>
                      <div className="alignment alignment_cont">
                        <div className="label_name"> Service (6):</div>
                        <DropDownList
                          className="drpodown_list"
                          //   data={type}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="alignment_other">
                    <div className="label_other"> Other:</div>
                    <input className="tax_liabilitys" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {windowWidth >= 768 ? (
      <div className="services-component" id="services_style">
        <div className="content_fil">
          <div className="left-content_services">
            <div className="section_out">
              <div className="text_name_service_out">Case Work</div>
            </div>
            <div   className={`section_fil_services ${
                selectedComponent === "ServiceDetails" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faListOl}
                className="font_fil"
                style={{ color: "#458CC8" }}
              />

              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("ServiceDetails")}
              >
                Service Details
              </div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "PowerOfAttorney" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faFileAlt}
                className="font_fil"
                style={{ color: "#a7a7a7" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("PowerOfAttorney")}
              >
                Power of Attorney
              </div>
            </div>

            <div  className={`section_fil_services ${
                selectedComponent === "TaxAuthorityContacts" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faMobileAlt}
                className="font_fil"
                style={{ color: "black" }}
              />
              <div
                className="text_name_service"
                onClick={() =>
                  handleViewComponentClicked("TaxAuthorityContacts")
                }
              >
                Tax Authority Contacts
              </div>
            </div>
            <div className={`section_fil_services ${
                selectedComponent === "LevyRelease" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faUnlink}
                className="font_fil"
                style={{ color: "#5c81b8" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("LevyRelease")}
              >
                Levy Release
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "Collections" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faMoneyBillAlt}
                className="font_fil"
                style={{ color: "#71c766" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Collections")}
              >
                Collections
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "TaxPreperation" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faCog}
                className="font_fil"
                style={{ color: "#a7a7a7" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("TaxPreperation")}
              >
                Tax Preperation
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "PenaltyAbatement" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="font_fil"
                style={{ color: "#71c766" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("PenaltyAbatement")}
              >
                Penalty Abatement
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "IdentityTheft" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faCog}
                className="font_fil"
                style={{ color: "#a7a7a7" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("IdentityTheft")}
              >
                Identity Theft
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "PartialPaymentAgree." ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="font_fil"
                style={{ color: "#71c766" }}
              />
              <div
                className="text_name_service"
                onClick={() =>
                  handleViewComponentClicked("PartialPaymentAgree.")
                }
              >
                Partial Payment Agree.
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "RequiredDocuments" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faBook}
                className="font_fil"
                style={{ color: "#5c81b8" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("RequiredDocuments")}
              >
                Required Documents
              </div>
            </div>

            <div className={`section_fil_services ${
                selectedComponent === "ProgramStatus" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faCheckCircle}
                className="font_fil"
                style={{ color: "#71c766" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("ProgramStatus")}
              >
                Program Status
              </div>
            </div>
            <div className={`section_fil_services ${
                selectedComponent === "IRSDecision" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="font_fil"
                style={{ color: "#71c766" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("IRSDecision")}
              >
                IRS Decision
              </div>
            </div>
            <div className={`section_fil_services ${
                selectedComponent === "StateDecision" ? "selected" : ""
              }`}>
              <FontAwesomeIcon
                icon={faLongArrowAltRight}
                className="font_fil"
                style={{ color: "#71c766" }}
              />
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("StateDecision")}
              >
                State Decision
              </div>
            </div>
          </div>
          <div className="right-content">
            {selectedComponent === "PowerOfAttorney" && <PowerOfAttorney />}
            {selectedComponent === "LevyRelease" && <LevyRelease />}
            {selectedComponent === "RequiredDocuments" && <ReqDocs />}
            {selectedComponent === "TaxPreperation" && <TaxPreperation />}
            {selectedComponent === "ProgramStatus" && <PrgmStatus />}
            {selectedComponent === "Collections" && <Collections />}
            {selectedComponent === "PartialPaymentAgree." && <PartialPay />}
            {selectedComponent === "IRSDecision" && <IRSDecision />}
            {selectedComponent === "StateDecision" && <StateDecision />}
            {selectedComponent === "IdentityTheft" && <IdentityTheft />}
            {selectedComponent === "PenaltyAbatement" && <PenaltyAbatement />}
            {selectedComponent === "TaxAuthorityContacts" && <TaxAutho />}
            {selectedComponent === "ServiceDetails" && <ServiceCase />}
          </div>
        </div>
      </div>
       ):(
        <ServicesMob />
        )}
    </div>
  );
};

export default Services;
