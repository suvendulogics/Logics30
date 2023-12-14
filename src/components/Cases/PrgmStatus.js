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
import "../../styles/PrgmStatus.css";

const PrgmStatus = () => {
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
        id="pgmstatus"
      >
        <div className="main_heading">Program Status</div>
        <div className="custom-lines"></div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Program Type</div>
          <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Fallback Program</div>
          <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Sent to Client</div>
          <div style={{ width: "20px" }}>:</div>
          <DatePicker    className="date_pick"/>
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Received from Client</div>
          <div style={{ width: "20px" }}>:</div>
          <DatePicker   className="date_pick"/>
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Submit to IRS</div>
          <div style={{ width: "20px" }}>:</div>
          <DatePicker
       className="date_pick"
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Notes</div>
          <div style={{ width: "20px" }}>:</div>
          <TextArea
            className="text_area_p"
          />
        </div>
      
      </div>
    </div>
  );
};

export default PrgmStatus;

