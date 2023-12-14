import React, { useState, useEffect, useRef } from "react";
import { Splitter } from "@progress/kendo-react-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCaretDown,
  faSearch,
  faStickyNote,
  faArrowRight,
  faAngleDoubleLeft,
  faStar,
  faFilterList,
  faSortAmountDown,
  faAngleDoubleRight,
  faSort,
  faFilter,
  faPrint,
  faArrowLeft,
  faInfoCircle,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import "../../styles/Activities.css";
import response from "./FilterByData.js";
import ActivityList from "./Activitiesrespp";
import SidebarList from "./SidebarList";

const Header = ({ onCollapseToggle }) => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showNewPopup, setShowNewPopup] = useState(false);
  const [showSearchPopup, setShowSearchPopup] = useState(false);
  const [showDropdownsort, setShowDropdownsort] = useState(false);
  const [isActivityCollapsed, setIsActivityCollapsed] = useState(false);
  const [showDropdownfilter, setShowDropdownfilter] = useState(false);
  const [selectedType, setSelectedType] = useState(null);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleFilterClick = () => {
    setShowDropdownfilter(!showDropdownfilter);
  };

  const handleTypeSelect = (type) => {
    setSelectedType(type);
    setShowDropdownfilter(false);
  };
  const handleDropdownClick = () => {
    setShowDropdown(!showDropdown);
  };
  const handleDropdownClicksort = () => {
    setShowDropdownsort(!showDropdownsort);
  };
  const handleNewClick = () => {
    setShowNewPopup(true);
  };

  const handleSearchClick = () => {
    setShowSearchPopup(true);
  };

  const dropdownData = [
    "Default",
    "Last Entered",
    "First Entered",
    "User",
    "Type",
  ];
  const dropdownDatasort = [
    "Sort by Last Entered",
    "Sort by First Entered",
    "Sort by User",
    "Sort by Type",
  ];
  const handleDropdownOutsideClick = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setShowDropdown(false);
    }
  };

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleDropdownOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleDropdownOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleDropdownOutsideClick);
    };
  }, [showDropdown]);

  const handleActivityClick = () => {
    onCollapseToggle(!isActivityCollapsed);
  };

  return (
    <div>
      {windowWidth >= 768 ? (
        <div className={`activities ${isActivityCollapsed ? "collapsed" : ""}`}>
          <div className="header-title" style={{ position: "fixed" }}>
            <div className="header_section">
              <div className="header-view">
                <FontAwesomeIcon icon={faStar} className="star_icon" />
                <div className="activities_heading">Activities</div>
              </div>
              <div
                className="arrow_div"
                onClick={handleActivityClick}
                style={{ position: "absolute", marginLeft: "10.5%" }}
              >
                <FontAwesomeIcon
                  icon={
                    isActivityCollapsed ? faAngleDoubleLeft : faAngleDoubleRight
                  }
                  className="arrow_icon"
                />
                {/* <FontAwesomeIcon
                  icon={
                    isActivityCollapsed ? faAngleDoubleLeft : faAngleDoubleRight
                  }
                  className={isActivityCollapsed ? "arrow_icon" : "arrow_right"}
                /> */}
              </div>
            </div>
          </div>
          <div
            className={`header-view_new ${
              isActivityCollapsed ? "collapsed" : ""
            }`}
            style={{ position: "fixed", marginTop: "35px" }}
          >
            <div style={{ display: "flex" }}>
              <div className="header-new" onClick={handleNewClick}>
                <FontAwesomeIcon icon={faPlus} />
                <div className="new_text">New</div>
              </div>
              {showNewPopup && (
                <div className="popups">
                  <div className="pops">
                    <div
                      style={{ height: "15px", backgroundColor: "#d0ddf0" }}
                    ></div>
                    <div
                      style={{
                        margin: "10px",
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <FontAwesomeIcon
                        icon={faInfoCircle}
                        style={{
                          height: "30px",
                          marginRight: "20px",
                          color: "rgb(82 139 221)",
                        }}
                      />
                      <div>
                        <div className="pop_cont">
                          In order to create a new activity, this case needs to
                          be saved. Do you want to save this case?
                        </div>
                        <div className="pop_btns">
                          <button
                            onClick={() => setShowNewPopup(false)}
                            className="ok_btns"
                          >
                            OK
                          </button>
                          <button
                            onClick={() => setShowNewPopup(false)}
                            className="cancel_btns"
                          >
                            Cancel
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div onClick={handleDropdownClick} className="dropdown-toggle">
                <FontAwesomeIcon icon={faCaretDown} />
                <div className="new_text">View</div>
              </div>
              {showDropdown && (
                <div className="dropdown_act" ref={dropdownRef}>
                  {dropdownData.map((item, index) => (
                    <div
                      key={index}
                      className="dropdown-item"
                      onClick={() => setShowDropdown(false)}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="header-open">
              <FontAwesomeIcon
                icon={faSearch}
                className="faSearch"
                onClick={handleSearchClick}
              />
              <div className="new_text" onClick={handleSearchClick}>
                Open large
              </div>
            </div>

            {showSearchPopup && (
              <div className="popups_open">
                <div className="pops_open">
                  <div className="act_pop">
                    <div className="act_heading">Activities</div>
                    {/* <button
                  onClick={() => setShowSearchPopup(false)}
                  className="close_x"
                >
                  x
                </button> */}
                    <FontAwesomeIcon
                      icon={faClose}
                      className="close_xpop"
                      onClick={() => setShowSearchPopup(false)}
                    />
                  </div>

                  <div>
                    <div className="pop_sec_row">
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          className="sec_cont_pop"
                          style={{ width: "130px" }}
                        >
                          <input
                            type="text"
                            placeholder="Type to Search"
                            className="search_pop"
                          />
                        </div>

                        <div
                          className="sec_cont"
                          style={{ marginLeft: "30px" }}
                        >
                          {" "}
                          <FontAwesomeIcon icon={faClose} className="clear_x" />
                          <div style={{ marginLeft: "2px", fontWeight: "500" }}>
                            Clear
                          </div>
                        </div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "flex-start",
                        }}
                      >
                        <div
                          className="sec_cont"
                          style={{ marginLeft: "30px", marginRight: "5px" }}
                        >
                          <FontAwesomeIcon icon={faSortAmountDown} />
                          <div
                            style={{ marginLeft: "5px", fontWeight: "500" }}
                            onClick={handleDropdownClicksort}
                          >
                            Sort by <FontAwesomeIcon icon={faCaretDown} />
                          </div>

                          {showDropdownsort && (
                            <div className="dropdown_actpop" ref={dropdownRef}>
                              {dropdownDatasort.map((item, index) => (
                                <div
                                  key={index}
                                  className="dropdown-itempop"
                                  onClick={() => setShowDropdownsort(false)}
                                >
                                  {item}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="custom-liness2"></div>

                        <div>
                          <div
                            className="sec_cont"
                            onClick={handleFilterClick}
                            style={{ marginLeft: "30px" }}
                          >
                            <div style={{ fontWeight: "500" }}>
                              Filter by Type
                            </div>
                            <FontAwesomeIcon
                              icon={faCaretDown}
                              style={{ marginLeft: "5px", marginRight: "10px" }}
                            />
                          </div>
                          {showDropdownfilter && (
                            <div className="dropdown_filters">
                              {response.map((item) => (
                                <div
                                  key={item.id}
                                  className={`dropdown-itemfilter ${
                                    item.text === selectedType ? "selected" : ""
                                  }`}
                                  onClick={() => handleTypeSelect(item.text)}
                                >
                                  {item.text}
                                </div>
                              ))}
                            </div>
                          )}
                          <div>
                            {selectedType && (
                              <div style={{ display: "none" }}>
                                {" "}
                                {selectedType}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ overflow: "auto", height: "348px" }}>
                    <ActivityList />
                  </div>
                  <div className="print_section">
                    <div className="print_btn">Print</div>
                    <div
                      onClick={() => setShowSearchPopup(false)}
                      className="ok_prt_btn"
                    >
                      OK
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <SidebarList />
        </div>
      ) : (
        <div></div>
        // <div
        //   className={`activities_mob ${isActivityCollapsed ? "collapsed" : ""}`}
        // >
        //   <div className="header-title_mob">
        //     <div className="header_section_mob">
        //       <div className="header-view_mob">
        //         <FontAwesomeIcon icon={faStar} className="star_icon" />
        //         <div className="activities_heading?_mob">Activities</div>
        //       </div>
        //       <div className="arrow_div?_mob" onClick={handleActivityClick}>
        //         <FontAwesomeIcon
        //           icon={
        //             isActivityCollapsed ? faAngleDoubleLeft : faAngleDoubleRight
        //           }
        //           className="arrow_icon_mob"
        //         />
        //       </div>
        //     </div>
        //   </div>
        //   <div
        //     className={`header-view_new_mob ${
        //       isActivityCollapsed ? "collapsed" : ""
        //     }`}
        //   >
        //     <div style={{ display: "flex" }}>
        //       <div className="header-new_mob" onClick={handleNewClick}>
        //         <FontAwesomeIcon icon={faPlus} />
        //         <div className="new_text_mob">New</div>
        //       </div>
        //       {showNewPopup && (
        //         <div className="popups_mob">
        //           <div className="pops_mob">
        //             <div
        //               style={{ height: "15px", backgroundColor: "#d0ddf0" }}
        //             ></div>
        //             <div
        //               style={{
        //                 margin: "10px",
        //                 display: "flex",
        //                 flexDirection: "row",
        //               }}
        //             >
        //               <FontAwesomeIcon
        //                 icon={faInfoCircle}
        //                 style={{
        //                   height: "30px",
        //                   marginRight: "20px",
        //                   color: "rgb(82 139 221)",
        //                 }}
        //               />
        //               <div>
        //                 <div className="pop_cont">
        //                   In order to create a new activity, this case needs to
        //                   be saved. Do you want to save this case?
        //                 </div>
        //                 <div className="pop_btns">
        //                   <button
        //                     onClick={() => setShowNewPopup(false)}
        //                     className="ok_btns"
        //                   >
        //                     OK
        //                   </button>
        //                   <button
        //                     onClick={() => setShowNewPopup(false)}
        //                     className="cancel_btns"
        //                   >
        //                     Cancel
        //                   </button>
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //         </div>
        //       )}
        //     </div>
        //     <div style={{ display: "flex", flexDirection: "row" }}>
        //       <div
        //         onClick={handleDropdownClick}
        //         className="dropdown-toggle_mob"
        //       >
        //         <FontAwesomeIcon icon={faCaretDown} />
        //         <div className="new_text_mob">View</div>
        //       </div>
        //       {showDropdown && (
        //         <div className="dropdown_act_mob" ref={dropdownRef}>
        //           {dropdownData.map((item, index) => (
        //             <div
        //               key={index}
        //               className="dropdown-item_mob"
        //               onClick={() => setShowDropdown(false)}
        //             >
        //               {item}
        //             </div>
        //           ))}
        //         </div>
        //       )}
        //     </div>
        //     <div className="header-open_mob">
        //       <FontAwesomeIcon
        //         icon={faSearch}
        //         className="faSearch"
        //         onClick={handleSearchClick}
        //       />
        //       <div className="new_text_mob" onClick={handleSearchClick}>
        //         Open large
        //       </div>
        //     </div>
        //     {showSearchPopup && (
        //       <div className="popups_open_mob">
        //         <div className="pops_open_mob">
        //           <div className="act_pop_mob">
        //             <div className="act_heading_mob">Activities</div>

        //             <FontAwesomeIcon
        //               icon={faClose}
        //               className="close_xpop_mob"
        //               onClick={() => setShowSearchPopup(false)}
        //             />
        //           </div>

        //           <div>
        //             <div className="pop_sec_row_mob">
        //               <div className="sec_cont_mob">
        //                 <input
        //                   type="text"
        //                   placeholder="Type to Search"
        //                   className="search_pop_mob"
        //                 />
        //               </div>

        //               {/* <div className="sec_cont_mob">
        //                 {" "}
        //                 <FontAwesomeIcon icon={faClose} className="clear_x_mob" />
        //                 <div style={{ marginLeft: "5px" }}>Clear</div>
        //               </div> */}
        //               <div className="sec_cont_mob">
        //                 {/* <FontAwesomeIcon icon={faSortAmountDown} /> */}
        //                 <div
        //                   style={{ marginLeft: "5px" }}
        //                   onClick={handleDropdownClicksort}
        //                 >
        //                   Sort by
        //                   <FontAwesomeIcon icon={faCaretDown} />
        //                 </div>

        //                 {showDropdownsort && (
        //                   <div
        //                     className="dropdown_actpop_mob"
        //                     ref={dropdownRef}
        //                   >
        //                     {dropdownDatasort.map((item, index) => (
        //                       <div
        //                         key={index}
        //                         className="dropdown-itempop_mob"
        //                         onClick={() => setShowDropdownsort(false)}
        //                       >
        //                         {item}
        //                       </div>
        //                     ))}
        //                   </div>
        //                 )}
        //               </div>

        //               <div>
        //                 <div
        //                   className="sec_cont_mob"
        //                   onClick={handleFilterClick}
        //                 >
        //                   <div>Filter by Type</div>
        //                   <FontAwesomeIcon
        //                     icon={faCaretDown}
        //                     style={{ marginLeft: "5px", marginRight: "10px" }}
        //                   />
        //                 </div>
        //                 {showDropdownfilter && (
        //                   <div className="dropdown_filters">
        //                     {response.map((item) => (
        //                       <div
        //                         key={item.id}
        //                         className={`dropdown-itemfilter ${
        //                           item.text === selectedType ? "selected" : ""
        //                         }`}
        //                         onClick={() => handleTypeSelect(item.text)}
        //                       >
        //                         {item.text}
        //                       </div>
        //                     ))}
        //                   </div>
        //                 )}
        //                 <div>
        //                   {selectedType && (
        //                     <div style={{ display: "none" }}>
        //                       {" "}
        //                       {selectedType}
        //                     </div>
        //                   )}
        //                 </div>
        //               </div>
        //             </div>
        //           </div>
        //           <div></div>
        //           <div className="print_section">
        //             <div className="print_btn_mob">Print</div>
        //             <div
        //               onClick={() => setShowSearchPopup(false)}
        //               className="ok_prt_btn_mob"
        //             >
        //               OK
        //             </div>
        //           </div>
        //         </div>
        //       </div>
        //     )}
        //   </div>
        // </div>
      )}
    </div>
  );
};

const NotesSection = ({ isCollapsed }) => {
  const [showSearchPopuplarge, setShowSearchPopuplarge] = useState(false);
  const [notes, setNotes] = useState("");
  const handleSearchClicklarge = () => {
    setShowSearchPopuplarge(true);
  };

  const handleNotesChange = (e) => {
    setNotes(e.target.value);
  };
  return (
    <div>
      <div className="custom-liness"></div>
      <div className={`notes-section ${isCollapsed ? "collapsed" : ""}`}>
        <div className="notes-title">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
            className="notess"
          >
            <FontAwesomeIcon icon={faStickyNote} />
            <div className="new_text">Notes</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="notess"
          >
            <FontAwesomeIcon
              icon={faSearch}
              className="faSearch"
              onClick={handleSearchClicklarge}
            />
            <div className="new_text" onClick={handleSearchClicklarge}>
              Open large
            </div>
          </div>
          {showSearchPopuplarge && (
            <div className="popups_open">
              <div className="pops_open">
                <div className="act_pop">
                  <div className="act_heading">Edit Notes</div>
                  <FontAwesomeIcon
                    icon={faClose}
                    className="close_xpop"
                    onClick={() => setShowSearchPopuplarge(false)}
                  />
                </div>
                <div className="notes-editor" style={{ height: "373px" }}>
                  <textarea
                    value={notes}
                    style={{
                      height: "99%",
                      width: "99%",
                      border: "1px solid #9a9a9a",
                    }}
                    onChange={handleNotesChange}
                  />
                </div>
                <div className="print_sectionlarge">
                  <div className="print_btns">Print</div>
                  <div
                    onClick={() => setShowSearchPopuplarge(false)}
                    className="ok_prt_btns"
                  >
                    OK
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div>
        <textarea
          value={notes}
          style={{
            height: "calc(100vh - 50px)",
            width: "99%",
            border: "none",
            resize: "none",
          }}
          onChange={handleNotesChange}
        />
      </div>
    </div>
  );
};
const Activities = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleActivityClickfalse = () => {
    onCollapseToggle(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const [nestedPanes, setNestedPanes] = useState([
    {
      size: isCollapsed ? "50%" : "40%",
      collapsible: true,
    },
    {},
    {
      size: isCollapsed ? "50%" : "70%",
      resizable: false,
      collapsible: true,
    },
  ]);

  const onNestedChange = (event) => {
    setNestedPanes(event.newState);
  };
  const onCollapseToggle = (isRightPanelCollapsed) => {
    setIsCollapsed(!isCollapsed);
    setNestedPanes([
      {
        size: isCollapsed ? "50%" : "40%",
        collapsible: true,
      },
      {},
      {
        size: isCollapsed ? "50%" : "70%",
        resizable: false,
        collapsible: true,
      },
    ]);
  };

  return (
    <div>
        {windowWidth >= 768 ? (
              <div style={{ zIndex: "24", position: "relative", right: "238px" }}>
              {/* <Splitter
                    style={{ height: "100vmin" }}
                    panes={nestedPanes}
                    onChange={onNestedChange}
                  > */}
              {/* <div style={{display:"none",width:"0px"}}></div> */}
              <div
                style={{
                  minHeight: "25px",
                  backgroundColor: "#d0ddf0",
                  // width:"100%",
                  // minWidth:"300px"
                  // marginTop: "-30px",
                }}
              >
                {isCollapsed && (
                  <div>
                    <Splitter
                      style={{ height: "100vh" }}
                      panes={nestedPanes}
                      onChange={(event) => setNestedPanes(event.newState)}
                      orientation={"vertical"}
                    >
                      <Header onCollapseToggle={onCollapseToggle} />
        
                      <NotesSection />
                    </Splitter>
                  </div>
                )}
        
                {!isCollapsed && (
                  <div
                    //  className="arrow_divs"
                    onClick={handleActivityClickfalse}
                    className={isCollapsed ? "arrow_divs" : "arrow_right"}
                  >
                    <div className="arrow_div">
                      {" "}
                      <FontAwesomeIcon
                        icon={!isCollapsed ? faAngleDoubleLeft : faAngleDoubleRight}
                        className="arrow_icon"
                      />
                    </div>
                  </div>
                )}
              </div>
        
              {/* </Splitter> */}
            </div>):(
              <div></div>)}
    </div>

  );
};

export default Activities;
