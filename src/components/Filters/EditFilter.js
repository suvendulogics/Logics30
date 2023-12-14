import React, { useState } from "react";
import {
  faStar,
  faList,
  faTag,
  faWrench,
  faCoins,
  faTelevision,
  faCheckCircle,
  faUserFriends,
  faEarthAmericas,
  faCalendarDays,
  faMoneyBillAlt,
  faHandHolding,
  faTableList,
  faArrowDown,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/EditFilter.css";
import editResp from "./EditData";

const EditFilter = ({ onClose, onOk }) => {
  const [filterName, setFilterName] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [viewSectionCollapsed, setViewSectionCollapsed] = useState(false);
  const [generalSectionCollapsed, setGeneralSectionCollapsed] = useState(false);
  const [sortingSectionCollapsed, setSortingSectionCollapsed] = useState(false);
  const [pageSize, setPageSize] = useState(30);

  const handleViewSectionClick = () => {
    setViewSectionCollapsed(!viewSectionCollapsed);
  };

  const handleGeneralSectionClick = () => {
    setGeneralSectionCollapsed(!generalSectionCollapsed);
  };
  const handleSortingSectionClick = () => {
    setSortingSectionCollapsed(!sortingSectionCollapsed);
  };

  const handleClose = () => {
    onClose();
  };

  const handleOK = () => {
    onOk();
  };

  const handleViewSectionClicked = () => {
    setSelectedItem("View");
  };

  const handleFieldsSectionClick = () => {
    setSelectedItem("Fields");
  };
  const outputFieldOptions = editResp.Result.FilterData.OutputFieldDS.map(
    (field) => (
      <option key={field.FilterFieldID} value={field.FilterFieldID}>
        {field.FriendlyName}
      </option>
    )
  );
  return (
    <div className="filter-component">
      <header className="header_fil">
        <div className="edit-filter">Edit Filter</div>
        <button className="close-button_fil" onClick={handleClose}>
          x
        </button>
      </header>
      <div className="custom-liness"></div>
      <div className="content_fil">
        <div className="left-content">
          <div className="section_out">
            <div className="text_name_out">Output</div>
          </div>
          <div className="section_fil">
            <FontAwesomeIcon
              icon={faStar}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
   
            <div className="text_name" onClick={handleViewSectionClicked}>
              View
            </div>
          </div>
          <div className="section_fil">
            <FontAwesomeIcon
              icon={faList}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
            <div className="text_name" onClick={handleFieldsSectionClick}>
              Fields
            </div>
          </div>
          <div className="section_out">
            <div className="text_name_out">Criteria</div>
          </div>
          <div className="section_fil">
            <FontAwesomeIcon
              icon={faTag}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
            <div className="text_name">Status</div>
          </div>
          <div className="section_fil">
            <FontAwesomeIcon
              icon={faWrench}
              className="font_fil"
              style={{ color: "goldenrod" }}
            />
            <div className="text_name">Service</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faCoins}
              className="font_fil"
              style={{ color: "goldenrod" }}
            />
            <div className="text_name">Tax Liability</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faTelevision}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
            <div className="text_name">Source</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faCheckCircle}
              className="font_fil"
              style={{ color: "#1AB414" }}
            />
            <div className="text_name">Probability</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faUserFriends}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
            <div className="text_name">Users</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faEarthAmericas}
              className="font_fil"
              style={{ color: "#1AB414" }}
            />
            <div className="text_name">Location</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faCalendarDays}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
            <div className="text_name">Date</div>
          </div>

          <div className="section_fil">
            <FontAwesomeIcon
              icon={faMoneyBillAlt}
              className="font_fil"
              style={{ color: "#1AB414" }}
            />
            <div className="text_name">Billing</div>
          </div>
          <div className="section_fil">
            <FontAwesomeIcon
              icon={faTableList}
              className="font_fil"
              style={{ color: "#458CC8" }}
            />
            <div className="text_name">Other</div>
          </div>
          <div className="section_fil">
            <FontAwesomeIcon
              icon={faHandHolding}
              className="font_fil"
              style={{ color: "goldenrod" }}
            />
            <div className="text_name">Sharing</div>
          </div>
        </div>
        <div className="right-content">
          {selectedItem === "View" && (
            <div className="field-section">
              <div className="filter_name_sec">
                <div className="text_name_filt">Filter Name:</div>
                <input
                  type="text"
                  className="field-name-input"
                  placeholder="All"
                  value={filterName}
                  defaultValue={"All"}
                  onChange={(e) => setFilterName(e.target.value)}
                />
              </div>
              <div className="section_div">
                <fieldset className="field_fil">
                  <legend
                    className="sub_headtr"
                    onClick={handleGeneralSectionClick}
                  >
                    <FontAwesomeIcon icon={faCaretDown} className="icons" />
                    General
                  </legend>
                </fieldset>

                {generalSectionCollapsed || (
                  <div className="section-content">
                    <div className="sort_algn">
                      <div className="view_cont"> Page Size</div>
                      <div className="colon_icn"> :</div>
                      <select
                        className="select row_select"
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                      >
                        <option value="20">20 rows</option>
                        <option value="30">30 rows</option>
                        <option value="40">40 rows</option>
                        <option value="50">50 rows</option>
                        <option value="80">80 rows</option>
                        <option value="100">100 rows</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              <div className="section_div">
                <fieldset className="field_fil">
                  <legend
                    className="sub_headtr"
                    onClick={handleSortingSectionClick}
                  >
                    <FontAwesomeIcon icon={faCaretDown} className="icons" />
                    Sorting Options
                  </legend>
                </fieldset>

                {sortingSectionCollapsed || (
                  <div className="section-content">
                    <div className="sort_algn">
                      <div className="view_cont"> Sort by 1st</div>
                      <div className="colon_icn"> :</div>
                      <select
                        className="sort_by select sort_first"
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                      >
                        {outputFieldOptions}
                      </select>
                    </div>

                    <div className="sort_algn">
                      <div className="view_cont"> Sort by 2nd</div>
                      <div className="colon_icn"> :</div>
                      <select
                        className="sort_by select"
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                      >
                        {outputFieldOptions}
                      </select>
                    </div>

                    <div className="sort_algn">
                      <div className="view_cont"> Sort by 3rd</div>
                      <div className="colon_icn"> :</div>
                      <select
                        className="sort_by select"
                        value={pageSize}
                        onChange={(e) => setPageSize(e.target.value)}
                      >
                        {outputFieldOptions}
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="custom-liness"></div>
      <footer className="footer_div">
        <button className="close-button_cl" onClick={handleClose}>
          Cancel
        </button>
        <button className="ok-button " onClick={handleOK}>
          OK
        </button>
      </footer>
    </div>
  );
};

export default EditFilter;
