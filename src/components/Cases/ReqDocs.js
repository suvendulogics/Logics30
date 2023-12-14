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
import "../../styles/ReqDocs.css";

const ReqDocs = () => {
  return (
    <div>
      <div
      className="main_div_cont"
      >
        <div className="main_heading">Required Documents</div>
        <div className="custom-lines"></div>
        <div className="alignment alignment_cont">
          <div className="label_name_req"> Financial Analysis</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Income Documents</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Bank Statements</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Housing Rent</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Housing Mortgage</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Housing Utility</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Housing Phone</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Medical</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Child/Dependent Care</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Term Life Insurance</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Retirement</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Court Orders</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">Estimated Tax Payments</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input  className="reqdoc_inp" placeholder="Other 1"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 2"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 3"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 4"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 5"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 6"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 7"/>
            <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_req">
            <Input className="reqdoc_inp" placeholder="Other 8"/>
            <div style={{width:"20px"}}>:</div>
        
          <DropDownList className="drpodown_list_req" />
        </div>






        {/* <div className="alignment alignment_cont">
          <div className="label_name_req"> Notes:</div>
          <TextArea
            className="text_area"
            //   data={type}
          />
        </div> */}
      </div>
    </div>
  );
};

export default ReqDocs;
