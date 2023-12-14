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
import "../../styles/StateDecision.css";

const StateDecision = () => {
  return (
    <div>
      <div
       className="main_div_cont" id="statedeci"
      >
        <div className="main_heading">State Decision</div>
        <div className="custom-lines"></div>

        <div className="alignment alignment_cont">
          <div className="label_name_service">Notes:</div>
          <TextArea className="text_area" />
        </div>
        <div cellspacing="5px" className="dashed-table">
          <div>
            <div className="main_div_irs">
              <div className="sub_div_irs">
                <div className="irs_div_title">State Decision: </div>

                <DropDownList  className="drop_sdec"/>
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title">Date: </div>

                <DatePicker className="inp_sdec" />
              </div>
            </div>
            <div className="main_div_irs" style={{ marginBottom: "10px" }}>
              <div className="sub_div_irs">
                <div className="irs_div_title">Appeal Status: </div>

                <DropDownList className="drop_sdec" />
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title"> Appeal Date: </div>

                <DatePicker className="inp_sdec" />
              </div>
            </div>
          </div>
        </div>
        <div cellspacing="5px" className="dashed-table">
          <div>
            <div className="main_div_irs">
              <div className="sub_div_irs">
                <div className="irs_div_title">State Settlement Amount: </div>

                <Input className="inp_sdec" placeholder="$0.00" />
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title">State Saved Amount: </div>

                <Input className="inp_sdec" placeholder="$0.00" />
              </div>
            </div>
            <div className="main_div_irs" style={{ marginBottom: "10px" }}>
              <div className="sub_div_irs">
                <div className="irs_div_title">State Monthly Payment: </div>

                <Input placeholder="$0.00" className="inp_sdec" />
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title"> State Initial Payment Date: </div>

                <DatePicker className="inp_sdec" />
              </div>
            </div>
            <div className="main_div_irs" style={{ marginBottom: "10px" }}>
              <div className="sub_div_irs">
                <div className="irs_div_title">State Collection Pause Date : </div>

                <DatePicker className="inp_sdec" />
              </div>
              <div className="sub_div_irs">
                <div className="irs_div_title"> State OIC Check Amount: </div>

                <Input  placeholder="$0.00" className="inp_sdec"/>
              </div>
            </div>
            <div className="alignment alignment_cont">
          <div className="label_name_state">Notes:</div>
          <TextArea className="text_area_state" />
        </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StateDecision;
