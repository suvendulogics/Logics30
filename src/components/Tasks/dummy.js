// import React from "react"
// const Tasks=()=>{

// return(

// <div id="TabTaskgrid" style={{border: "none", height: "721px"}} data-role="grid" className="k-grid k-widget k-grid-display-block no-scrollbar">
// <div className="k-grid-header" style={{paddingRight: "0px"}}>
// <div className="k-grid-header-wrap k-auto-scrollable" data-role="resizable">
// <table role="grid">
//     <colgroup>
//     <col className="k-group-col"/>
//         <col style={{width:"4%"}}/>
// <col style={{width:"5%"}}/>
//     <col style={{width:"5%"}}/>
//         <col style={{width:"7%"}}/>
// <col style={{width:"45%"}}/>
//     <col style={{width:"14%"}}/>
// <col style={{width:"11%"}}/>
//     <col style={{width:"9%"}}/>
// </colgroup>
// <thead role="rowgroup">
//     <tr role="row">
// <th className="k-group-cell k-header" scope="col">
// </th>
// <th scope="col" role="columnheader" data-field="StatusID" aria-haspopup="true" rowspan="1" data-title=" " data-index="0" id="a07e4d48-a531-4aef-bca6-dc784d869d1f" className="k-header" data-role="columnsorter">
// <a className="k-link" href="#"/>
// </th>
// <th scope="col" role="columnheader" data-field="PriorityID" aria-haspopup="true" rowspan="1" data-title="PR" data-index="1" id="b1ad38c4-67ca-4ec7-8aa2-c4c501dc4138" className="k-header" data-role="columnsorter">
// <a className="k-link" href="#">PR</a></th><th scope="col" role="columnheader" data-field="TaskType" aria-haspopup="true" rowspan="1" data-title="Type" data-index="2" id="abc39fb4-6a13-44f3-af8a-66c6923d0f8e" className="k-header" data-role="columnsorter"><a className="k-link" href="#">Type</a></th>
// <th scope="col" role="columnheader" data-field="DueDateDescription" aria-haspopup="true" rowspan="1" data-title="Due" data-index="3" id="b11f831c-ff6d-42f8-8cf7-305dc8e8dbdf" className="k-header k-sorted" data-role="columnsorter" data-dir="asc" aria-sort="ascending">
// <a className="k-link" href="#">Due<span className="k-icon k-i-sort-asc-sm"></span>
// </a></th><th scope="col" role="columnheader" data-field="Subject" aria-haspopup="true" rowspan="1" data-title="Subject" data-index="4" id="c2db33ef-4e8e-4fcf-b298-ecc0168a7de6" className="k-header" data-role="columnsorter">
// <a className="k-link" href="#">Subject</a></th>
// <th scope="col" role="columnheader" data-field="DueDate" aria-haspopup="true" rowspan="1" data-title="Date" data-index="5" id="bbb61a2f-247c-4c26-ba08-a7f51a1388dc" className="k-header" data-role="columnsorter">
// <a className="k-link" href="#">Date</a></th>
// <th scope="col" role="columnheader" data-field="AssignedTo" aria-haspopup="true" rowspan="1" data-title="Assigned To" data-index="6" id="cb421c0c-6063-438a-a709-67ff745f2454" className="k-header" data-role="columnsorter">
// <a className="k-link" href="#">Assigned To</a></th>
// <th scope="col" role="columnheader" data-field="colCreatedBy" aria-haspopup="true" rowspan="1" data-title="Created By" data-index="7" id="d32ea6d3-f368-401b-98b6-4b74b9bab4a5" className="k-header" data-role="columnsorter"><a className="k-link" href="#">Created By</a></th></tr></thead>
// </table>
// <div className="k-resize-handle" style={{top: "0px", left: "528.547px", height: "21px", width: "9px"}}>
//     <div className="k-resize-handle-inner">
//         </div>
//         </div>
//     </div>
// </div><div className="k-grid-content k-auto-scrollable" style={{height: "680px"}}>
// <table role="grid" style={{height: "auto"}}><colgroup>
// <col className="k-group-col"/>
// <col style={{width:"4%"}}/>
//     <col style={{width:"5%"}}/><col style={{width:"5%"}}/>
// <col style={{width:"7%"}} className="k-sorted"/><col style={{width:"45%"}}/>
// <col style={{width:"14%"}}/><col style={{width:"11%"}}/><col style={{width:"9%"}}/>
// </colgroup><tbody role="rowgroup"><tr role="row" className="k-grouping-row">
// <td colspan="9" aria-expanded="true"><p className="k-reset">
// <a className="k-icon k-i-collapse" href="#" tabindex="-1" aria-label="Collapse"></a>Event(1 Item)</p>
// </td></tr><tr className="k-master-row notcompleted  assignedToMe " data-uid="c417095e-ed34-4eba-a0db-7320b5a17793" role="row"><td className="k-group-cell">&nbsp;</td>
// <td className="" role="gridcell"><img unselectable="on" src="../Images/bulletWhite.png"/></td><td className="" role="gridcell">
// <span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>NOR</span>
// </td><td className="" role="gridcell"><span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>Event</span></td><td className="" role="gridcell">
// <span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>  Next Week</span></td><td className="" role="gridcell">test event</td><td className="" role="gridcell">11/29/23 <span style={{color:"gray",fontSize:"7pt"}}>07:30 AM</span> - 12/05/23 <span style={{color:"gray",fontSize:"7pt"}}>08:30 AM</span></td><td className="" role="gridcell">
//     <span style={{fontWeight:"bold",fontSize:"10pt"}}>Me</span></td><td className="" role="gridcell">Me</td>
// </tr><tr role="row" className="k-grouping-row"><td colspan="9" aria-expanded="true">
//     <p className="k-reset"><a className="k-icon k-i-collapse" href="#" tabindex="-1" aria-label="Collapse"></a>Task(2 Items)</p></td></tr><tr className="k-master-row notcompleted  assignedToMe " data-uid="ebf316a9-4de5-4ff1-862b-3a93f95279a4" role="row">
//         <td className="k-group-cell">&nbsp;</td><td className="" role="gridcell"><img unselectable="on" src="../Images/bulletWhite.png"/></td><td className="" role="gridcell"><span style={{backgroundColor:"green",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>NOR</span></td><td className="" role="gridcell">
//         <span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>Task</span>
//         </td><td className="" role="gridcell">
            
//             <span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>  This Week</span>
//             </td><td className="" role="gridcell">test</td><td className="" role="gridcell">11/26/23</td><td className="" role="gridcell"><span style={{fontWeight:"bold",fontSize:"10pt"}}>Me</span></td><td className="" role="gridcell">Me</td></tr><tr className="k-alt k-master-row notcompleted  assignedToMe " data-uid="da192569-44de-4462-aa7a-0752652a55f1" role="row"><td className="k-group-cell">&nbsp;</td><td className="" role="gridcell">
//                 <img unselectable="on" src="../Images/bulletWhite.png"/></td><td className="" role="gridcell"><span style={{backgroundColor:"green",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>NOR</span></td><td className="" role="gridcell">
//                     <span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>Task</span></td><td className="" role="gridcell"><span style={{backgroundColor:"gray",color:"white",paddingRight:"2px",paddingLeft:"2px"}}>  Next Week</span></td><td className="" role="gridcell">test 2</td><td className="" role="gridcell">11/30/23</td>
//                 <td className="" role="gridcell"><span style={{fontWeight:"bold",fontSize:"10pt"}}>Me</span>
//                 </td><td className="" role="gridcell">Me</td></tr></tbody>
//                 </table>
//                 </div></div>


// )
// }
// export default Tasks;


  
  

  
  

  
  
  





















// ... (imports and other components)

const Tasks = () => {
    const [showTaskGrid, setShowTaskGrid] = useState(true);
    const [showEventGrid, setShowEventGrid] = useState(true);
    const [showNewTaskPopup, setShowNewTaskPopup] = useState(false);
    const [showNewEventPopup, setShowNewEventPopup] = useState(false);
    const [groupBy, setGroupBy] = useState("none");
  
    const toggleTaskGrid = () => setShowTaskGrid(!showTaskGrid);
    const toggleEventGrid = () => setShowEventGrid(!showEventGrid);
  
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
              {/* ... */}
            </button>
          </div>
          <div className="custom-linest" />
          <div>
            <button className="task_btns" onClick={handleNewEventClick}>
              {/* ... */}
            </button>
          </div>
          <div className="custom-linest" />
          <div>
            <div className="group-by-container">
              <span>Group By</span>
              <select
                value={groupBy}
                onChange={(e) => handleGroupByChange(e.target.value)}
              >
                <option value="none">None</option>
                <option value="type">Type</option>
              </select>
            </div>
          </div>
        </div>
  
        <div style={{ marginTop: "3px" }}>
          {/* ... (rest of the code) */}
        </div>
  
        {showNewTaskPopup && <NewTaskPopup onClose={handleNewTaskPopupClose} />}
        {showNewEventPopup && (
          <NewEventPopup onCloseEvent={handleNewEventPopupClose} />
        )}
      </div>
    );
  };
  
  export default Tasks;
  


  
