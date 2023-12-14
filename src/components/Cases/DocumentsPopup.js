import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import "../../styles/Documents.css";

const DocumentsPopup = ({ onYesClick, onNoClick }) => {
  return (
    <div className="popup_documents">
      <div className="pop_cont_doc">
        <FontAwesomeIcon icon={faClose}  className="close_doc"/>
        <div style={{ display: "flex", flexDirection: "row"}}>
          <FontAwesomeIcon icon={faQuestionCircle}  className="quest_doc"/>
          <div className="text_pop">
            In order to view this tab the case needs to be saved. Do you want to
            save this case?
          </div>
        </div>
        <div className="doc_btn_div">
        <button onClick={onYesClick} className="yes_doc">Yes</button>
        <button onClick={onNoClick} className="no_doc">No</button>
        </div>
        
      </div>
    </div>
  );
};

export default DocumentsPopup;
