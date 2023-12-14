import React, { useState, useRef, useEffect } from "react";
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
  faClose,
} from "@fortawesome/free-solid-svg-icons";
// import response from "./SResponse";
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
import NewTR from "../Cases/NewTR";
import Administration from "../Administration/Administration";
import LayoutTR from "../Cases/LayoutTR";
import Filters from "../Filters/Filters";
import AccountServices from "../APIs/AccountServices";
import Loader from "../Basic/Loader";
import UsersLog from "../UsersLog/UsersLog";
import CPLoginHistory from "../CPLoginHistory/CPLoginHistory";
import Users from "../Users/Users";
// import { HeaderNav, refreshTabStrip } from "../Header/HeaderNav";

const Search = () => {
  const [selectedComponent, setSelectedComponent] = useState("Welcome"); 
  const [searchInput, setSearchInput] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState(180);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownOpenNew, setDropdownOpenNew] = useState(false);
  const [dropdownTasks, setDropdownTasks] = useState(false);
  const [dropdownTools, setDropdownTools] = useState(false);
  const [dropdownSecurity, setDropdownSecurity] = useState(false);
  const [dropdownAdmin, setDropdownAdmin] = useState(false);
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
  if (selectedComponent == null || "") {
    setSelectedComponent("Welcome");
  }
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
  const toggleDropdownTasks = () => {
    setDropdownTasks(!dropdownTasks);
  };
  const toggleDropdownTools = () => {
    setDropdownTools(!dropdownTools);
  };
  const toggleDropdownSecurity = () => {
    setDropdownSecurity(!dropdownSecurity);
  };
  const toggleDropdownAdmin = () => {
    setDropdownAdmin(!dropdownAdmin);
  };
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [showSidebar, setShowSidebar] = useState(true);
  const [isSearchDivVisible, setSearchDivVisible] = useState(true);

  const handleToggleSearchDiv = () => {
    setSearchDivVisible(!isSearchDivVisible);
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
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);
  const [response, setResponse] = useState();
  const Loader = () => {
    return <div>Loading...</div>;
  };
  const token = localStorage.getItem("token");
  const addTab = (menuItem, icon) => {
    setLoading(true);
    let TabContent = "";
    switch (menuItem) {
      case "Calendar":
        TabContent = <div>{<Calendars />}</div>;
        break;

      case "Meetings":
        TabContent = <div>{<Meetings />}</div>;
        break;
      case "Additional Fields":
        TabContent = <div>{<Administration />}</div>;
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
      case "New TR Case":
        TabContent = <div>{<LayoutTR />}</div>;
        break;
      case "Filter-OnPro":
        TabContent = <div>{<Filters />}</div>;
        break;
      case "User Log":
        TabContent = <div>{<UsersLog />}</div>;
        break;
        case "CP Login History":
        TabContent = <div>{<CPLoginHistory />}</div>;
        break;
      case "Users":
        TabContent = <div>{<Users />}</div>;
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
    dispatch(
      setTabData({ id: newCount - 1, title: menuItem, content: TabContent })
    );
    dispatch(
      addedTabData({ id: newCount - 1, title: menuItem, content: TabContent })
    );
    // console.log("mainmenu", MainMenu);
    setCount(newCount);
    setTimeout(() => {
      setLoading(false);
      setContent(TabContent);
    }, 2000);
    <div>
      {loading && <Loader />}
      {content && <div key={content.id}>{content}</div>}
    </div>;
    // <HeaderNav refreshTabStrip={refreshTabStrip} tabStripRef={tabStripRef} />;
  };
  // useEffect(() => {
  //   AccountServices.getLeftMenu(token)
  //   .then((res) => {
  //       if(res.status == 200){
  //       console.log("resp",res);
  //       // setResponse(res);
  //       }
  //     }).catch((err)=>{
  //       console.log("Error ===>", err.errorMessage);
  //     });
  // }, []);
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
  AccountServices.getLeftMenu(token)
    .then((res) => {
      if (res.status == 200) {
        setResponse(res.data);
      }
    })
    .catch((err) => {
      console.log("Error ===>", err.errorMessage);
    });
  if (response != null) {
    const casesMenuItems = response.Result.TreeData.find(
      (item) => item.Name === "Cases"
    );

    const casesSubMenu = casesMenuItems.items.map((menuItem) => (
      <div key={menuItem.Name} 
      className="menu_itemsh"  
      // className={`menu_itemsh ${
      //   selectedComponent === "Cases" ? "selected" : ""
      // }`}
     >
        <div
          className="menu_items"
          onClick={() => addTab(menuItem.TabTitle, menuItem.TabIcon)}
        >
          <FontAwesomeIcon icon={menuItem.Icon} className={menuItem.TabIcon} />
          <div className="nav_text_case">{menuItem.TabTitle}</div>
        </div>
      </div>
    ));
    const tasksEventsItems = response.Result.TreeData.find(
      (item) => item.Title === "Tasks and Events"
    );
    const tasksEvents = tasksEventsItems.items.map((menuItem) => (
      <div key={menuItem.Name} className="menu_itemsh">
        <div
          className="menu_items"
          onClick={() => addTab(menuItem.TabTitle, menuItem.TabIcon)}
        >
          <FontAwesomeIcon icon={menuItem.Icon} className={menuItem.TabIcon} />
          <div className="nav_text_case">{menuItem.TabTitle}</div>
        </div>
      </div>
    ));
    const reportsItems = response.Result.TreeData.find(
      (item) => item.Title === "Reports"
    );
    const reportEvents = reportsItems.items.map((menuItem) => (
      <div key={menuItem.Name} className="menu_itemsh">
        <div
          className="menu_items"
          onClick={() => addTab(menuItem.TabTitle, menuItem.TabIcon)}
        >
          <FontAwesomeIcon icon={menuItem.Icon} className={menuItem.TabIcon} />
          <div className="nav_text_case">{menuItem.TabTitle}</div>
        </div>
      </div>
    ));
    const toolsItems = response.Result.TreeData.find(
      (item) => item.Title === "Tools"
    );
    const toolsEvents = toolsItems.items.map((menuItem) => (
      <div key={menuItem.Name} className="menu_itemsh">
        <div
          className="menu_items"
          onClick={() => addTab(menuItem.TabTitle, menuItem.TabIcon)}
        >
          <FontAwesomeIcon icon={menuItem.Icon} className={menuItem.TabIcon} />
          <div className="nav_text_case">{menuItem.TabTitle}</div>
        </div>
      </div>
    ));

    const securityItems = response.Result.TreeData.find(
      (item) => item.Title === "Security"
    );
    const securityEvents = securityItems.items.map((menuItem) => (
      <div key={menuItem.Name} className="menu_itemsh">
        <div
          className="menu_items"
          onClick={() => addTab(menuItem.TabTitle, menuItem.TabIcon)}
        >
          <FontAwesomeIcon icon={menuItem.Icon} className={menuItem.TabIcon} />
          <div className="nav_text_case">{menuItem.TabTitle}</div>
        </div>
      </div>
    ));
    const adminItems = response.Result.TreeData.find(
      (item) => item.Title === "Administration"
    );
    const adminEvents = adminItems.items.map((menuItem) => (
      <div key={menuItem.Name} className="menu_itemsh">
        <div
          className="menu_items"
          onClick={() => addTab(menuItem.TabTitle, menuItem.TabIcon)}
        >
          <FontAwesomeIcon icon={menuItem.Icon} className={menuItem.TabIcon} />
          <div className="nav_text_case">{menuItem.TabTitle}</div>
        </div>
      </div>
    ));

    return (
      <div>
        {windowWidth >= 768 ? (
          <div className="search_div">
            <div className="sidebar">
              <div
                style={{
                  height: "25px",
                  backgroundColor: "#d0ddf0",
                  paddingTop: "17px",
                  // paddingBottom: "10px",
                  position: "absolute",
                  width: "100%",
                  display: "flex",
                }}
              >
                <div className="search-container">
                  <input
                    type="text"
                    value={searchInput}
                    className="input_place input_s"
                    placeholder="Search"
                    onChange={handleSearchChange}
                  />
                  <FontAwesomeIcon icon={faSearch} className="search-icon" />
                </div>
              </div>

              <div
                style={{
                  backgroundColor: "white",
                  // marginTop: "10px",
                  height: "calc(100vh - 50px)",
                  marginTop: "42px",
                }}
              >
                <div className="btn_container">
                  <button className="menu_btn">
                    <img src={main_menu} className="image_menu" />

                    <div className="text_menu">Main Office</div>
                  </button>
                </div>
                <div className="menu_div">
                  <ul className="menu">
                    <div className="menu_itemsh">
                      <div
                        className="menu_items"
                        onClick={() => addTab("DashBoard", faChartLine)}
                      >
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className="chart_line"
                        />
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
                    {/* <div className="menu_itemsh">
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
              </div> */}
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
                        <div className="nav_text">Cases</div>
                      </div>
                    </div>

                    {dropdownOpenNew && (
                      <div id="pc1" className="submenu">
                        {casesSubMenu}
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
                      <div onClick={toggleDropdownTasks} className="menu_items">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Tasks and Events</div>
                      </div>
                    </div>

                    {dropdownTasks && (
                      <div className="submenu">{tasksEvents}</div>
                    )}
                    {/* 
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
              )} */}

                    <div className="menu_itemsh">
                      <div
                        onClick={toggleDropdownActivity}
                        className="menu_items"
                      >
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Reports</div>
                      </div>
                    </div>

                    {dropdownOpenActivity && (
                      <div className="submenu">{reportEvents}</div>
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
                            handleSubMenuItemClick(
                              "IRS News Room",
                              faCalendarDays
                            )
                          }
                          className="submenu_txti"
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
                          className="submenu_txti"
                        >
                          <FontAwesomeIcon
                            icon={faBookOpen}
                            className="file_irs"
                          />
                          IRS Manual
                        </div>
                        <div
                          onClick={() =>
                            handleSubMenuItemClick(
                              "IRS Publications",
                              faCalendarDays
                            )
                          }
                          className="submenu_txti"
                        >
                          <FontAwesomeIcon icon={faBook} className="file_irs" />
                          IRS Publications
                        </div>
                      </div>
                    )}

                    {/* <div className="menu_itemsh">
                <div className="menu_items" onClick={toggleDropdown}>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    className="caret_right"
                  />
                  <FontAwesomeIcon icon={faGear} className="gear" />
                  <div className="nav_text">Tools</div>
                </div>
              </div> */}
                    <div className="menu_itemsh">
                      <div onClick={toggleDropdownTools} className="menu_items">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Tools</div>
                      </div>
                    </div>

                    {dropdownTools && (
                      <div className="submenu">{toolsEvents}</div>
                    )}

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
                      <div
                        onClick={toggleDropdownSecurity}
                        className="menu_items"
                      >
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Security</div>
                      </div>
                    </div>

                    {dropdownSecurity && (
                      <div className="submenu">{securityEvents}</div>
                    )}
                    <div className="menu_itemsh">
                      <div onClick={toggleDropdownAdmin} className="menu_items">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Administration</div>
                      </div>
                    </div>

                    {dropdownAdmin && (
                      <div className="submenu">{adminEvents}</div>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="search_div_mob">
            {isSearchDivVisible && (
              <div className="sidebar">
                <div
                  className="side_div"
                  style={{ display: "flex", flexDirection: "column" }}
                >
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
                  <div
                    className="btn_container_mob"
                    style={{
                      marginTop: "10px",
                      marginLeft: "5px",
                      width: "98%",
                    }}
                  >
                    <button className="menu_btn">
                      <img src={main_menu} className="image_menu" />

                      <div className="text_menu">Main Office</div>
                    </button>
                  </div>
                </div>

                <div className="menu_main">
                  <ul className="menu">
                    <div className="menu_itemsh">
                      <div
                        className="menu_items"
                        onClick={() => addTab("DashBoard", faChartLine)}
                      >
                        <FontAwesomeIcon
                          icon={faChartLine}
                          className="chart_line"
                        />
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
                        <div className="nav_text">Cases</div>
                      </div>
                    </div>

                    {dropdownOpenNew && (
                      <div className="submenu">{casesSubMenu}</div>
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
                      <div onClick={toggleDropdownTasks} className="menu_items">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Tasks and Events</div>
                      </div>
                    </div>

                    {dropdownTasks && (
                      <div className="submenu">{tasksEvents}</div>
                    )}

                    <div className="menu_itemsh">
                      <div
                        onClick={toggleDropdownActivity}
                        className="menu_items"
                      >
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Reports</div>
                      </div>
                    </div>

                    {dropdownOpenActivity && (
                      <div className="submenu">{reportEvents}</div>
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
                            handleSubMenuItemClick(
                              "IRS News Room",
                              faCalendarDays
                            )
                          }
                          className="submenu_txti"
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
                          className="submenu_txti"
                        >
                          <FontAwesomeIcon
                            icon={faBookOpen}
                            className="file_irs"
                          />
                          IRS Manual
                        </div>
                        <div
                          onClick={() =>
                            handleSubMenuItemClick(
                              "IRS Publications",
                              faCalendarDays
                            )
                          }
                          className="submenu_txti"
                        >
                          <FontAwesomeIcon icon={faBook} className="file_irs" />
                          IRS Publications
                        </div>
                      </div>
                    )}
                    <div className="menu_itemsh">
                      <div onClick={toggleDropdownTools} className="menu_items">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Tools</div>
                      </div>
                    </div>

                    {dropdownTools && (
                      <div className="submenu">{toolsEvents}</div>
                    )}

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
                      <div
                        onClick={toggleDropdownSecurity}
                        className="menu_items"
                      >
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Security</div>
                      </div>
                    </div>

                    {dropdownSecurity && (
                      <div className="submenu">{securityEvents}</div>
                    )}
                    <div className="menu_itemsh">
                      <div onClick={toggleDropdownAdmin} className="menu_items">
                        <FontAwesomeIcon
                          icon={faCaretRight}
                          className="caret_right"
                        />
                        <FontAwesomeIcon
                          icon={faFolderOpen}
                          className="folder_open"
                        />
                        <div className="nav_text">Administration</div>
                      </div>
                    </div>

                    {dropdownAdmin && (
                      <div className="submenu">{adminEvents}</div>
                    )}
                  </ul>
                  <div></div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
};

export default Search;
