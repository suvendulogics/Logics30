import React, { useState, useEffect, useRef } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Input, Checkbox, MaskedTextBox } from "@progress/kendo-react-inputs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import {
  faTriangleExclamation,
  faShareSquare,
  faAddressCard,
  faPhone,
  faHome,
  faList,
  faCogs,
  faBriefcase,
  faUniversity,
  faBuilding,
  faAngleDoubleLeft,
  faCubes,
  faStar,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@progress/kendo-theme-default/dist/all.css";
import { Error } from "@progress/kendo-react-labels";
import "../Cases/NewTR.css";
import { Button } from "@progress/kendo-react-buttons";
import { Splitter, SplitterPane } from "@progress/kendo-react-layout";
import SplitPane from "react-split-pane";
import Activities from "./Activities";
import ActivitiesMob from './ActivitiesMob';
import SubHeaderTR from "./SubHeaderTR";
const NewTR = () => {
  const [showFields, setShowFields] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleShowFields = () => {
    setShowFields(!showFields);
  };

  const type = [
    "Personal",
    "Business",
    "Personal and Business",
    "Payroll",
    "Other",
  ];
  const language = ["English", "Spanish"];
  const yesno = ["Yes", "No"];
  const business_type = [
    "N/A",
    "Sole Proprietorship",
    "Partnership",
    "LLP",
    "LLC (Single)",
    "LLC (multiple)",
    "S Corp.",
    "C Corp.",
    "Non Profit",
  ];
  const employment = [
    "W-2 Wage Earner",
    "1099 Self Emplouyed",
    "Both: (W-2 & 1099)",
    "Unemployed",
    "Retired",
    "Disabled",
  ];
  const state = [
    "Alabama",
    "Alaska",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "Florida",
    "Georgia",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
    "Puerto Rico",
    "Virgin Islands",
    "Northern Mariana Islands",
    "Guam",
    "American Samoa",
    "Palau",
  ];

  const marital = [
    "Single",
    "Married Filing Jointly",
    "Married Filing Separately",
    "Head ofHousehold",
    "Qualifying Widow(er)",
  ];
  const problem = [
    "Assets Seized",
    "Bank Account Levy",
    "Can’t Pay Unpaid Taxes",
    "Innocent Spouse",
    "License Suspension/Revocation",
    "Lien Filed",
    "Passport Suspension/Revocation",
    "Received Audit Notice",
    "Traditional Tax Services",
    "Unfiled Tax Returns",
    "Unpaid Penalties and Interest",
    "Wage Garnishment",
    "Received an IRS Letter",
    "Issue with Claiming Dependents",
    "ID Theft",
    "IRS Refund was kept",
    "Other",
  ];
  const [showActivities, setShowActivities] = useState(true);
  const handleToggleActivities = () => {
    setShowActivities(!showActivities);
  };

  const handleShowActivities = () => {
    setShowActivities(!showActivities);
  };

  const [showActivitiesm, setShowActivitiesm] = useState(false);

  const toggleActivitiesm = () => {
    setShowActivitiesm(!showActivitiesm);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [nestedPanes, setNestedPanes] = React.useState([
    {
      size: "80%",
      collapsible: true,
      min: "75%",
    },
    {},
    {
      size: "20%",
      resizable: false,
      collapsible: true,
      min: "40px",
      //   max:"15%"
    },
  ]);
  const onNestedChange = (event) => {
    setNestedPanes(event.newState);
  };

  return (
    <div>
      <SubHeaderTR/>
      {windowWidth >= 768 ? (
        <Splitter
          style={{ width: "84vw" }}
          panes={nestedPanes}
          onChange={onNestedChange}
        >
          <div>
            <div
              style={{
                width: "fit-content",
                border: "1px solid #9ec1f3",
                marginLeft: "5px",
                marginBottom: "10px",
              }}
            >
              <div className="tr_div">
                <div className="newtr">
                  <div>
                    <div
                      className="main_heading"
                      onClick={handleToggleActivities}
                    >
                      Case Information
                    </div>
                    <div className="custom-lines"></div>
                    <div className="alignment">
                      <fieldset className="field">
                        <legend className="sub_headtr">
                          {" "}
                          <FontAwesomeIcon
                            icon={faTriangleExclamation}
                            className="icons"
                          />
                          Tax Information
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment">
                              <div className="label_name">Tax Type:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={type}
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">Tax Problem:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="alignment">
                              <div className="label_name">Agency:</div>
                              <Checkbox
                                label={"State"}
                                className="check_name"
                              />{" "}
                              <Checkbox
                                defaultChecked={true}
                                label={"Federal"}
                                className="check_name"
                                style={{ marginLeft: "74px" }}
                              />
                              <br />
                            </div>
                            <div>
                              <div className="alignment">
                                <div className="label_name">Tax Liability:</div>
                                <input
                                  label="0.00"
                                  type="numeric"
                                  className="tax_liability"
                                />
                                {/* <Input label="0.00" style={{ width: "200px" }} /> */}
                              </div>
                              <div>
                                <div className="label_name">
                                  Form Number(s) {"  "}
                                  {"  "}
                                  {"  "}
                                  {"  "}
                                  {"  "}
                                  {"  "} (if applicable):
                                </div>
                                <div
                                  style={{
                                    marginTop: "-30px",
                                    marginBottom: "20px",
                                  }}
                                >
                                  <Checkbox
                                    label={"Federal 1040"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    defaultChecked={true}
                                    label={"Civil Penalty"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    label={"Federal 1120"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    label={"Federal 940/941"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    label={"Federal 1065"}
                                    className="checkbox_name"
                                  />
                                </div>
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  {" "}
                                  Source/Campaign:
                                </div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={type}
                                  // defaultValue="Pizza"
                                />
                              </div>
                            </div>

                            <div className="alignment">
                              <div className="label_name">Lead Cost:</div>
                              <Input />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      {/* </div> */}

                      {/* <div className="individual_box"> */}
                      {/* <div className=" sub_headtr">Assignments</div> */}
                      <fieldset className="field">
                        <legend className="sub_headtr">
                          {" "}
                          <FontAwesomeIcon
                            icon={faShareSquare}
                            className="icons"
                          />
                          Assignments
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment">
                              <div className="label_name">Team:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={type}
                                defaultValue="Main Office"
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">Set Officer:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                                defaultValue="--Unassigned--"
                              />
                            </div>

                            <div className="alignment">
                              <div className="label_name">Case Worker:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">Case Manager:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">CPA/Attorney/EA:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">Tax Preparer:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">Opener:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment">
                              <div className="label_name">Complance mgr:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      {/* </div> */}
                    </div>
                  </div>

                  <div>
                    <div className="main_heading"> Client Information </div>
                    <div className="custom-lines"></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className=" sub_headtr">General</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faAddressCard}
                              className="icons"
                            />
                            General
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name"> First Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Middle Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Last Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Date of Birth:</div>
                                <div style={{ width: "208px" }}>
                                  <DatePicker placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="alignment">
                                <div className="label_name">SSN:</div>
                                <div style={{ width: "208px" }}>
                                  <MaskedTextBox
                                    mask="000-00-0000"
                                    defaultValue="xxx-xx-xxxx"
                                  />
                                </div>
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  Marital Status:
                                </div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={marital}
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Language:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={language}
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faPhone} className="icons" />
                            Contact
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name">Home #</div>

                                <div style={{ width: "171px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                                <button type="button" className="callbuttons">
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icons_btn"
                                  />
                                </button>
                              </div>
                              <div className="alignment">
                                <div className="label_name">Work #</div>
                                <div style={{ width: "171px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                                <button type="button" className="callbuttons">
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icons_btn"
                                  />
                                </button>
                              </div>
                              <div className="alignment">
                                <div className="label_name">Mobile #</div>
                                <div style={{ width: "171px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                                <button type="button" className="callbuttons">
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icons_btn"
                                  />
                                </button>
                              </div>
                              <div className="alignment">
                                <div className="label_name">Fax #</div>
                                <div style={{ width: "208px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                              </div>

                              <div className="alignment">
                                <div className="label_name"> Email</div>
                                <input
                                  placeholder="user@domain.com"
                                  type="email"
                                  className="tax_liability"
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  {" "}
                                  Best Time to Call
                                </div>
                                <input
                                  type="numeric"
                                  className="tax_liability"
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name">SMS Permitted</div>
                                <Checkbox className="check_name" />

                                <br />
                              </div>
                              <button className="portal_btn">
                                Client Portal Invitation
                              </button>
                            </div>
                          </div>
                        </fieldset>
                        {/* <div className="sub_headtr">Contact</div> */}

                        <div>{/* </div> */}</div>
                      </div>

                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Home Address</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            {" "}
                            <FontAwesomeIcon icon={faHome} className="icons" />
                            Home Address
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name"> Street:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">#:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">City:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">State:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={state}
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name"> Zip Code:</div>
                                <input
                                  type="numeric"
                                  placeholder="00000-0000"
                                  className="tax_liability"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        <div className="individual_boxes">
                          {/* <div className="sub_headtr">Mailing Address</div> */}
                          <fieldset className="field">
                            <legend className="sub_headtr">
                              <FontAwesomeIcon
                                icon={faList}
                                className="icons"
                              />
                              Mailing Address
                            </legend>
                            <div>
                              <div className="align_col">
                                <div className="alignment_spouse">
                                  <Checkbox className="check_name" />
                                  <div className="label_names">
                                    Same as home address
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>

                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="main_heading">Spouse Information</div>
                    <div className="custom-lines"></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">General</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faAddressCard}
                              className="icons"
                            />
                            General
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name"> First Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Middle Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Last Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Date of Birth:</div>
                                <div style={{ width: "208px" }}>
                                  <DatePicker placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="alignment">
                                <div className="label_name">SSN:</div>
                                <div style={{ width: "208px" }}>
                                  <MaskedTextBox
                                    mask="000-00-0000"
                                    defaultValue="xxx-xx-xxxx"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Contact</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faPhone} className="icons" />
                            Contact
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name">Home #</div>
                                <div style={{ width: "171px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                                <button type="button" className="callbuttons">
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icons_btn"
                                  />
                                </button>
                              </div>
                              <div className="alignment">
                                <div className="label_name">Work #</div>
                                <div style={{ width: "171px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                                <button type="button" className="callbuttons">
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icons_btn"
                                  />
                                </button>
                              </div>
                              <div className="alignment">
                                <div className="label_name">Mobile #</div>
                                <div style={{ width: "171px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                                <button type="button" className="callbuttons">
                                  <FontAwesomeIcon
                                    icon={faPhone}
                                    className="icons_btn"
                                  />
                                </button>
                              </div>
                              <div className="alignment">
                                <div className="label_name">Fax #</div>
                                <div style={{ width: "208px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                              </div>

                              <div className="alignment">
                                <div className="label_name"> Email</div>
                                <input
                                  placeholder="user@domain.com"
                                  type="email"
                                  className="tax_liability"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}
                      </div>

                      <div className="alignment">
                        <div className="individual_boxes">
                          {/* <div className="sub_headtr">Spouse Address</div> */}
                          <fieldset className="field">
                            <legend className="sub_headtr">
                              <FontAwesomeIcon
                                icon={faAddressCard}
                                className="icons"
                              />
                              Spouse Address
                            </legend>
                            <div>
                              <div className="align_col">
                                <div className="alignment_spouse">
                                  <Checkbox className="check_name" />
                                  <div className="label_names">
                                    Same as taxpayer's home address
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div className="alignment_full">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Services Contracted For</div> */}
                        <fieldset className="field_full">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faCogs} className="icons" />
                            Services Contracted For
                          </legend>
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
                                  <div className="alignment">
                                    <div className="label_name">
                                      {" "}
                                      Service (1):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment">
                                    <div className="label_name">
                                      {" "}
                                      Service (2):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment">
                                    <div className="label_name">
                                      {" "}
                                      Service (3):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                </div>
                                <div className="service">
                                  <div className="alignment">
                                    <div className="label_name">
                                      {" "}
                                      Service (4):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment">
                                    <div className="label_name">
                                      {" "}
                                      Service (5):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment">
                                    <div className="label_name">
                                      {" "}
                                      Service (6):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div className="alignment_other">
                                <div className="label_other"> Other</div>
                                <input className="tax_liability" />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="main_heading">Employment/Business</div>
                    <div className="custom-lines"></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Employment</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="icons"
                            />
                            Employment
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name"> Employment:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={employment}
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Type of Work:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  Signature Title:
                                </div>
                                <input
                                  type="text"
                                  className="tax_liability"
                                  placeholder="Taxpayer"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Business</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faUniversity}
                              className="icons"
                            />
                            Business
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name">Business Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">Business Type:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={business_type}
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  Employer ID No:
                                </div>
                                <input type="text" className="tax_liability" />
                              </div>

                              <div className="alignment">
                                <div className="label_name">
                                  Business Taxes:
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Checkbox
                                    defaultChecked={true}
                                    label={"From Withholding"}
                                    className="check_name"
                                  />

                                  <Checkbox
                                    label={"From Profit"}
                                    className="check_name"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>

                        {/* </div> */}
                      </div>

                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Business Address</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faBuilding}
                              className="icons"
                            />
                            Business Address
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name"> Street:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">#:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">City:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment">
                                <div className="label_name">State:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={state}
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name"> Zip Code:</div>
                                <input
                                  type="numeric"
                                  placeholder="00000-0000"
                                  className="tax_liability"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        {/* <div className=" sub_headtr">Company Information</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faCubes} className="icons" />
                            Company Information
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment">
                                <div className="label_name">
                                  {" "}
                                  Is the company still active?:
                                </div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={yesno}
                                />
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  If closed, When did it close?:
                                </div>
                                <div style={{ width: "208px" }}>
                                  <DatePicker placeholder="" />
                                </div>
                              </div>
                              <div className="alignment">
                                <div className="label_name">
                                  If open, How many W-2 employees are on
                                  payroll?:
                                </div>
                                <input type="text" className="tax_liability" />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleShowFields}
                icon="plus"
                className="case_contacts"
              >
                Case Contacts
                <FontAwesomeIcon icon={faPlusCircle} className="plus_icon" />
              </button>
              {showFields && (
                <div
                  style={{
                    width: "74.7%",
                    marginLeft: "8px",
                    border: "1px solid #eaeaea",
                    backgroundColor: "#e6e6e6",
                  }}
                >
                  <div
                    style={{
                      width: "97.5%",
                      marginLeft: "10px",
                      border: "1px solid #e9e9e9",
                      borderRadius: "4px",
                      marginTop: "5px",
                      marginBottom: "5px",
                      backgroundColor: "white",
                    }}
                  >
                    <div
                      className="sub_divcase_minus"
                      style={{ marginTop: "10px" }}
                    >
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        className="minus_icon"
                      />
                      <div className="custom-lineminus"></div>
                    </div>
                    <div className="sub_divcase" style={{ marginTop: "10px" }}>
                      <div>
                        <div className="title_cases">First Name</div>
                        <div className="case_fields">
                          <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">Middle Name</div>
                        <div className="case_fields">
                          <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Middle Name"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">Last Name</div>
                        <div className="case_fields">
                          <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="title_cases">SSN:</div>
                        <div
                          className="case_fields"
                          style={{ marginRight: "5px" }}
                        >
                          <MaskedTextBox
                            mask="000-00-0000"
                            placeholder="Enter SSN"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sub_divcase" style={{ marginTop: "10px" }}>
                      <div>
                        <div className="title_cases">Relationship</div>
                        <div className="case_fields">
                          <Input placeholder="Select Relationship" />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">Email</div>
                        <div className="case_fields">
                          <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">Apt No:</div>
                        <div className="case_fields">
                          <Input placeholder="Enter Apt No." />
                        </div>
                      </div>
                      <div>
                        <div className="title_cases">Date of Birth:</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-00-0000"
                            placeholder="Enter Date of Birth "
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sub_divcase">
                      <div>
                        <div className="title_cases">Home Phone</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-000-0000"
                            placeholder="Enter Home Phone"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">Work Phone</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-000-0000"
                            placeholder="Enter Work Phone"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">Cell Phone</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-000-0000"
                            placeholder="Enter Cell Phone"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="title_cases">Fax:</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-00-0000"
                            placeholder="Enter Fax"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="sub_divcase"
                      style={{ paddingBottom: "10px" }}
                    >
                      <div>
                        <div className="title_cases">Address</div>
                        <div className="case_fields">
                          <Input placeholder="Enter Address" />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">State</div>
                        <div className="case_fields">
                          <DropDownList
                            data={state}
                            placeholder="Select state"
                          />
                        </div>
                      </div>

                      <div>
                        <div className="title_cases">City</div>
                        <div className="case_fields">
                          <Input placeholder="Enter City" />
                        </div>
                      </div>
                      <div>
                        <div className="title_cases">Zip</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="00000-0"
                            placeholder="Enter Zip code"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>{showActivities && <Activities />}</div>
        </Splitter>
      ) : (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div>
            <div
              style={{
                width: "-webkit-fill-available",
                marginLeft: "20px",
                marginBottom: "10px",
              }}
            >
              <div className="tr_div">
                <div className="newtr">
                  <div>
                    <div className="main_heading">Case Information</div>
                    <div className="custom-lines"></div>
                    <div className="alignment_mob">
                      {/* <div className="individual_box"> */}
                      {/* <div className=" sub_headtr">Tax Information</div> */}
                      <fieldset className="field">
                        <legend className="sub_headtr">
                          {" "}
                          <FontAwesomeIcon
                            icon={faTriangleExclamation}
                            className="icons"
                          />
                          Tax Information
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment_r">
                              <div className="label_name">Tax Type:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={type}
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">Tax Problem:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                          </div>
                          <div>
                            <div className="alignment_r">
                              <div className="label_name">Agency:</div>
                              <Checkbox
                                label={"State"}
                                className="check_name"
                              />{" "}
                              <Checkbox
                                defaultChecked={true}
                                label={"Federal"}
                                className="check_name"
                                style={{ marginLeft: "55px" }}
                              />
                              <br />
                            </div>
                            <div>
                              <div className="alignment_r">
                                <div className="label_name">Tax Liability:</div>
                                <input
                                  label="0.00"
                                  type="numeric"
                                  className="tax_liability"
                                />
                                {/* <Input label="0.00" style={{ width: "200px" }} /> */}
                              </div>
                              <div>
                                <div className="label_name">
                                  Form Number(s) {"  "}
                                  {"  "}
                                  {"  "}
                                  {"  "}
                                  {"  "}
                                  {"  "} (if applicable):
                                </div>
                                <div
                                  style={{
                                    marginTop: "-30px",
                                    marginBottom: "20px",
                                  }}
                                >
                                  <Checkbox
                                    label={"Federal 1040"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    defaultChecked={true}
                                    label={"Civil Penalty"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    label={"Federal 1120"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    label={"Federal 940/941"}
                                    className="checkbox_name"
                                    style={{ marginBottom: "7px" }}
                                  />
                                  <br />
                                  <Checkbox
                                    label={"Federal 1065"}
                                    className="checkbox_name"
                                  />
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  {" "}
                                  Source/Campaign:
                                </div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={type}
                                  // defaultValue="Pizza"
                                />
                              </div>
                            </div>

                            <div className="alignment_r">
                              <div className="label_name">Lead Cost:</div>
                              <Input />
                            </div>
                          </div>
                        </div>
                      </fieldset>

                      <fieldset className="field">
                        <legend className="sub_headtr">
                          {" "}
                          <FontAwesomeIcon
                            icon={faShareSquare}
                            className="icons"
                          />
                          Assignments
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment_r">
                              <div className="label_name">Team:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={type}
                                defaultValue="Main Office"
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">Set Officer:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                                defaultValue="--Unassigned--"
                              />
                            </div>

                            <div className="alignment_r">
                              <div className="label_name">Case Worker:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">Case Manager:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">CPA/Attorney/EA:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">Tax Preparer:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">Opener:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                            <div className="alignment_r">
                              <div className="label_name">Complance mgr:</div>
                              <DropDownList
                                className="drpodown_list"
                                data={problem}
                              />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                      {/* </div> */}
                    </div>
                  </div>

                  <div>
                    <div className="main_heading"> Client Information </div>
                    <div className="custom-lines"></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="alignment_mob">
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faAddressCard}
                              className="icons"
                            />
                            General
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name"> First Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Middle Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Last Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Date of Birth:</div>
                                <div style={{ width: "179px" }}>
                                  <DatePicker placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="alignment_r">
                                <div className="label_name">SSN:</div>
                                <div style={{ width: "179px" }}>
                                  <MaskedTextBox
                                    mask="000-00-0000"
                                    defaultValue="xxx-xx-xxxx"
                                  />
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  Marital Status:
                                </div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={marital}
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Language:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={language}
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faPhone} className="icons" />
                            Contact
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name">Home #</div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ width: "146px" }}>
                                    <MaskedTextBox mask="000-000-0000" />
                                  </div>
                                  <button type="button" className="callbuttons">
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      className="icons_btn"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Work #</div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ width: "146px" }}>
                                    <MaskedTextBox mask="000-000-0000" />
                                  </div>
                                  <button type="button" className="callbuttons">
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      className="icons_btn"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Mobile #</div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ width: "146px" }}>
                                    <MaskedTextBox mask="000-000-0000" />
                                  </div>
                                  <button type="button" className="callbuttons">
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      className="icons_btn"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Fax #</div>
                                <div style={{ width: "179px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                              </div>

                              <div className="alignment_r">
                                <div className="label_name"> Email</div>
                                <input
                                  placeholder="user@domain.com"
                                  type="email"
                                  className="tax_liability"
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  {" "}
                                  Best Time to Call
                                </div>
                                <input
                                  type="numeric"
                                  className="tax_liability"
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">SMS Permitted</div>
                                <Checkbox className="check_name" />

                                <br />
                              </div>
                              <button className="portal_btn">
                                Client Portal Invitation
                              </button>
                            </div>
                          </div>
                        </fieldset>
                        {/* <div className="sub_headtr">Contact</div> */}

                        <div>{/* </div> */}</div>
                      </div>

                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Home Address</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            {" "}
                            <FontAwesomeIcon icon={faHome} className="icons" />
                            Home Address
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name"> Street:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">#:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">City:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">State:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={state}
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name"> Zip Code:</div>
                                <input
                                  type="numeric"
                                  placeholder="00000-0000"
                                  className="tax_liability"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        <div className="individual_boxes">
                          {/* <div className="sub_headtr">Mailing Address</div> */}
                          <fieldset className="field">
                            <legend className="sub_headtr">
                              <FontAwesomeIcon
                                icon={faList}
                                className="icons"
                              />
                              Mailing Address
                            </legend>
                            <div>
                              <div className="align_col_spouse">
                                <div className="alignment_spouse">
                                  <Checkbox className="check_name" />
                                  <div className="label_names">
                                    Same as home address
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>

                          <div></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="main_heading">Spouse Information</div>
                    <div className="custom-lines"></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="alignment_mob">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">General</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faAddressCard}
                              className="icons"
                            />
                            General
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name"> First Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Middle Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Last Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Date of Birth:</div>
                                <div style={{ width: "179px" }}>
                                  <DatePicker placeholder="" />
                                </div>
                              </div>
                            </div>
                            <div>
                              <div className="alignment_r">
                                <div className="label_name">SSN:</div>
                                <div style={{ width: "179px" }}>
                                  <MaskedTextBox
                                    mask="000-00-0000"
                                    defaultValue="xxx-xx-xxxx"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Contact</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faPhone} className="icons" />
                            Contact
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name">Home #</div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ width: "143px" }}>
                                    <MaskedTextBox mask="000-000-0000" />
                                  </div>
                                  <button type="button" className="callbuttons">
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      className="icons_btn"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Work #</div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ width: "143px" }}>
                                    <MaskedTextBox mask="000-000-0000" />
                                  </div>
                                  <button type="button" className="callbuttons">
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      className="icons_btn"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Mobile #</div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "row",
                                  }}
                                >
                                  <div style={{ width: "143px" }}>
                                    <MaskedTextBox mask="000-000-0000" />
                                  </div>
                                  <button type="button" className="callbuttons">
                                    <FontAwesomeIcon
                                      icon={faPhone}
                                      className="icons_btn"
                                    />
                                  </button>
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Fax #</div>
                                <div style={{ width: "179px" }}>
                                  <MaskedTextBox mask="000-000-0000" />
                                </div>
                              </div>

                              <div className="alignment_r">
                                <div className="label_name"> Email</div>
                                <input
                                  placeholder="user@domain.com"
                                  type="email"
                                  className="tax_liability"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}
                      </div>

                      <div className="alignment_mob">
                        <div className="individual_boxes">
                          {/* <div className="sub_headtr">Spouse Address</div> */}
                          <fieldset className="field">
                            <legend className="sub_headtr">
                              <FontAwesomeIcon
                                icon={faAddressCard}
                                className="icons"
                              />
                              Spouse Address
                            </legend>
                            <div>
                              <div className="align_col_spouse">
                                <div className="alignment_spouse">
                                  <Checkbox className="check_name" />
                                  <div className="label_names">
                                    Same as taxpayer's home address
                                  </div>
                                </div>
                              </div>
                            </div>
                          </fieldset>
                        </div>
                      </div>

                      <div className="alignment_full">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Services Contracted For</div> */}
                        <fieldset className="field_full">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faCogs} className="icons" />
                            Services Contracted For
                          </legend>
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
                                  <div className="alignment_r">
                                    <div className="label_name">
                                      {" "}
                                      Service (1):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment_r">
                                    <div className="label_name">
                                      {" "}
                                      Service (2):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment_r">
                                    <div className="label_name">
                                      {" "}
                                      Service (3):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                </div>
                                <div className="service">
                                  <div className="alignment_r">
                                    <div className="label_name">
                                      {" "}
                                      Service (4):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment_r">
                                    <div className="label_name">
                                      {" "}
                                      Service (5):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                  <div className="alignment_r">
                                    <div className="label_name">
                                      {" "}
                                      Service (6):
                                    </div>
                                    <DropDownList
                                      className="drpodown_list"
                                      data={type}
                                    />
                                  </div>
                                </div>
                              </div>

                              <div
                                className="alignment_other"
                                style={{ width: "auto" }}
                              >
                                <div className="label_other"> Other</div>
                                <input
                                  className="tax_liability"
                                  style={{ width: "161px" }}
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="main_heading">Employment/Business</div>
                    <div className="custom-lines"></div>
                    <div style={{ display: "flex", flexDirection: "column" }}>
                      <div className="alignment_mob">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Employment</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faBriefcase}
                              className="icons"
                            />
                            Employment
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name"> Employment:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={employment}
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Type of Work:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  Signature Title:
                                </div>
                                <input
                                  type="text"
                                  className="tax_liability"
                                  placeholder="Taxpayer"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Business</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faUniversity}
                              className="icons"
                            />
                            Business
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name">Business Name:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">Business Type:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={business_type}
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  Employer ID No:
                                </div>
                                <input type="text" className="tax_liability" />
                              </div>

                              <div className="alignment_r">
                                <div className="label_name">
                                  Business Taxes:
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                  }}
                                >
                                  <Checkbox
                                    defaultChecked={true}
                                    label={"From Withholding"}
                                    className="check_name"
                                  />

                                  <Checkbox
                                    label={"From Profit"}
                                    className="check_name"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </fieldset>

                        {/* </div> */}
                      </div>

                      <div className="alignment">
                        {/* <div className="individual_box"> */}
                        {/* <div className="sub_headtr">Business Address</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon
                              icon={faBuilding}
                              className="icons"
                            />
                            Business Address
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name"> Street:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">#:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">City:</div>
                                <input type="text" className="tax_liability" />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">State:</div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={state}
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name"> Zip Code:</div>
                                <input
                                  type="numeric"
                                  placeholder="00000-0000"
                                  className="tax_liability"
                                />
                              </div>
                            </div>
                            <div></div>
                          </div>
                        </fieldset>
                        {/* </div> */}

                        {/* <div className="individual_box"> */}
                        {/* <div className=" sub_headtr">Company Information</div> */}
                        <fieldset className="field">
                          <legend className="sub_headtr">
                            <FontAwesomeIcon icon={faCubes} className="icons" />
                            Company Information
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_r">
                                <div className="label_name">
                                  {" "}
                                  Is the company still active?:
                                </div>
                                <DropDownList
                                  className="drpodown_list"
                                  data={yesno}
                                />
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  If closed, When did it close?:
                                </div>
                                <div style={{ width: "178px" }}>
                                  <DatePicker placeholder="" />
                                </div>
                              </div>
                              <div className="alignment_r">
                                <div className="label_name">
                                  If open, How many W-2 employees are on
                                  payroll?:
                                </div>
                                <input type="text" className="tax_liability" />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        {/* </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <button
                onClick={handleShowFields}
                icon="plus"
                className="case_contacts"
              >
                Case Contacts
                <FontAwesomeIcon icon={faPlusCircle} className="plus_icon" />
              </button>
              {showFields && (
                <div className="first_mob">
                  <div className="second_mob">
                    <div
                      className="sub_divcase_minus"
                      style={{ marginTop: "10px" }}
                    >
                      <FontAwesomeIcon
                        icon={faMinusCircle}
                        className="minus_icon"
                      />
                      <div className="custom-lineminus"></div>
                    </div>
                    <div className="sub_divcase" style={{ marginTop: "10px" }}>
                      <div className="details_mob">
                        <div className="title_cases">First Name</div>
                        <div className="case_fields">
                          <Input
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter First Name"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">Middle Name</div>
                        <div className="case_fields">
                          <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Middle Name"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">Last Name</div>
                        <div className="case_fields">
                          <Input
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter Last Name"
                            className="inp_details"
                          />
                        </div>
                      </div>
                      <div className="details_mob">
                        <div className="title_cases">SSN:</div>
                        <div
                          className="case_fields"
                          style={{ marginRight: "5px" }}
                        >
                          <MaskedTextBox
                            mask="000-00-0000"
                            placeholder="Enter SSN"
                            className="inp_details"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sub_divcase" style={{ marginTop: "10px" }}>
                      <div className="details_mob">
                        <div className="title_cases">Relationship</div>
                        <div className="case_fields">
                          <Input
                            placeholder="Select Relationship"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">Email</div>
                        <div className="case_fields">
                          <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter Email"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">Apt No:</div>
                        <div className="case_fields">
                          <Input
                            placeholder="Enter Apt No."
                            className="inp_details"
                          />
                        </div>
                      </div>
                      <div className="details_mob">
                        <div className="title_cases">Date of Birth:</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-00-0000"
                            placeholder="Enter Date of Birth "
                            className="inp_details"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="sub_divcase">
                      <div className="details_mob">
                        <div className="title_cases">Home Phone</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-000-0000"
                            placeholder="Enter Home Phone"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">Work Phone</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-000-0000"
                            placeholder="Enter Work Phone"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">Cell Phone</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-000-0000"
                            placeholder="Enter Cell Phone"
                            className="inp_details"
                          />
                        </div>
                      </div>
                      <div className="details_mob">
                        <div className="title_cases">Fax:</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="000-00-0000"
                            placeholder="Enter Fax"
                            className="inp_details"
                          />
                        </div>
                      </div>
                    </div>

                    <div
                      className="sub_divcase"
                      style={{ paddingBottom: "10px" }}
                    >
                      <div className="details_mob">
                        <div className="title_cases">Address</div>
                        <div className="case_fields">
                          <Input
                            placeholder="Enter Address"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">State</div>
                        <div className="case_fields">
                          <DropDownList
                            data={state}
                            placeholder="Select state"
                            className="inp_details"
                          />
                        </div>
                      </div>

                      <div className="details_mob">
                        <div className="title_cases">City</div>
                        <div className="case_fields">
                          <Input
                            placeholder="Enter City"
                            className="inp_details"
                          />
                        </div>
                      </div>
                      <div className="details_mob">
                        <div className="title_cases">Zip</div>
                        <div className="case_fields">
                          <MaskedTextBox
                            mask="00000-0"
                            placeholder="Enter Zip code"
                            className="inp_details"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div>
            <FontAwesomeIcon
              icon={faAngleDoubleLeft}
              className="plus_icon"
              onClick={toggleActivitiesm}
              style={{marginRight:"10px",fontSize:"20px",color:"blue"}}
            />
            <div
              className={`activities-container ${
                showActivitiesm ? "show" : "hide"
              }`}
            >
              <ActivitiesMob />
            </div>{" "}
          </div>
          {/* <div>{showActivities && <Activities />}</div> */}
        </div>
      )}
    </div>
  );
};

export default NewTR;