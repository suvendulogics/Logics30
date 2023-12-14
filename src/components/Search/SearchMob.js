import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faTimes,
  faChartLine,
  faHouse,
  faCalendarDays,
  faArrowLeft,
  faXmark,
  faFolderOpen,
  faFileInvoice,
  faCalendarCheck,
  faFileWaveform,
  faCircleInfo,
  faChevronLeft,
  faGear,
  faVideo,
  faLock,
  faDesktop,
  faCaretRight,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import main_menu from "../../assets/main_menu.png";
import "../../styles/SearchMob.css";
import navData from "../Basic/Nav";

const Search = () => {
  const [searchInput, setSearchInput] = useState("");
  const [sidebarWidth, setSidebarWidth] = useState(220);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [openTabs, setOpenTabs] = useState([]);
  const [showSidebar, setShowSidebar] = useState(true);
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const toggleSidebar = () => {
    setSidebarWidth(sidebarWidth === 220 ? 220 : 180);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
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

  const addTab = (menuItem) => {
    if (!openTabs.includes(menuItem)) {
      setOpenTabs([...openTabs, menuItem]);
    }
  };

  const closeTab = (menuItem) => {
    setOpenTabs(openTabs.filter((tab) => tab !== menuItem));
  };
  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="search_divmob">
      <div className="tabs-containermob">
        {openTabs.map((tab) => (
          <div key={tab} className="tabmob">
            {tab}
            <FontAwesomeIcon
              icon={faTimes}
              className="close-iconmob"
              onClick={() => closeTab(tab)}
            />
          </div>
        ))}
      </div>
      <div>
        {showSidebar && (
          <div className="sidebarmob" style={{ width: sidebarWidth }}>
            <div className="sidebarmob" style={{ width: sidebarWidth }}>
              <div
                style={{
                  backgroundColor: "white",
                  marginTop: "10px",
                  height: "-webkit-fill-available",
                }}
              >
                <div className="btn_containermob">
                  <div className="menu_btnmob">
                  
                     <div className="text_menumob">Main Office</div>
                    <FontAwesomeIcon icon={faXmark} className="square-box"
                      onClick={toggleShowSidebar}/>
                   
                  </div>
                </div>
                <div className="search-containermob">
                  <input
                    type="text"
                    value={searchInput}
                    onChange={handleSearchChange}
                    placeholder="Search"
                    className="search-inputmob"
                  />
                  <FontAwesomeIcon icon={faSearch} className="search-iconmob" />
                </div>
                <ul className="menumob">
                  <div
                    className="menu_itemsmob"
                    onClick={() => addTab("DashBoard")}
                  >
                    <FontAwesomeIcon
                      icon={faChartLine}
                      className="chart_linemob"
                    />
                    <div className="nav_textmob">DashBoard</div>
                  </div>
                  <div className="menu_itemsmob" onClick={() => addTab("Home")}>
                    <FontAwesomeIcon icon={faHouse} className="fahousemob" />
                    <div className="nav_textmob">Home</div>
                  </div>
                  <div
                    className="menu_itemsmob"
                    onClick={() => addTab("Calendar")}
                  >
                    <FontAwesomeIcon
                      icon={faCalendarDays}
                      className="calendar_daysmob"
                    />
                    <div className="nav_textmob">Calendar</div>
                  </div>
                  <div onClick={toggleDropdown} className="menu_itemsmob">
                    <FontAwesomeIcon
                      icon={faFolderOpen}
                      className="folder_openmob"
                    />
                    <div className="nav_textmob">Casess</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>
                  {dropdownOpen && (
                    <div className="submenumob">
                      <div>New TR</div>
                      <div>New BK</div>
                      <div>New IM</div>
                      <div>New LS</div>
                      <div>New CD</div>
                    </div>
                  )}
                  <div
                    className="menu_itemsmob"
                    onClick={() => addTab("Portfolio")}
                  >
                    <FontAwesomeIcon
                      icon={faFileInvoice}
                      className="file_invoicemob"
                    />
                    <div className="nav_textmob">Portfolio</div>
                  </div>

                  <div className="menu_itemsmob" onClick={toggleDropdown}>
                    <FontAwesomeIcon
                      icon={faCalendarCheck}
                      className="calendar_checkmob"
                    />
                    <div className="nav_textmob">Tasks and Events</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>
                  <div onClick={toggleDropdown} className="menu_itemsmob">
                    <FontAwesomeIcon
                      icon={faFileWaveform}
                      className="filewave_formmob"
                    />
                    <div className="nav_textmob">Reports</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>
                  {dropdownOpen && (
                    <ul className="submenumob">
                      <div>Activity Report</div>
                    </ul>
                  )}
                  <div className="menu_itemsmob" onClick={toggleDropdown}>
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="circle_infomob"
                    />
                    <div className="nav_textmob">IRS Resources</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>

                  <div className="menu_itemsmob" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faGear} className="gearmob" />
                    <div className="nav_textmob">Tools</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>
                  <div
                    className="menu_itemsmob"
                    onClick={() => addTab("Meetings")}
                  >
                    <FontAwesomeIcon icon={faVideo} className="videomob" />
                    <div className="nav_textmob">Meetings</div>
                  </div>
                  <div className="menu_itemsmob" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faLock} className="lockmob" />
                    <div className="nav_textmob">Security</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>

                  <div className="menu_itemsmob" onClick={toggleDropdown}>
                    <FontAwesomeIcon icon={faDesktop} className="gearmob" />
                    <div className="nav_textmob">Administration</div>
                    <FontAwesomeIcon
                      icon={faCaretRight}
                      className="caret_rightmob"
                    />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
