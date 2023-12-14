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
import "../../styles/PowerOfAttorney.css";

const PowerOfAttorney = () => {
  return (
    <div>
      <div
       className="main_div_cont" id="powerofattorney"
      >
        <div className="main_heading">Power of Attorney & Transcripts</div>
        <div className="custom-lines"></div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Power of Attorney</div> <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
            //   data={type}
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Form 8821</div> <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
            //   data={type}
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Transcripts Status</div> <div style={{ width: "20px" }}>:</div>
          <DropDownList
            className="drpodown_list"
            //   data={type}
          />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_service"> Transcripts Notes</div> <div style={{ width: "20px" }}>:</div>
          <TextArea
            className="text_areap"
            //   data={type}
          />
        </div>
        <div cellspacing="5px" className="dashed-table">
          <div>
            <div style={{display:"flex",flexDirection:"row",marginTop:"10px"}}>
              <div
                style={{ width: "117px", fontSize: "12px", fontWeight: "500",marginLeft:"5px" }}
              >
                Hold Status{" "}
              </div>
              <div style={{ width: "20px" }}>:</div>
              <DropDownList className="sub_dropdown"/>
            </div>
            <div id="lblHoldDate" style={{display:"flex",flexDirection:"row",marginTop:"10px",marginBottom:"15px"}}>
              <div
                
                style={{ width: "117px", fontWeight: "500", fontSize: "12px",marginLeft:"5px" }}
              >
                Hold Date
              </div>
              <div style={{ width: "20px" }}>:</div>
              <DatePicker  className="sub_dropdown" value="" title=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerOfAttorney;
