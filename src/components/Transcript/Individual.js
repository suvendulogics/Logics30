import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faQuestionCircle,
  faInfoCircle,
  faClose,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Transcript.css";

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

const Individual = () => {
  const [selectedYearsAccounts, setSelectedYearsAccounts] = useState([]);
  const [selectedYearsSavings, setSelectedYearsSavings] = useState([]);
  const [selectedYearsTax, setSelectedYearsTax] = useState([]);
  const [showNewPopup, setShowNewPopup] = useState(false);
  const [showNewPopupGenerate, setShowNewPopupGenerate] = useState(false);
  const [selectedYearsRecord, setSelectedYearsRecord] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Client");

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
            Client
          </label>
          <label className="individual_name">
            <input
              type="radio"
              value="Event"
              checked={selectedCategory === "Event"}
              onChange={() => handleCategoryChange("Event")}
            />
            Spouse
          </label>
          <label className="individual_name">
            <input
              type="radio"
              value="Other"
              checked={selectedCategory === "Other"}
              onChange={() => handleCategoryChange("Other")}
            />
            Client & Spouse
          </label>
        </div>

        <FontAwesomeIcon icon={faQuestionCircle} className="qtn_circle" />
      </div>
      <div className="year_box">
        <div className="selection-box">
          <div className="sub_individual_name"> Account Transcript</div>

          <div className="year_txt">
            <input
              type="checkbox"
              style={{ width: "20px" }}
              onClick={() => selectAllYears("Accounts")}
            />
            All
          </div>

          <div className="year-columns">
            <div className="column">
              {years.slice(0, Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsAccounts.includes(year)}
                  onToggle={(selectedYear) =>
                    toggleYear(selectedYear, "Accounts")
                  }
                />
              ))}
            </div>
            <div className="column">
              {years.slice(Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsAccounts.includes(year)}
                  onToggle={(selectedYear) =>
                    toggleYear(selectedYear, "Accounts")
                  }
                />
              ))}
            </div>
          </div>
        </div>

        <div className="selection-box">
          <div className="sub_individual_name"> Wage And Income</div>
          <div className="year_txt">
            <input
              type="checkbox"
              style={{ width: "20px" }}
              onClick={() => selectAllYears("Savings")}
            />
            All
          </div>
          <div className="year-columns">
            <div className="column">
              {years.slice(0, Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsSavings.includes(year)}
                  onToggle={(selectedYear) =>
                    toggleYear(selectedYear, "Savings")
                  }
                />
              ))}
            </div>
            <div className="column">
              {years.slice(Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsSavings.includes(year)}
                  onToggle={(selectedYear) =>
                    toggleYear(selectedYear, "Savings")
                  }
                />
              ))}
            </div>
          </div>
          {/* <button
            type="button"
            onClick={() => selectAllYears("Savings")}
            className="select-all-btn"
          >
            Select All
          </button> */}
        </div>
        <div className="selection-box">
          <div className="sub_individual_name"> Tax Return Transcript</div>
          <div className="year_txt">
            <input
              type="checkbox"
              style={{ width: "20px" }}
              onClick={() => selectAllYears("Tax")}
            />
            All
          </div>
          <div className="year-columns">
            <div className="column">
              {years.slice(0, Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsTax.includes(year)}
                  onToggle={(selectedYear) => toggleYear(selectedYear, "Tax")}
                />
              ))}
            </div>
            <div className="column">
              {years.slice(Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsTax.includes(year)}
                  onToggle={(selectedYear) => toggleYear(selectedYear, "Tax")}
                />
              ))}
            </div>
          </div>
          {/* <button
            type="button"
            onClick={() => selectAllYears("Tax")}
            className="select-all-btn"
          >
            Select All
          </button> */}
        </div>
        <div className="selection-box">
          <div className="sub_individual_name"> Record Of Account</div>
          <div className="year_txt">
            <input
              type="checkbox"
              style={{ width: "20px" }}
              onClick={() => selectAllYears("Record")}
            />
            All
          </div>
          <div className="year-columns">
            <div className="column">
              {years.slice(0, Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsRecord.includes(year)}
                  onToggle={(selectedYear) =>
                    toggleYear(selectedYear, "Record")
                  }
                />
              ))}
            </div>
            <div className="column">
              {years.slice(Math.ceil(years.length / 2)).map((year) => (
                <YearCheckbox
                  key={year}
                  year={year}
                  isSelected={selectedYearsRecord.includes(year)}
                  onToggle={(selectedYear) =>
                    toggleYear(selectedYear, "Record")
                  }
                />
              ))}
            </div>
          </div>
          {/* <button
            type="button"
            onClick={() => selectAllYears("Record")}
            className="select-all-btn"
          >
            Select All
          </button> */}
        </div>
      </div>

      <div className="ind_btn_div">
        <div>
          <button
            type="button"
            className="caf_btns caf_check"
            onClick={handleNewClick}
          >
            CAF Check
          </button>
          <button type="button" className="caf_btns schedule_ind">
            Schedule CAF Check
          </button>
        </div>
        <div>
          <button
            type="button"
            onClick={clearSelection}
            className="caf_btns clear_ind"
          >
            Clear
          </button>
          <button
            type="button"
            className="caf_btns generate_ind"
            onClick={handleNewClickGenerate}
          >
            Generate Transcripts
          </button>
        </div>

        {showNewPopup && (
          <div className="popups">
            <div className="pops">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "30px",
                  backgroundColor: "#d0ddf0",
                  color: "#15428B",
                }}
              >
                <div style={{ paddingLeft: "10px" }}>Security Code</div>
                <FontAwesomeIcon
                  icon={faClose}
                  style={{ paddingRight: "10px" }}
                  onClick={() => setShowNewPopup(false)}
                />
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div>
                  <div className="pop_cont">
                    Send Security code to your phone
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {showNewPopupGenerate && (
          <div className="popups">
            <div className="pops">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: "30px",
                  backgroundColor: "#d0ddf0",
                  color: "#15428B",
                }}
              >
                <div style={{ paddingLeft: "10px" }}>
                  Missing required fields
                </div>
              </div>
              <div
                style={{
                  margin: "10px",
                  display: "flex",
                  flexDirection: "row",
                }}
              >
                <div>
                  <div
                    className="pop_cont"
                    style={{ display: "flex", flexDirection: "row" }}
                  >
                    <FontAwesomeIcon
                      icon={faTriangleExclamation}
                      style={{
                        paddingRight: "10px",
                        color: "goldenrod",
                        fontSize: "50px",
                      }}
                      onClick={() => setShowNewPopupGenerate(false)}
                    />
                    <div>
                      {" "}
                      <b>
                        Transcript UserName, Transcript Password, Organization,
                        CAF
                      </b>{" "}
                      can not be blank.
                    </div>
                  </div>
                  <div className="pop_btns" style={{display:"flex",justifyContent:"center"}}>
                    <button
                      onClick={() => setShowNewPopupGenerate(false)}
                      className="ok_btns_gen"
                    >
                      OK
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Individual;
