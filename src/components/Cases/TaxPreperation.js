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
import "../../styles/TaxPreperation.css";

const TaxPreperation = () => {
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
        id="taxprep"
      >
        <div className="main_heading">Tax Preparation</div>
        <div className="custom-lines"></div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Agency</div>
          <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
            //   data={type}
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Years</div> <div style={{ width: "20px" }}>:</div>
          <Input
       
        className="tax_inpt"
       
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Type</div> <div style={{ width: "20px" }}>:</div>
          <Input
       className="tax_inpt"
       
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Tax Organizer Sent</div> <div style={{ width: "20px" }}>:</div>
          <DatePicker   className="tax_inpt"/>
        </div>

        <div className="alignment alignment_cont">
          <div className="label_name_service"> Tax Org. Received</div> <div style={{ width: "20px" }}>:</div>
          <DatePicker   className="tax_inpt"/>
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Liability Owed</div> <div style={{ width: "20px" }}>:</div>
          <Input
        className="tax_inpt"
       
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
              Status:{" "}
              </div>

              <DropDownList   className="tax_inpt"/>
            </div>
            <div id="lblHoldDates" style={{display:"flex",flexDirection:"row",marginTop:"10px",marginBottom:"15px"}}>
              <div
                
                style={{ width: "117px", fontWeight: "500", fontSize: "12px",marginLeft:"5px" }}
              >
                Filed Date:
              </div>

              <DatePicker  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxPreperation;
