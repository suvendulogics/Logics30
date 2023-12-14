import React, { useState, useEffect } from "react";
import "../../styles/Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faQuestionCircle,
  faCog,
  faKey,
  faSignOutAlt,
  faChartLine,
  faHouse,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "../Basic/Settings";
import HelpDesk from "../Basic/HelpDesk";
import ToolTip from "../Basic/ToolTip";
import Calendars from "../Calendars/Calendars";
import Search from "../Search/Search";
import LeftMenuNav from "../Search/LeftMenuNav";
import HeaderNav from "../Header/HeaderNav";

const Header = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [isCalendarClicked, setCalendarClicked] = useState(false);

  const names = "sandbox";
  useEffect(() => {
    const response = {
      name: "sandbox",
      email: "user@logics.com",
    };

    setUserInfo(response);
  }, []);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const profiileName = names
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
  const [openTabs, setOpenTabs] = useState([]);

  // const [openTabs, setOpenTabs] = useState([
  //   { name: "Dashboard", icon: faChartLine },
  //   { name: "Home", icon: faHouse },

  // ]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const closeTab = (menuItem) => {
    setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
  };
  const addTab = (menuItem) => {
    if (!openTabs.includes(menuItem)) {
      setOpenTabs([...openTabs, menuItem]);
    }
  };

  return (
    <div>
       {windowWidth >= 768 ? (
      <header className="header">
        {/* <HeaderNav /> */}
        <div className="profile_tab">
          <div className="welcome" onClick={toggleDropdown}>
            <span className="name1" onClick={toggleDropdown}>
              {userInfo.name}
            </span>
            <div className="profile-icon">
              <div className="round-icon" onClick={toggleDropdown}>
                <span>{profiileName}</span>
              </div>
            </div>
            {isDropdownOpen && (
              <div className="dropdown">
                <div className="pro_details">
                  <div className="image_details">
                    {" "}
                    <div className="round-icons" onClick={toggleDropdown}>
                      <span>{profiileName}</span>
                    </div>
                  </div>
                  <div className="pro_details_txt">
                    <div className="name_dropdown">{userInfo.name}</div>
                    <div className="mail_dropdown">{userInfo.email}</div>
                  </div>
                </div>
                <div className="custom-line"></div>
            
                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    size="1x"
                    className="fav_icons"
                  />
                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/helpdesk")}
                  >
                    {" "}
                    <ToolTip
                      header="Help Desk"
                      content={[
                        "Ask a question",
                        "Report an issue",
                        "Submit a request",
                        "View frequently asked questions",
                        "View latest announcements",
                        "Watch video tutorials",
                      ]}
                    />
                  </div>
                </div>

                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faCog}
                    size="1x"
                    className="fav_icons"
                  />
                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/settings")}
                  >
                    Settings
                  </div>
                </div>
                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faKey}
                    size="1x"
                    className="fav_icons"
                  />
                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/changepwd")}
                  >
                    Change Password
                  </div>
                </div>
                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    size="1x"
                    className="fav_icons"
                  />

                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/signout")}
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
       ):(
        <header className="header">
      
        <div className="profile_tab">
          <div className="welcome" onClick={toggleDropdown}>
            <span className="name1" onClick={toggleDropdown}>
              {userInfo.name}
            </span>
            <div className="profile-icon">
              <div className="round-icon" onClick={toggleDropdown}>
                <span>{profiileName}</span>
              </div>
            </div>
            {isDropdownOpen && (
              <div className="dropdown">
                <div className="pro_details">
                  <div className="image_details">
                    {" "}
                    <div className="round-icons" onClick={toggleDropdown}>
                      <span>{profiileName}</span>
                    </div>
                  </div>
                  <div className="pro_details_txt">
                    <div className="name_dropdown">{userInfo.name}</div>
                    <div className="mail_dropdown">{userInfo.email}</div>
                  </div>
                </div>
                <div className="custom-line"></div>
            
                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faQuestionCircle}
                    size="1x"
                    className="fav_icons"
                  />
                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/helpdesk")}
                  >
                    {" "}
                    <ToolTip
                      header="Help Desk"
                      content={[
                        "Ask a question",
                        "Report an issue",
                        "Submit a request",
                        "View frequently asked questions",
                        "View latest announcements",
                        "Watch video tutorials",
                      ]}
                    />
                  </div>
                </div>

                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faCog}
                    size="1x"
                    className="fav_icons"
                  />
                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/settings")}
                  >
                    Settings
                  </div>
                </div>
                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faKey}
                    size="1x"
                    className="fav_icons"
                  />
                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/changepwd")}
                  >
                    Change Password
                  </div>
                </div>
                <div className="drop_down_section">
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    size="1x"
                    className="fav_icons"
                  />

                  <div
                    className="dropdown_contents"
                    onClick={() => (window.location.href = "/signout")}
                  >
                    Sign Out
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
       )}
    </div>
  );
};

export default Header;
