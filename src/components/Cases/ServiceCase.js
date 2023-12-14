import React, { useState, useEffect, useRef } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Input,
  TextArea,
  Checkbox,
  MaskedTextBox,
} from "@progress/kendo-react-inputs";

  import "@progress/kendo-theme-default/dist/all.css";
  import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
  import "@progress/kendo-theme-default/dist/all.css";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@progress/kendo-react-buttons";
import "../../styles/TaxAutho.css";

const SeviceCase = () => {

      
  return (


    <div>
      <div
      className="main_div_cont"
     
      >
        <div className="main_heading">Service Information </div>
        <div className="custom-lines"></div>
     
        <div className="alignment alignment_cont">
          <div className="label_name_req"> Federal/IRS Status</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
        <div className="alignment alignment_cont">
          <div className="label_name_req">State Status</div>
          <div style={{width:"20px"}}>:</div>
          <DropDownList className="drpodown_list_req" />
        </div>
      
      
    
     






      </div>
    </div>
  );
};

export default SeviceCase;











