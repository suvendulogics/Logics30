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
import { faAddressCard, faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../styles/Collections.css";

const Collections = () => {
  return (
    <div>
      <div
     className="main_div_cont" id="collections"
      >
        <div className="main_heading">Collections</div>
        <div className="custom-lines"></div>
        <div className="alignment_c alignment_cont_col">
          <div className="label_name_service"> In-Collections</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_c" />
        </div>

        <div className="alignment_c alignment_cont_col">
          <div className="label_name_service"> Last Notice Date</div>
          <div style={{width:"20px"}}>:</div>
          <DatePicker className="drpodown_list_c" />
        </div>

        <div className="alignment_c alignment_cont_c">
          <div className="label_name_service"> Notes</div>
          <div style={{width:"20px"}}>:</div>
          <TextArea
            className="text_area"
            //   data={type}
          />
        </div>

        <fieldset className="field_full">
          <legend className="sub_headtr" style={{color:"#115EA0"}}>
            <FontAwesomeIcon icon={faAddressCard} className="icons" style={{color:"#115EA0"}}/>
            Third Party Collection
          </legend>
          <div>
            <div className="align_cols">
              <div className="alignment_c alignment_cont_c">
                <div className="label_name_collect"> Collection ID</div>
                <div style={{width:"20px"}}>:</div>
                <Input className="drpodown_list_c" />
              </div>

              <div className="alignment_c alignment_cont_c">
                <div className="label_name_collect">
                  {" "}
                  Collection Company Name
                </div>
                <div style={{width:"20px"}}>:</div>
                <Input className="drpodown_list_c" />
              </div>

              <div className="alignment_c alignment_cont_c">
                <div className="label_name_collect"> Collection Agent Name</div> <div style={{width:"20px"}}>:</div>
                <Input className="drpodown_list_c" />
              </div>
              <div className="alignment_c alignment_cont_c">
                <div className="label_name_collect"> Collection Agent Phone</div> <div style={{width:"20px"}}>:</div>
                <Input className="drpodown_list_c" />
              </div>

              <div className="alignment_c alignment_cont_c">
                <div className="label_name_collect"> Collection Company Address</div> <div style={{width:"20px"}}>:</div>
                <TextArea
                  className="text_area_c"
                  //   data={type}
                />
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </div>
  );
};

export default Collections;
