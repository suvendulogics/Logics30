import React from "react";
import {
 faTimes
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import assignData from "./AssignData";
  import './Remain.css';
// const RemainingUsersList = ({ users, onCloseUser }) => (
//     <div className="remaining-users-list">
//       {users.map((userId) => (
//         <div key={userId} className="remaining-user-item">
//           {assignData.Assignees.find((user) => user.UserID === userId)?.UserName}
//           <FontAwesomeIcon
//             icon={faTimes}
//             className="close-icon"
//             onClick={() => onCloseUser(userId)}
//           />
//         </div>
//       ))}
//     </div>



const RemainingUsersList = ({ users, onCloseUser }) => {
    return (
      <div className="remaining-users-list">
        <div className="remaining-users-title">Additional Users:</div>
        <div className="remaining-users-container">
          {users.map((user) => (
            <div key={user.UserID} className="remaining-user-item">
              {user.UserName}
              <FontAwesomeIcon
                icon={faTimes}
                className="remove-user-icon"
                onClick={() => onCloseUser(user)}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };
  

  export default RemainingUsersList;
  