import React, { useState, useEffect, useRef } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Input,
  TextArea,
  Checkbox,
  MaskedTextBox,
  RadioButton,
} from "@progress/kendo-react-inputs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { faAddressCard, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RadioGroup } from "@progress/kendo-react-inputs";
import "../../styles/PartialPay.css";

const PartialPay = () => {
    const method = [
        {
          label: "Direct debit",
          value: "Direct debit",
        },
        {
          label: "Voluntary",
          value: "Voluntary",
        },
       
      ];
      const radioGroupRef = React.useRef(null);
      React.useEffect(() => {
        if (radioGroupRef && radioGroupRef.current) {
          radioGroupRef.current.focus();
        }
      });
  return (
    <div>
      <div
    className="main_div_cont" id="partialpay"
      >
        <div className="main_heading">Partial Payment Agreement</div>
        <div className="custom-lines" style={{marginBottom:"15px"}}></div>

        <fieldset className="field_full">
          <legend className="sub_headtr" style={{color:"#115EA0"}}>
            <FontAwesomeIcon icon={faAddressCard} className="icons" style={{color:"#115EA0"}}/>
            Partial Payment Agreement
          </legend>
          <div>
            <div className="align_cols">
              <div className="alignment alignment_cont">
                <div className="label_name_collect"> Amount</div>
                <div style={{ width: "20px" }}>:</div>
                <Input className="drpodown_list_c" />
              </div>

              <div className="alignment alignment_cont">
                <div className="label_name_collect"> First Payment Date</div>{" "}
                <div style={{ width: "20px" }}>:</div>
                <DatePicker className="drpodown_list_c" />
              </div>
              <div className="alignment alignment_cont">
                <div className="label_name_collect">
                  {" "}
                  Payment Day Of The Month
                </div>{" "}
                <div style={{ width: "20px" }}>:</div>
                <DropDownList className="drpodown_list_c" />
              </div>

              <div className="alignment alignment_cont">
                <div className="label_name_collect"> Payment Method</div>{" "}
                <div style={{ width: "20px" }}>:</div>
             
              <div id="radio_btn"> <RadioGroup data={method} ref={radioGroupRef}  className=""/></div>   
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default PartialPay;
