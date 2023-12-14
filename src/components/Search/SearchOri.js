// import React, { useState } from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faSearch,
//   faTimes,
//   faChartLine,
//   faHouse,
//   faCalendarDays,
//   faFolderOpen,
//   faFileInvoice,
//   faCalendarCheck,
//   faFileWaveform,
//   faCircleInfo,
//   faGear,
//   faVideo,
//   faLock,
//   faDesktop,
//   faCaretRight,
// } from "@fortawesome/free-solid-svg-icons";
// import main_menu from "../../assets/main_menu.png";
// import "../../styles/Search.css";
// import navData from "../Basic/Nav";

// const Search = () => {
//   const [searchInput, setSearchInput] = useState("");
//   const [sidebarWidth, setSidebarWidth] = useState(180);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [openTabs, setOpenTabs] = useState([]);
//   const [newTrCount, setNewTrCount] = useState(0);
//   const [currentSubMenu, setCurrentSubMenu] = useState("");

//   const handleSearchChange = (e) => {
//     setSearchInput(e.target.value);
//   };

//   const toggleSidebar = () => {
//     setSidebarWidth(sidebarWidth === 180 ? 150 : 100);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleResizerMouseDown = (e) => {
//     const initialX = e.clientX;
//     const initialWidth = sidebarWidth;

//     const handleMouseMove = (event) => {
//       const delta = event.clientX - initialX;
//       setSidebarWidth(initialWidth + delta);
//     };

//     const handleMouseUp = () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   };

//   // const addTab = (menuItem, icon) => {
//   //   if (!openTabs.some((tab) => tab.name === menuItem)) {
//   //     setOpenTabs([...openTabs, { name: menuItem, icon: icon }]);
//   //   }
//   // };

//   // const closeTab = (menuItem) => {
//   //   setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
//   // };

//   const addTab = (menuItem, icon) => {
//     const tabName = menuItem;

//     if (!openTabs.some((tab) => tab.name === tabName)) {
//       setOpenTabs([...openTabs, { name: tabName, icon: icon }]);
//     }
//   };

//   const closeTab = (menuItem) => {
//     if (menuItem !== "Welcome") {
//       setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
//     }
//   };
//   const handleSubMenuItemClick = (submenuItem, icon) => {
//     addTab(submenuItem, icon);
//     setCurrentSubMenu(submenuItem);
//   };
//   // useEffect(() => {
//   //   addTab("Welcome", faHouse);
//   // }, []);

//   // const handleSubMenuItemClick = (submenuItem, icon) => {
//   //   // const newTrTabName = "New TR";
   
//   //   const newTrTabName = `New TR ${newTrCount + 1}`;
  
//   //   // const newTrTabName = `New TR ${newTrCount + 1}`;
//   //   setNewTrCount(newTrCount + 1);

  
//   //   addTab(newTrTabName, icon);
//   // };

//   return (
//     <div className="search_div">
//       <div className="sidebar" style={{ width: sidebarWidth }}>
//         <div className="search-container">
//           <input
//             type="text"
//             value={searchInput}
//             onChange={handleSearchChange}
//             placeholder="Search"
//             className="search-input"
//           />
//           <FontAwesomeIcon icon={faSearch} className="search-icon" />
//         </div>
//         <div className="resize-handle" onMouseDown={handleResizerMouseDown} />

//         <div
//           style={{
//             backgroundColor: "white",
//             marginTop: "10px",
//             height: "-webkit-fill-available",
//           }}
//         >
//           <div className="btn_container">
//             <button className="menu_btn">
//               <img src={main_menu} className="image_menu" />

//               <div className="text_menu">Main Office</div>
//             </button>
//           </div>

//           <ul className="menu">
//             <div
//               className="menu_items"
//               onClick={() => addTab("DashBoard", faChartLine)}
//             >
//               <FontAwesomeIcon icon={faChartLine} className="chart_line" />
//               <div className="nav_text">DashBoard</div>
//             </div>

//             <div className="menu_items" onClick={() => addTab("Home", faHouse)}>
//               <FontAwesomeIcon icon={faHouse} className="fahouse" />
//               <div className="nav_text">Home</div>
//             </div>
//             <div
//               className="menu_items"
//               onClick={() => addTab("Calendar", faCalendarDays)}
//             >
//               <FontAwesomeIcon
//                 icon={faCalendarDays}
//                 className="calendar_days"
//               />
//               <div className="nav_text">Calendar</div>
//             </div>
//             <div onClick={toggleDropdown} className="menu_items">
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon icon={faFolderOpen} className="folder_open" />
//               <div className="nav_text">Casess</div>
//             </div>
//             {dropdownOpen && (
//               <div className="submenu">
//                 <div
//                   onClick={() =>
//                     handleSubMenuItemClick("New TR", faCalendarDays)
//                   }
//                   className="submenu_txt"
//                 >
//                   New TR
//                 </div>
//                 <div
//                   onClick={() =>
//                     handleSubMenuItemClick("New BK", faCalendarDays)
//                   }
//                   className="submenu_txt"
//                 >
//                   New BK
//                 </div>
//                 <div
//                   onClick={() =>
//                     handleSubMenuItemClick("New IM", faCalendarDays)
//                   }
//                   className="submenu_txt"
//                 >
//                   New IM
//                 </div>
//                 <div
//                   onClick={() =>
//                     handleSubMenuItemClick("New LS", faCalendarDays)
//                   }
//                   className="submenu_txt"
//                 >
//                   New LS
//                 </div>
//                 <div
//                   onClick={() =>
//                     handleSubMenuItemClick("New CD", faCalendarDays)
//                   }
//                   className="submenu_txt"
//                 >
//                   New CD
//                 </div>
//               </div>
//             )}
//             <div
//               className="menu_items"
//               onClick={() => addTab("Portfolio", faFileInvoice)}
//             >
//               <FontAwesomeIcon icon={faFileInvoice} className="file_invoice" />
//               <div className="nav_text">Portfolio</div>
//             </div>

//             <div className="menu_items" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon
//                 icon={faCalendarCheck}
//                 className="calendar_check"
//               />
//               <div className="nav_text">Tasks and Events</div>
//             </div>
//             <div onClick={toggleDropdown} className="menu_items">
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon
//                 icon={faFileWaveform}
//                 className="filewave_form"
//               />
//               <div className="nav_text">Reports</div>
//             </div>
//             {dropdownOpen && (
//               <div className="submenu">
//                 <div className="submenu_txt">Activity Report</div>
//               </div>
//             )}
//             <div className="menu_items" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon icon={faCircleInfo} className="circle_info" />
//               <div className="nav_text">IRS Resources</div>
//             </div>

//             <div className="menu_items" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon icon={faGear} className="gear" />
//               <div className="nav_text">Tools</div>
//             </div>
//             <div className="menu_items" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faVideo} className="video" />
//               <div className="nav_text">Meetings</div>
//             </div>
//             <div className="menu_items" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon icon={faLock} className="lock" />
//               <div className="nav_text">Security</div>
//             </div>

//             <div className="menu_items" onClick={toggleDropdown}>
//               <FontAwesomeIcon icon={faCaretRight} className="caret_right" />
//               <FontAwesomeIcon icon={faDesktop} className="gear" />
//               <div className="nav_text">Administration</div>
//             </div>
//           </ul>
//         </div>
//       </div>
//       <div className="tabs-container">
//         {openTabs.map((tab) => (
//           <div key={tab.name} className="tab">
//             <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
//             {tab.name}
//             <FontAwesomeIcon
//               icon={faTimes}
//               className="close-icon"
//               onClick={() => closeTab(tab.name)}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Search;










import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faChartLine,
  faHouse,
  faCalendarDays,
  faFolderOpen,
  faFileInvoice,
  faCalendarCheck,
  faFileWaveform,
  faCircleInfo,
  faBookOpen,
  faSquareRss,
  faGear,
  faBook,
  faVideo,
  faLock,
  faDesktop,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import main_menu from "../../assets/main_menu.png";
import { Link } from "react-router-dom";
import "../../styles/Search.css";
import Calendars from "../Calendars/Calendars";
import navData from "../Basic/Nav";
import MainMenu from "../Header/HeaderTabs";
import HeaderNav from "../Header/HeaderNav";
import Meetings from "../Meetings/Meetings";
import IRSPublications from "../IRS Resources/IRSPublications";
import Home from "../Home/Home";
import IRSManual from "../IRS Resources/IRSManual";
import { addedTabData, setTabData } from "../../store/action/action";

// import { HeaderNav, refreshTabStrip } from "../Header/HeaderNav";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState(180);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenNew, setDropdownOpenNew] = useState(false);
  const [dropdownOpenActivity, setDropdownOpenActivity] = useState(false);
  const [dropdownOpenIRS, setDropdownOpenIRS] = useState(false);
  const [openTabs, setOpenTabs] = useState([]);
  const [newTrCount, setNewTrCount] = useState(0);
  const [currentSubMenu, setCurrentSubMenu] = useState("");
  const [isCalendarClicked, setCalendarClicked] = useState(false);
  const [tabcount, setCount] = React.useState(3);
  const [selected, setSelected] = React.useState(0);
const dispatch = useDispatch();
  const tabStripRef = useRef();

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleCalendarClick = () => {
    addTab("Calendar", faCalendarDays);
    setCalendarClicked(true);
  };

  const toggleSidebar = () => {
    setSidebarWidth(sidebarWidth === 180 ? 150 : 100);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const toggleDropdownNew = () => {
    setDropdownOpenNew(!dropdownOpenNew);
  };
  const toggleDropdownActivity = () => {
    setDropdownOpenActivity(!dropdownOpenActivity);
  };
  const toggleDropdownIRS = () => {
    setDropdownOpenIRS(!dropdownOpenIRS);
  };
  const removeTab = (menuItem) => {
    setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
  };

  const refreshTabStrip = () => {
    tabStripRef.current.setSelected(0);
  };

  const addTab = (menuItem, icon) => {
    /*const tabName = menuItem;

    if (!openTabs.some((tab) => tab.name === tabName)) {
      setOpenTabs([...openTabs, { name: tabName, icon: icon }]);
    }*/
    let TabContent = "";
    switch (menuItem) {
      case "Calendar":
        TabContent = <div>{<Calendars />}</div>;
        break;

      case "Meetings":
        TabContent = <div>{<Meetings />}</div>;
        break;
      case "IRS Manual":
        TabContent = <div>{<IRSManual />}</div>;
        break;
      case "Home":
        TabContent = <div>{<Home />}</div>;
        break;
      case "IRS Publications":
        TabContent = <div>{<IRSPublications />}</div>;
        break;

      default:
        TabContent = menuItem;
        break;
    }
    let newCount = tabcount + 1;
    MainMenu.push({
      id: newCount - 1,
      title: menuItem,
      content: TabContent,
    });
dispatch(setTabData({id: newCount - 1,title: menuItem,content: TabContent}))
dispatch(addedTabData({id: newCount - 1,title: menuItem,content: TabContent}))
    console.log("mainmenu",MainMenu);
    setCount(newCount);

    // if (tabStripRef.current && tabStripRef.current.refreshTabStrip) {
    //   tabStripRef.current.refreshTabStrip();
    // }

    // <HeaderNav refreshTabStrip={refreshTabStrip} />;
    // refreshTabStrip();
    // <HeaderNav refreshTabStrip={refreshTabStrip} tabStripRef={tabStripRef} />
    // tabStripRef.current.refreshTabStrip();
    <HeaderNav refreshTabStrip={refreshTabStrip} tabStripRef={tabStripRef} />;

    // refreshTabStrip();
    //HeaderNav.refreshTabStrip();
  };

  const closeTab = (menuItem) => {
    if (menuItem !== "Welcome") {
      setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
    }
  };

  const handleResizerMouseDown = (e) => {
    const initialX = e.clientX;
    const initialWidth = sidebarWidth;

    const handleMouseMove = (event) => {
      const delta = event.clientX - initialX;
      setSidebarWidth(initialWidth + delta);
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  const handleSubMenuItemClick = (submenuItem, icon) => {
    addTab(submenuItem, icon);
    setCurrentSubMenu(submenuItem);
  };

  return (
    <div>
      <div className="search_div">
        <div className="sidebar">
          <div className="search-container">
            <input
              type="text"
              value={searchInput}
              onChange={handleSearchChange}
              placeholder="Search"
              className="search-input"
            />
            <FontAwesomeIcon icon={faSearch} className="search-icon" />
          </div>
          {/* <div className="resize-handle" onMouseDown={handleResizerMouseDown} /> */}

          <div
            style={{
              backgroundColor: "white",
              marginTop: "10px",
              height: "calc(100vh - 50px)",
            }}
          >
            <div className="btn_container">
              <button className="menu_btn">
                <img src={main_menu} className="image_menu" />

                <div className="text_menu">Main Office</div>
              </button>
            </div>

            <ul className="menu">
              <div className="menu_itemsh">
                <div
                  className="menu_items"
                  onClick={() => addTab("DashBoard", faChartLine)}
                >
                  <FontAwesomeIcon icon={faChartLine} className="chart_line" />
                  <div className="nav_text">DashBoard</div>
                </div>
              </div>

              <div className="menu_itemsh">
                <div
                  className="menu_items"
                  onClick={() => addTab("Home", faHouse)}
                >
                  <FontAwesomeIcon icon={faHouse} className="fahouse" />
                  <div className="nav_text">Home</div>
                </div>
              </div>
              {/* <div
              className="menu_items"
              onClick={() => addTab("Calendar", faCalendarDays)}
            >
              <Link to="/calendars" className="links_nav">
                <FontAwesomeIcon
                  icon={faCalendarDays}
                  className="calendar_days"
                />
                <div className="nav_text">Calendar</div> */}
              {/* </Link> */}
              {/* <FontAwesomeIcon
                icon={faCalendarDays}
                className="calendar_days"
              />
              <div className="nav_text">Calendar</div> */}
              {/* </div> */}
              <div className="menu_itemsh">
                <div
                  className="menu_items"
                  onClick={() => addTab("Calendar", faHouse)}
                >
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="calendar_days"
                  />
                  <div className="nav_text">Calendar</div>
                </div>
              </div>
              <div className="menu_itemsh">
                <div onClick={toggleDropdownNew} className="menu_items">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon
                    icon={faFolderOpen}
                    className="folder_open"
                  />
                  <div className="nav_text">Casess</div>
                </div>
              </div>

              {dropdownOpenNew && (
                <div className="submenu">
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("New TR", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    New TR
                  </div>
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("New BK", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    New BK
                  </div>
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("New IM", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    New IM
                  </div>
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("New LS", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    New LS
                  </div>
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("New CD", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    New CD
                  </div>
                </div>
              )}

              <div className="menu_itemsh">
                <div
                  className="menu_items"
                  onClick={() => addTab("Portfolio", faFileInvoice)}
                >
                  <FontAwesomeIcon
                    icon={faFileInvoice}
                    className="file_invoice"
                  />
                  <div className="nav_text">Portfolio</div>
                </div>
              </div>

              <div className="menu_itemsh">
                <div className="menu_items" onClick={toggleDropdown}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon
                    icon={faCalendarCheck}
                    className="calendar_check"
                  />
                  <div className="nav_text">Tasks and Events</div>
                </div>
              </div>

              <div className="menu_itemsh">
                <div onClick={toggleDropdownActivity} className="menu_items">
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon
                    icon={faFileWaveform}
                    className="filewave_form"
                  />
                  <div className="nav_text">Reports</div>
                </div>
              </div>

              {dropdownOpenActivity && (
                <div className="submenu">
                  <div className="submenu_txt">Activity Report</div>
                </div>
              )}

              <div className="menu_itemsh">
                <div className="menu_items" onClick={toggleDropdownIRS}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon
                    icon={faCircleInfo}
                    className="circle_info"
                  />
                  <div className="nav_text">IRS Resources</div>
                </div>
              </div>
              {dropdownOpenIRS && (
                <div className="submenu">
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("IRS News Room", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    <FontAwesomeIcon
                      icon={faSquareRss}
                      className="file_irs_org"
                    />
                    IRS News Room
                  </div>
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("IRS Manual", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    <FontAwesomeIcon icon={faBookOpen} className="file_irs" />
                    IRS Manual
                  </div>
                  <div
                    onClick={() =>
                      handleSubMenuItemClick("IRS Publications", faCalendarDays)
                    }
                    className="submenu_txt"
                  >
                    <FontAwesomeIcon icon={faBook} className="file_irs" />
                    IRS Publications
                  </div>
                </div>
              )}

              <div className="menu_itemsh">
                <div className="menu_items" onClick={toggleDropdown}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon icon={faGear} className="gear" />
                  <div className="nav_text">Tools</div>
                </div>
              </div>

              <div className="menu_itemsh">
                <div
                  className="menu_items"
                  onClick={() => addTab("Meetings", faVideo)}
                >
                  <FontAwesomeIcon icon={faVideo} className="video" />
                  <div className="nav_text">Meetings</div>
                </div>
              </div>

              <div className="menu_itemsh">
                <div className="menu_items" onClick={toggleDropdown}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon icon={faLock} className="lock" />
                  <div className="nav_text">Security</div>
                </div>
              </div>

              <div className="menu_itemsh">
                <div className="menu_items" onClick={toggleDropdown}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon icon={faDesktop} className="gear" />
                  <div className="nav_text">Administration</div>
                </div>
              </div>
            </ul>
          </div>
        </div>

        {/* <div className="tabs-container">
          <div className="tabs-container">
            {openTabs.map((tab) => (
              <div key={tab.name} className="tab">
                <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
                {tab.name}
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close-icon"
                  onClick={() => closeTab(tab.name)}
                />
              </div>
            ))}
          </div>

          {openTabs.map((tab) => (
            <div key={tab.name} className="tab">
              <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
              {tab.name}
              <FontAwesomeIcon
                icon={faTimes}
                className="close-icon"
                onClick={() => closeTab(tab.name)}
              />
            </div>
          ))}
        </div> */}
      </div>
      {/* <div className="content1">
        {isCalendarClicked ? (
          <Calendars />
        ) : (
          <div className="tabs-container">
            {openTabs.map((tab) => (
              <div key={tab.name} className="tab">
                <FontAwesomeIcon icon={tab.icon} className="tab-icon" />
                {tab.name}
                <FontAwesomeIcon
                  icon={faTimes}
                  className="close-icon"
                  onClick={() => closeTab(tab.name)}
                />
              </div>
            ))}
          </div>
        )}
      </div>  */}
    </div>
  );
};

export default Search;

