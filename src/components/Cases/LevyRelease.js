import React, { useState, useEffect, useRef } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Input,
  TextArea,
  Checkbox,
  MaskedTextBox,
} from "@progress/kendo-react-inputs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/LevyRelease.css";

const LevyRelease = () => {
  return (
    <div>
     
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "5px",
          marginTop: "10px",
          marginLeft: "10px",
        }}
        id="levy"
      >
        <div className="main_heading">Levy Release</div>
        <div className="custom-lines"></div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Type of Levy</div> <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
            //   data={type}
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Date of Issue</div> <div style={{ width: "20px" }}>:</div>
          <DatePicker    className="date_levy"/>
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Funds Due Date</div> <div style={{ width: "20px" }}>:</div>
          <DatePicker   className="date_levy"/>
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Amount</div> <div style={{ width: "20px" }}>:</div>
          <Input
       className="date_levy"
            // className="text_area"
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Notes</div> <div style={{ width: "20px" }}>:</div>
          <TextArea
            className="text_area"
            //   data={type}
          />
        </div>
        <div cellspacing="5px" className="dashed-table">
          <div>
            <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
              <div
                style={{ width: "117px", fontSize: "12px", fontWeight: "500",marginLeft:"5px" }}
              >
               Type of Release{" "}
              </div>
              <div style={{ width: "20px" }}>:</div>
              <DropDownList  className="date_levy"/>
            </div>
            <div id="lblHoldDate" style={{display:"flex",flexDirection:"row",marginTop:"10px",marginBottom:"15px"}}>
              <div
                
                style={{ width: "117px", fontWeight: "500", fontSize: "12px",marginLeft:"5px" }}
              >
                Release Date
              </div>
              <div style={{ width: "20px" }}>:</div>
              <DatePicker className="date_levy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevyRelease;
