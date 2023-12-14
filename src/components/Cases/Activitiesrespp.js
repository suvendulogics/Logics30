import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faMoneyBill, faTasks } from "@fortawesome/free-solid-svg-icons";
import uploadedResp from "./UploadedResp";
import "./ActivityList.css"; // Import your CSS file for styling

const formatDate = (dateString) => {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

const getTypeIcon = (typeName) => {
  switch (typeName) {
    case "New File Uploaded":
      return faFileAlt;
    case "Payment":
      return faMoneyBill;
    default:
      return faTasks; 
  }
};

const getSubjectInitials = (subject) => {
  const words = subject.split(" ");
  return words.slice(0, 2).map(word => word[0]).join("").toUpperCase();
};

const renderRows = () => {
  return uploadedResp.Data.map((activity) => (
    <div key={activity.ActivityID} className="activity-row">
           <div className="subject-initials">
        {getSubjectInitials(activity.Subject)}
      </div>
      <div className="date">{formatDate(activity.CreatedDate)}</div>
      <div className="custom-lines2"/>
      {/* <div className="icon">
        <FontAwesomeIcon icon={getTypeIcon(activity.TypeName)} />
      </div> */}
   
      <div className="comment">{activity.Comment}</div>
    </div>
  ));
};

const ActivityList = () => {
  return (
    <div className="activity-list-container" >
      {renderRows()}
    </div>
  );
};

export default ActivityList;
