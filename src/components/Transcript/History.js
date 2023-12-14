import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRefresh,
  faDownload,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Transcript.css";
import "./History.css";
import AccountOverview from "./AccountOverview";
import CSED from "./CSED";
import AccountTrans from "./AccountTrans";
import Bankruptcy from "./Bankruptcy";
import Tolling from "./Tolling";
import Notices from "./Notices";
import PayHistory from "./PayHistory";
import Penalties from "./Penalties";

const YearCheckbox = ({ year, isSelected, onToggle }) => (
  <div className="year_txt">
    <input
      type="checkbox"
      style={{ width: "20px" }}
      checked={isSelected}
      onChange={() => onToggle(year)}
    />
    {year}
  </div>
);

const History = () => {
  const [selectedYearsAccounts, setSelectedYearsAccounts] = useState([]);
  const [selectedYearsSavings, setSelectedYearsSavings] = useState([]);
  const [selectedYearsTax, setSelectedYearsTax] = useState([]);
  const [showNewPopup, setShowNewPopup] = useState(false);
  const [showNewPopupGenerate, setShowNewPopupGenerate] = useState(false);
  const [selectedYearsRecord, setSelectedYearsRecord] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Client");
  const [selectedComponent, setSelectedComponent] = useState("ServiceDetails");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log("selectedComponent", selectedComponent);
  if (selectedComponent == null || "") {
    setSelectedComponent("ServiceDetails");
  }
  const handleViewComponentClicked = (component) => {
    setSelectedComponent(component);
  };
  const years = Array.from(
    { length: 2023 - 2005 + 1 },
    (_, index) => 2005 + index
  );
  const handleNewClick = () => {
    setShowNewPopup(true);
  };
  const handleNewClickGenerate = () => {
    setShowNewPopupGenerate(true);
  };
  const toggleYear = (year, category) => {
    if (category === "Accounts") {
      setSelectedYearsAccounts((prev) =>
        prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
      );
    } else if (category === "Savings") {
      setSelectedYearsSavings((prev) =>
        prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
      );
    } else if (category === "Tax") {
      setSelectedYearsTax((prev) =>
        prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
      );
    } else if (category === "Record") {
      setSelectedYearsRecord((prev) =>
        prev.includes(year) ? prev.filter((y) => y !== year) : [...prev, year]
      );
    }
  };

  const clearSelection = () => {
    setSelectedYearsAccounts([]);
    setSelectedYearsSavings([]);
    setSelectedYearsTax([]);
    setSelectedYearsRecord([]);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const selectAllYears = (category) => {
    if (category === "Accounts") {
      setSelectedYearsAccounts(years);
    } else if (category === "Savings") {
      setSelectedYearsSavings(years);
    } else if (category === "Tax") {
      setSelectedYearsTax(years);
    } else if (category === "Record") {
      setSelectedYearsRecord(years);
    }
  };

  return (
    <div className="individual">
      <div className="category-radio-buttons">
        <div>
          <label className="individual_name">
            <input
              type="radio"
              value="Client"
              checked={selectedCategory === "Client"}
              onChange={() => handleCategoryChange("Client")}
            />
            Individual
          </label>
          <label className="individual_name">
            <input
              type="radio"
              value="Event"
              checked={selectedCategory === "Event"}
              onChange={() => handleCategoryChange("Event")}
            />
            Business
          </label>
        </div>
        <div>
          <button className="export_hist">
            <FontAwesomeIcon
              icon={faDownload}
              style={{ paddingLeft: "3px", paddingRight: "5px" }}
            />
            Export
            <FontAwesomeIcon
              icon={faChevronDown}
              style={{ paddingLeft: "5px", paddingRight: "3px" }}
            />{" "}
          </button>
          <button className="refresh_hist">
            <FontAwesomeIcon icon={faRefresh} style={{color:"#53B700"}}/>
          </button>
        </div>

        {/* <FontAwesomeIcon icon={faQuestionCircle} className="qtn_circle" /> */}
      </div>
      <div className="services-component" id="services_style">
        <div className="content_fil">
          <div className="left-content_history">
            <div className="section_out">
              <div className="text_name_service_out">Reports</div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "Account Overview" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Account Overview")}
              >
                Account Overview
              </div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "CSED" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("CSED")}
              >
                CSED Calculation
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Account Transactions" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() =>
                  handleViewComponentClicked("Account Transactions")
                }
              >
                Account Transactions
              </div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "Penalties" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Penalties")}
              >
                Penalties
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Payment History" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Payment History")}
              >
                Payment History
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Notices Overview" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Notices Overview")}
              >
                Notices Overview
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Tolling Events" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Tolling Events")}
              >
                Tolling Events
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Bankruptcy" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Bankruptcy")}
              >
                Bankruptcy
              </div>
            </div>
          </div>
          <div className="right-content">
            {selectedComponent === "Account Overview" && <AccountOverview />}
            {selectedComponent === "CSED" && <CSED />}
            {selectedComponent === "Account Transactions" && <AccountTrans />}
            {selectedComponent === "Bankruptcy" && <Bankruptcy />}
            {selectedComponent === "Tolling Events" && <Tolling />}
            {selectedComponent === "Notices Overview" && <Notices />}
            {selectedComponent === "Payment History" && <PayHistory />}
            {selectedComponent === "Penalties" && <Penalties />}
          </div>
        </div>
      </div>
      <div className="services-component" id="services_style">
        <div className="content_fil">
          <div className="left-content_history">
            <div className="section_out">
              <div className="text_name_service_out">Documents</div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "Account Overview" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Account Overview")}
              >
                Account Overview
              </div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "CSED" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("CSED")}
              >
                CSED Calculation
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Account Transactions" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() =>
                  handleViewComponentClicked("Account Transactions")
                }
              >
                Account Transactions
              </div>
            </div>
            <div
              className={`section_fil_services ${
                selectedComponent === "Penalties" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Penalties")}
              >
                Penalties
              </div>
            </div>

            <div
              className={`section_fil_services ${
                selectedComponent === "Payment History" ? "selected" : ""
              }`}
            >
              <div
                className="text_name_service"
                onClick={() => handleViewComponentClicked("Payment History")}
              >
                Payment History
              </div>
            </div>
          </div>
          <div className="right-content">
            {selectedComponent === "Account Overview" && <AccountOverview />}
            {selectedComponent === "CSED" && <CSED />}
            {selectedComponent === "Account Transactions" && <AccountTrans />}
            {selectedComponent === "Bankruptcy" && <Bankruptcy />}
            {selectedComponent === "Tolling Events" && <Tolling />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default History;
