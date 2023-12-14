import React, { useState } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faPencil,
  faPlusCircle,
  faUserGroup,
  faUsers,
  faCircleXmark,
  faCircleCheck
} from "@fortawesome/free-solid-svg-icons";
import TeamsResp from "./TeamsResp";
import "../../styles/Users.css";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const Teams = () => {
  const [isUploadPopupOpen, setUploadPopupOpen] = useState(false);
  const handleUploadButtonClick = () => {
    setUploadPopupOpen(true);
  };
  const handleUploadCancel = () => {
    setUploadPopupOpen(false);
  };
  const data = TeamsResp.Result[0].Teams;
  return (
    <div style={{ border: "1px solid #99bbe8", padding: "3px" }}>
      <div>
        <div className="teams_user" id="ext-gen11">
          <span id="ext-gen68" className="teams_user_txt">
            Teams/Affiliates
          </span>
        </div>
        <div className="teams_user icon_add">
          <div
            type="button"
            id="ext-gen18"
            className="teams_user_txt"
            onClick={handleUploadButtonClick}
          >
            <FontAwesomeIcon icon={faPlusCircle} className="plus_circle" />
            New Team/Affiliate
          </div>
        </div>
      </div>

      <div id="teams_users" style={{ border: "1px solid #99bbe8" }}>
        <Grid className="teams_grid_main" data={data}>
          <GridColumn field="Name" title="Team Name" />
          <GridColumn
            field="Edit"
            title="Edit"
            cell={(props) => (
              <td>
                <FontAwesomeIcon
                  icon={faPencil}
                  style={{
                    marginRight: "12px",
                    marginLeft: "12px",
                    color: "rgb(241 171 43)",
                  }}
                />
              </td>
            )}
          />
          {/* <GridColumn field="Edit" title="Edit" /> */}
        </Grid>
      </div>
      {isUploadPopupOpen && (
        <div className="popup">
          <div className="upload-popup">
            <div className="box_pop_new">
              <div className="new_popup">
                <div className="align_new_text">
                  {" "}
                  <FontAwesomeIcon
                    icon={faUserGroup}
                    style={{ marginLeft: "4px", marginRight: "5px" }}
                  />
                  <div>New</div>
                </div>
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={handleUploadCancel}
                  style={{ fontWeight: "800", marginRight: "5px" }}
                />
              </div>

              <div className="main_content_task">
                <div>
                  <div
                    className="general_section"
                    style={{ padddingTop: "2px" }}
                  >
                    General
                  </div>
                  <div style={{ display: "flex", flexDirection: "row" ,border:"1px solid #99bbe8",padding:"7px"}}>
                    <div>
                      <fieldset className="field_new">
                        <legend className="sub_head">
                          <FontAwesomeIcon icon={faUsers} className="icons" />
                          Team Name/Contact
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new"> Name:</div>
                              <input type="text" className="inp_new" />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Address:</div>

                              <input type="text" className="inp_new" />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">City:</div>
                              <input type="text" className="inp_new" />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">State:</div>
                              <DropDownList
                                className="cal_filter"
                                style={{ width: "187px", height: "27px" }}
                                placeholder="Assigned to me"
                              />
                            </div>

                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new"> Zip:</div>
                              <input type="text" className="inp_new" />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">First Name:</div>
                              <input type="text" className="inp_new" />
                            </div>

                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Last Name:</div>
                              <input type="text" className="inp_new" />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Phone:</div>
                              <input type="text" className="inp_new" />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Email:</div>
                              <input type="text" className="inp_new" />
                            </div>
                          </div>
                        </div>
                      </fieldset>
                    </div>

                    <div>
                      <fieldset className="field_new">
                        <legend className="sub_head">
                          <FontAwesomeIcon icon={faUsers} className="icons" />
                          Team Settings
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new"> Type:</div>
                              <DropDownList
                                className="cal_filter"
                                style={{ width: "187px", height: "27px" }}
                                placeholder="Assigned to me"
                              />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Status:</div>

                              <DropDownList
                                className="cal_filter"
                                style={{ width: "187px", height: "27px" }}
                                placeholder="Assigned to me"
                              />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Commission Rate %:</div>
                              <input type="text" className="inp_new" />

                            </div>
                            <div className="example_txt">0-100% (Example: 17.5%)</div>
                           
                          </div>
                        </div>
                      </fieldset>
                      <fieldset className="field_new">
                        <legend className="sub_head">
                          <FontAwesomeIcon icon={faUsers} className="icons" />
                          Approval by Case Manager
                        </legend>
                        <div>
                          <div className="align_col">
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new"> Approval Status:</div>
                              <DropDownList
                                className="cal_filter"
                                style={{ width: "187px", height: "27px" }}
                                placeholder="Assigned to me"
                              />
                            </div>
                            <div className="alignment_new alignment_cont">
                              <div className="label_name_new">Case Manager:</div>

                              <DropDownList
                                className="cal_filter"
                                style={{ width: "187px", height: "27px" }}
                                placeholder="Assigned to me"
                              />
                            </div>
                           
                          </div>
                        </div>
                      </fieldset>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer_divs">
                <div className="btns_divs">
                 
                  <button
                    onClick={handleUploadCancel}
                    className="cancel_up"
                    id="uploadbtn"
                  >
                     <FontAwesomeIcon icon={faCircleXmark} style={{marginRight:"5px"}}/>
                    Cancel{" "}
                  </button>
                  <button onClick={handleUploadCancel} className="cancel_up">
                  <FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"5px"}}/>
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Teams;
