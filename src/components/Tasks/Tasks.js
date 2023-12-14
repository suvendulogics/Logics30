import React, { useState } from "react";
import "../../styles/Tasks.css";
import {
  faCalendarPlus,
  faClock,
  faList,
  faCaretDown,
  faClose,
  faWindowMaximize,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import TaskResp from "./TaskResp";
import { DatePicker, TimePicker } from "@progress/kendo-react-dateinputs";
import assignData from "./AssignData";
import RemainingUsersList from "./RemainingList";

const CustomAssignedToCell = (props) => {
  const assignedToHTML = props.dataItem.AssignedTo;
  return (
    <td>
      <div
        dangerouslySetInnerHTML={{ __html: assignedToHTML }}
        style={{ fontWeight: "normal", fontSize: "10pt" }}
      />
    </td>
  );
};

const TaskGridTitle = () => (
  <tr style={{ backgroundColor: "#e8e8e8", height: "25px" }}>
    <th className="title_row"></th>
    <th className="title_row"></th>
    <th className="title_row">Task Number</th>
    <th className="title_row">Task Type</th>
    <th className="title_row">Due Date Description</th>
    <th className="title_row">Due Date</th>
    <th className="title_row">Assigned To</th>
    <th className="title_row">Created By</th>
  </tr>
);

const TaskGridRow = ({ task }) => (
  <tr style={{ border: "1px solid #cccccc", backgroundColor: "#FFFFC6" }}>
    <td className="task_grid_row">{task.TaskID}</td>
    <td className="task_grid_row">{task.TaskType}</td>
    <td className="task_grid_row">{task.DueDateDescription}</td>
    <td className="task_grid_row">{task.DueDate}</td>
    <CustomAssignedToCell dataItem={task} />
    <td className="task_grid_row">{task.CreatedBy}</td>
  </tr>
);

const NewTaskPopup = ({ onClose }) => {
  const [priority, setPriority] = useState("Normal");
  const [subject, setSubject] = useState("");
  const [assignedTo, setAssignedTo] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [comments, setComments] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const handleSave = () => {
    console.log("Saving task:", {
      priority,
      subject,
      assignedTo,
      dueDate,
      comments,
    });
    onClose();
  };

  return (
    <div className="popup" id="taskpopup">
      <div className="popup-content_task">
        <div className="header_task">
          <div className="task_title"> Task</div>
          <div className="icons_div">
            <FontAwesomeIcon
              icon={faWindowMaximize}
              className="maximize"
              style={{
                color: "#428BCA",
                marginRight: "12px",
                fontSize: "12px",
              }}
            />
            <FontAwesomeIcon
              icon={faClose}
              className="close"
              onClick={onClose}
              style={{ color: "#428BCA", fontSize: "14px" }}
            />
          </div>
        </div>

        <div
          className="priority_div"
          onClick={toggleDropdown}
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontFamily: "tahoma",
              fontSize: "12px",
              fontWeight: "500",
            }}
            className="priority_text"
          >
            Priority
          </div>
          <FontAwesomeIcon
            icon={faCircle}
            style={{ color: "green", fontSize: "8px", marginLeft: "5px" }}
          />
          <div className="dropdwon_cont">Normal</div>
        </div>
        {isDropdownOpen && (
          <div className="dropdownmob_">
            <div className="pro_detailsmob_">
              <div className="dropdown_items">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#63b464", fontSize: "10px" }}
                />
                <div className="dropdwon_cont"> Normal</div>
              </div>
              <div className="dropdown_items">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#468BC7", fontSize: "10px" }}
                />
                <div className="dropdwon_cont"> Medium</div>
              </div>
              <div className="dropdown_items">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#bb84ec", fontSize: "10px" }}
                />
                <div className="dropdwon_cont"> High</div>
              </div>
              <div className="dropdown_items">
                <FontAwesomeIcon
                  icon={faCircle}
                  style={{ color: "#ed3533", fontSize: "10px" }}
                />
                <div className="dropdwon_cont"> Urgent</div>
              </div>
            </div>
          </div>
        )}

        <br />
        <div className="icons_div">
          <div className="task_conts"> Subject:</div>
          <input
            className="task_inp"
            placeholder="Enter a subject(Required)"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>

        <div className="icons_div">
          <div className="task_conts"> Assigned To:</div>
          <input
            placeholder="Select a user(Required)"
            className="task_inp"
            type="text"
            value={assignedTo}
            onChange={(e) => setAssignedTo(e.target.value)}
          />
        </div>

        <div className="icons_div">
          <div className="task_conts"> Due Date:</div>
          <DatePicker
            type="text"
            width={"200px"}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <div className="task_conts_r"> Reminder:</div>
          <DatePicker
            type="text"
            style={{ height: "20px" }}
            width={"185px"}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <div style={{ width: "10px" }}></div>
          <TimePicker width={"120px"} style={{ marginLeft: "10px" }} />
        </div>

        <div
          className="comments_task"
          style={{ marginTop: "11px", marginBottom: "5px" }}
        >
          <div id="commenttabstrip">
            <div className="comment_title">
              <div className="text_cmnt">Add your comment</div>
            </div>

            <div id="comment" style={{ display: "block" }}>
              <textarea
                value={comments}
                onChange={(e) => setComments(e.target.value)}
                id="txtComments"
                placeholder="Add your comment"
                className="comment_task "
              ></textarea>
            </div>
          </div>
        </div>

        <div className="btn_align">
          <button onClick={onClose} className="cancel_task">
            Cancel
          </button>
          <button onClick={handleSave} className="cancel_task">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const SelectedUserItem = ({ user, onRemove }) => (
  <div className="selected-user-item">
    <span>{user.UserName}</span>
    <FontAwesomeIcon
      icon={faClose}
      className="close"
      onClick={() => onRemove(user.UserID)}
    />
  </div>
);
const SelectedUserItema = ({ user, onRemove }) => (
  <div className="individual_select">
    <div className="selected_txt">{user.UserName}</div>
    <FontAwesomeIcon
      icon={faClose}
      className="close_selected"
      onClick={() => onRemove(user.UserID)}
    />
  </div>
);
const MAX_DISPLAYED_USERS = 4;
const NewEventPopup = ({ onCloseEvent }) => {
  const [priorityEvent, setPriorityEvent] = useState("Normal");
  const [subjectEvent, setSubjectEvent] = useState("");
  const [assignedToEvent, setAssignedToEvent] = useState("");
  const [dueDateEvent, setDueDateEvent] = useState("");
  const [commentsEvent, setCommentsEvent] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpena, setIsDropdownOpena] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdowna = () => {
    setIsDropdownOpena(!isDropdownOpena);
  };
  const handleSaveEvent = () => {
    onCloseEvent();
  };

  const assignees = assignData.Assignees;
  const handleCheckboxChange = (userId) => {
    const isSelected = assignedToEvent.includes(userId);

    if (isSelected) {
      setAssignedToEvent((prev) => prev.filter((id) => id !== userId));
    } else {
      setAssignedToEvent((prev) => [...prev, userId]);
    }
  };
  const getSelectedUserNames = () => {
    const selectedUsers = assignData.Assignees.filter((user) =>
      assignedToEvent.includes(user.UserID)
    );

    const selectedUserNames = selectedUsers.map((user) => user.UserName);

    return selectedUserNames.join(", ");
  };
  const handleRemoveUser = (userId) => {
    setAssignedToEvent((prevUsers) =>
      prevUsers.filter((user) => user !== userId)
    );
  };

  return (
    <div className="popup" id="eventpopup">
      <div className="popup-content_task">
        <div className="header_task">
          <div className="task_title"> Event</div>
          <div className="icons_div">
            <FontAwesomeIcon
              icon={faWindowMaximize}
              className="maximize"
              style={{
                color: "#428BCA",
                marginRight: "12px",
                fontSize: "12px",
              }}
            />
            <FontAwesomeIcon
              icon={faClose}
              className="close"
              onClick={onCloseEvent}
              style={{ color: "#428BCA", fontSize: "14px" }}
            />
          </div>
        </div>

        <div className="custom_lines"></div>
        <div className="icons_div">
          <div className="task_conts"> Subject:</div>
          <input
            className="task_inp"
            placeholder="Enter a subject(Required)"
            type="text"
            value={subjectEvent}
            onChange={(e) => setSubjectEvent(e.target.value)}
          />
        </div>
        <div className="icons_div">
          <div className="task_conts"> Attendees:</div>
          <div className="dropdown-containera" onClick={toggleDropdowna}>
            <div className="task_inpa">
              <div className="selected-users-container">
                {Array.isArray(assignedToEvent) &&
                  assignedToEvent
                    .slice(0, MAX_DISPLAYED_USERS)
                    .map((userId) => (
                      <SelectedUserItema
                        className="individual_select"
                        key={userId}
                        user={assignData.Assignees.find(
                          (user) => user.UserID === userId
                        )}
                        onRemove={handleRemoveUser}
                      />
                    ))}

                {assignedToEvent.length > MAX_DISPLAYED_USERS && (
                  <div className="more-users-summary" onClick={toggleDropdowna}>
                    {`+ ${assignedToEvent.length - MAX_DISPLAYED_USERS} more`}
                  </div>
                )}
              </div>
            </div>

            {isDropdownOpena && (
              <div className="dropdownmob_a">
                {assignData.Assignees.map((user) => (
                  <div className="checkbox-item" key={user.UserID}>
                    <input
                      type="checkbox"
                      className="checkbox_multi"
                      id={user.UserID}
                      checked={assignedToEvent.includes(user.UserID)}
                      onChange={() => handleCheckboxChange(user.UserID)}
                    />
                    <div className="text_multi" htmlFor={user.UserID}>
                      {user.UserName}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="icons_div">
          <div className="task_conts"> Start Time:</div>
          <DatePicker
            type="text"
            className="datepick"
            value={dueDateEvent}
            onChange={(e) => setDueDateEvent(e.target.value)}
          />
          <TimePicker className="timepick" style={{ marginLeft: "10px" }} />
          <div className="check_event">
            <input
              name="defaultSwitch"
              type="checkbox"
              id="defaultSwitch"
              onClick="setDefaultPage();"
            />
            <label
              style={{
                font: "normal 11px tahoma",
                marginTop: "8px",
                color: "#333",
              }}
            >
              All day event
            </label>
          </div>
        </div>
        <div className="icons_div">
          <div className="task_conts"> End Time:</div>
          <DatePicker
            type="text"
            className="datepick"
            value={dueDateEvent}
            onChange={(e) => setDueDateEvent(e.target.value)}
          />

          <TimePicker className="timepick" />
          <div
            onClick={toggleDropdown}
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <div
              style={{
                fontFamily: "tahoma",
                fontSize: "11px",
                fontWeight: "500",
                color: "#333",
                marginLeft: "10px",
                marginRight: "5px",
              }}
            >
              Reminder
            </div>

            <div className="event_reminder">30 minutes before</div>
          </div>
          {isDropdownOpen && (
            <div className="dropdownmob_e">
              <div className="pro_detailsmob_e">
                <div className="dropdown_itemse dropdwon_conte">None</div>
                <div className="dropdown_itemse dropdwon_conte">
                  30 minutes before
                </div>
                <div className="dropdown_itemse dropdwon_conte">
                  1 hour before
                </div>
                <div className="dropdown_itemse dropdwon_conte">
                  2 hours before
                </div>
                <div className="dropdown_itemse dropdwon_conte">
                  4 hours before
                </div>
                <div className="dropdown_itemse dropdwon_conte">1 before</div>
              </div>
            </div>
          )}
        </div>

        <div
          className="comments_task"
          style={{ marginTop: "11px", marginBottom: "15px" }}
        >
          <div id="commenttabstrip">
            <div className="comment_title">
              <div className="text_cmnt ">Add your comment</div>
            </div>

            <div id="comment" style={{ display: "block" }}>
              <textarea
                value={commentsEvent}
                onChange={(e) => setCommentsEvent(e.target.value)}
                id="txtComments"
                placeholder="Add your comment"
                className="comment_task "
              ></textarea>
            </div>
          </div>
        </div>

        <div className="btn_align">
          <button onClick={onCloseEvent} className="cancel_task">
            Cancel
          </button>
          <button onClick={handleSaveEvent} className="cancel_task">
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

const Tasks = () => {
  const [showTaskGrid, setShowTaskGrid] = useState(true);
  const [showEventGrid, setShowEventGrid] = useState(true);
  const [showNewTaskPopup, setShowNewTaskPopup] = useState(false);
  const [showNewEventPopup, setShowNewEventPopup] = useState(false);
  const toggleTaskGrid = () => setShowTaskGrid(!showTaskGrid);
  const toggleEventGrid = () => setShowEventGrid(!showEventGrid);
  const [groupBy, setGroupBy] = useState("none");
  const handleRowClick = () => {
    setShowTaskGrid(!showTaskGrid);
    setShowEventGrid(!showEventGrid);
  };

  const handleNewTaskClick = () => {
    setShowNewTaskPopup(true);
  };
  const handleNewEventClick = () => {
    setShowNewEventPopup(true);
  };
  const handleNewTaskPopupClose = () => {
    setShowNewTaskPopup(false);
  };
  const handleNewEventPopupClose = () => {
    setShowNewEventPopup(false);
  };

  // const taskEvents = TaskResp.Data.filter((task) => task.TaskType === "Event");
  // const taskOtherTypes = TaskResp.Data.filter(
  //   (task) => task.TaskType !== "Event"
  // );
  const handleGroupByChange = (value) => {
    setGroupBy(value);
    setShowTaskGrid(value === "none" || value === "type");
    setShowEventGrid(value === "none" || value === "type");
  };

  const taskEvents = TaskResp.Data.filter((task) => task.TaskType === "Event");
  const taskOtherTypes = TaskResp.Data.filter((task) => task.TaskType !== "Event");

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "row", marginTop: "10px" }}>
        <div>
          <button onClick={handleNewTaskClick} className="task_btns">
            <FontAwesomeIcon
              icon={faCalendarPlus}
              style={{ marginRight: "3px", marginLeft: "3px" }}
            />
            New Task
          </button>
        </div>
        <div className="custom-linest" />
        <div>
          <button className="task_btns" onClick={handleNewEventClick}>
            <FontAwesomeIcon
              icon={faClock}
              style={{ marginRight: "3px", marginLeft: "3px" }}
            />
            New Event
          </button>
        </div>
        <div className="custom-linest" />
        <div>
          <button className="task_btns" >
            <FontAwesomeIcon
              icon={faList}
              style={{ marginRight: "3px", marginLeft: "3px" }}
            />
            Group By
            <FontAwesomeIcon
              icon={faCaretDown}
              style={{ marginRight: "3px", marginLeft: "3px" }}
            />
          </button>
     
        </div>
      </div>
    
      <div style={{ marginTop: "3px" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <TaskGridTitle />
          </thead>
        </table>

        <div
          onClick={toggleEventGrid}
          style={{
            cursor: "pointer",
            color: "#3764a0",
            fontSize: "13px",
            marginLeft: "10px",
          }}
        >
          <FontAwesomeIcon icon={faCaretDown} style={{ marginRight: "5px" }} />
          Event ( {taskEvents.length} Item)
        </div>
        {showEventGrid && (
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              {taskEvents.map((event) => (
                <TaskGridRow key={event.TaskID} task={event} />
              ))}
            </tbody>
          </table>
        )}

        <div
          onClick={toggleTaskGrid}
          style={{
            cursor: "pointer",
            color: "#3764a0",
            fontSize: "13px",
            marginLeft: "10px",
          }}
        >
          <FontAwesomeIcon icon={faCaretDown} style={{ marginRight: "5px" }} />{" "}
          Task ({taskOtherTypes.length} item)
        </div>
        {showTaskGrid && (
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <tbody>
              {taskOtherTypes.map((task) => (
                <TaskGridRow key={task.TaskID} task={task} />
              ))}
            </tbody>
          </table>
        )}
      </div>

      {showNewTaskPopup && <NewTaskPopup onClose={handleNewTaskPopupClose} />}
      {showNewEventPopup && (
        <NewEventPopup onCloseEvent={handleNewEventPopupClose} />
      )}





    </div>
  );
};

export default Tasks;
