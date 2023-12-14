import React, { useState } from "react";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faUserPlus,
  faPencil,
  faArrowsRotate,
  faClose,
  faIdCard,
  faPhone,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
import UserResp from "./UserResp";
import "../../styles/Users.css";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { Editor, EditorTools } from "@progress/kendo-react-editor";

const {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Subscript,
  Superscript,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  Indent,
  Outdent,
  OrderedList,
  UnorderedList,
  Undo,
  Redo,
  FontSize,
  FontName,
  FormatBlock,
  Link,
  Unlink,
  InsertImage,
  ViewHtml,
  InsertTable,
  AddRowBefore,
  AddRowAfter,
  AddColumnBefore,
  AddColumnAfter,
  DeleteRow,
  DeleteColumn,
  DeleteTable,
  MergeCells,
  SplitCell,
} = EditorTools;
const UserRight = () => {
  // const [selected, setSelected] = React.useState(0);
  // const handleSelect = (e) => {
  //   setSelected(e.selected);
  // };
  const [isNewPopupOpen, setNewPopupOpen] = useState(false);
  const handleNewButtonClick = () => {
    setNewPopupOpen(true);
  };
  const handleNewCancel = () => {
    setNewPopupOpen(false);
  };
  const [selectedTab, setSelectedTab] = useState("General");

  const handleSelect = (tab) => {
    setSelectedTab(tab);
  };

  const data = UserResp.Result;
  console.log(UserResp.Result);
  return (
    <div
      style={{
        border: "1px solid #99bbe8",
        padding: "5px",
        backgroundColor: "#d4e3f7",
      }}
    >
      <div className="user_right" id="ext-gen11">
        <span id="ext-gen68" className="teams_user_txt">
          AM General
        </span>
      </div>

      <div style={{ backgroundColor: "white", height: "97vh" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            height: "40px",
            justifyContent: "space-between",
          }}
        >
          <div className="user_ref" onClick={handleNewButtonClick}>
            <FontAwesomeIcon icon={faUserPlus} style={{ marginRight: "5px" }} />
            <div> New User</div>
          </div>

          <div className="user_ref">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              style={{ marginRight: "5px" }}
            />
            <div>Refresh</div>
          </div>
        </div>

        <div id="teams_users">
          <Grid className="teams_grid_main" data={data}>
            <GridColumn
              field="Active"
              title="Active"
              cell={(props) => (
                <td>
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    style={{
                      marginRight: "12px",
                      marginLeft: "12px",
                      color: "rgb(84 189 84 / 97%)",
                    }}
                  />
                </td>
              )}
            />
            <GridColumn field="UserID" title="User ID" />
            <GridColumn field="Name" title="Name" />
            <GridColumn field="Roles" title="Roles" />
            <GridColumn field="Email" title="Email" />
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
      </div>
      {isNewPopupOpen && (
        <div className="popup">
          <div className="upload-popup">
            <div className="box_pop_new_user">
              <div
                className="new_popup"
                style={{ borderBottom: "1px solid #8ab8f5" }}
              >
                <div className="align_new_text">
                  {" "}
                  <div style={{ marginLeft: "5px" }}>New User</div>
                </div>
                <FontAwesomeIcon
                  icon={faClose}
                  onClick={handleNewCancel}
                  style={{ fontWeight: "800", marginRight: "5px" }}
                />
              </div>
              {/* <div className="new_line"></div> */}
              <div id="userright_tab" className="">
                <div>
                  <button
                    onClick={() => handleSelect("General")}
                    className="tab_btn_new"
                  >
                    General
                  </button>
                  <button
                    onClick={() => handleSelect("Signature")}
                    className="tab_btn_new"
                  >
                    Signature
                  </button>
                  <button
                    onClick={() => handleSelect("Roles")}
                    className="tab_btn_new"
                  >
                    Roles
                  </button>
                  <button
                    onClick={() => handleSelect("Commission")}
                    className="tab_btn_new"
                  >
                    Commission
                  </button>
                  <button
                    onClick={() => handleSelect("EA/Attorney License #")}
                    className="tab_btn_new"
                  >
                    EA/Attorney License #
                  </button>
                </div>
                {selectedTab === "General" && (
                  <div>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        border: "1px solid #99bbe8",
                        padding: "7px",
                        height: "452px",
                        width: "98%",
                      }}
                    >
                      <div style={{ width: "100%" }}>
                        <fieldset className="field_new_gen">
                          <legend className="sub_head">
                            <FontAwesomeIcon
                              icon={faIdCard}
                              className="icons"
                            />
                            General
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">
                                  First Name:
                                </div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Last Name:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Status:</div>

                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Job Title:</div>
                                <input type="text" className="inp_new" />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                        <fieldset className="field_new_gen">
                          <legend className="sub_head">
                            <FontAwesomeIcon icon={faPhone} className="icons" />
                            Contact
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new"> Email:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Home #:</div>

                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Work #:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Cell #:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">Fax #:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">SMS #:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">
                                  Call Forwarding #:
                                </div>
                                <input type="text" className="inp_new" />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      <div style={{ width: "100%" }}>
                        <fieldset className="field_new_gen">
                          <legend className="sub_head">
                            <FontAwesomeIcon icon={faHome} className="icons" />
                            Address
                          </legend>
                          <div>
                            <div className="align_col">
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new"> Street:</div>
                                <input type="text" className="inp_new" />
                              </div>
                              <div className="alignment_new alignment_cont">
                                <div className="label_name_new">#:</div>

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
                                <div className="label_name_new">Zip Code:</div>

                                <input
                                  type="text"
                                  className="inp_new"
                                  placeholder="00000-0000"
                                />
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                    <div className="footer_divs">
                      <div className="btns_divs">
                        <button
                          onClick={handleNewCancel}
                          className="cancel_up"
                          id="uploadbtn"
                        >
                          {/* <FontAwesomeIcon icon={faCircleXmark} style={{marginRight:"5px"}}/> */}
                          Cancel{" "}
                        </button>
                        <button onClick={handleNewCancel} className="cancel_up">
                          {/* <FontAwesomeIcon icon={faCircleCheck} style={{marginRight:"5px"}}/> */}
                          OK
                        </button>
                      </div>
                    </div>
                  </div>
                )}
                {selectedTab === "Signature" && (
                  <div>
                    <Editor
                      tools={[
                        [Bold, Italic, Underline, Strikethrough],
                        [Subscript, Superscript],
                        [AlignLeft, AlignCenter, AlignRight, AlignJustify],
                        [Indent, Outdent],
                        [OrderedList, UnorderedList],
                        FontSize,
                        FontName,
                        FormatBlock,
                        [Undo, Redo],
                        [Link, Unlink, InsertImage, ViewHtml],
                        [InsertTable],
                        [
                          AddRowBefore,
                          AddRowAfter,
                          AddColumnBefore,
                          AddColumnAfter,
                        ],
                        [DeleteRow, DeleteColumn, DeleteTable],
                        [MergeCells, SplitCell],
                      ]}
                      contentStyle={{
                        height: 630,
                      }}
                    />
                  </div>
                )}
                {
                  selectedTab ==="Roles" &&(
                    <div>
                      <Grid>
                        <GridColumn/>
                      </Grid>
                      </div>
                  )
                }
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default UserRight;
