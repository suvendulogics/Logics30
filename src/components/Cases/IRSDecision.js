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
import "../../styles/IRSDecision.css";

const IRSDecision = () => {
  return (
    <div>
      <div
     className="main_div_cont" id="irsdecision"
      >
        <div className="main_heading">IRS Decision</div>
        <div className="custom-lines"></div>

        <div className="alignment alignment_cont">
          <div className="label_name_service">Notes:</div>
          <TextArea className="text_area" />
        </div>
        <div cellspacing="5px" className="dashed-table">
          <div>
            <div className="main_div_irs">
              <div className="sub_div_irs">
                <div className="irs_div_title">IRS Decision: </div>

                <DropDownList  className="drop_irs"/>
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title">Date: </div>

                <DatePicker  className="date_irs"/>
              </div>
            </div>
            <div className="main_div_irs" style={{ marginBottom: "10px" }}>
              <div className="sub_div_irs">
                <div className="irs_div_title">Appeal: </div>

                <DropDownList  className="drop_irs"/>
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title"> Appeal Date: </div>

                <DatePicker className="date_irs" />
              </div>
            </div>
          </div>
        </div>
        <div cellspacing="5px" className="dashed-table">
          <div>
            <div className="main_div_irs">
              <div className="sub_div_irs">
                <div className="irs_div_title">IRS Settlement Amount: </div>

                <Input className="irs_inp" placeholder="$0.00" />
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title">IRS Saved Amount: </div>

                <Input className="irs_inp" placeholder="$0.00" />
              </div>
            </div>
            <div className="main_div_irs" >
              <div className="sub_div_irs">
                <div className="irs_div_title">IRS Monthly Payment: </div>

                <Input placeholder="$0.00" className="irs_inp" />
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title"> IRS Initial Payment Date: </div>

                <DatePicker className="date_irs" />
              </div>
            </div>
            <div className="main_div_irs" style={{ marginBottom: "10px" }}>
              <div className="sub_div_irs">
                <div className="irs_div_title">Collection Pause Date: </div>

                <DropDownList  className="drop_irs"/>
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title"> IRS OIC Check Amount: </div>

                <Input  className="irs_inp" placeholder="$0.00" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRSDecision;
