import React, { useState, useEffect } from "react";
import "../../styles/HeaderMob.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faClose,
  faSearch,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import {
  faUser,
  faQuestionCircle,
  faCog,
  faKey,
  faSignOutAlt,
  //   faBars,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Settings from "../Basic/Settings";
import HelpDesk from "../Basic/HelpDesk";
import ToolTip from "../Basic/ToolTip";
import Search from "../Search/Search";
import SearchMob from "../Search/SearchMob";

const HeaderMob = () => {
  const [userInfo, setUserInfo] = useState({});
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const names = "sandbox";
  const [icon, setIcon] = useState(faBars);
  const [searchMobVisible, setSearchMobVisible] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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

  const addTab = (menuItem) => {
    if (!openTabs.includes(menuItem)) {
      setOpenTabs([...openTabs, menuItem]);
    }
  };

  const closeTab = (menuItem) => {
    setOpenTabs(openTabs.filter((tab) => tab !== menuItem));
  };
  const toggleSearchMob = () => {
    setSearchMobVisible(!searchMobVisible);
    setIcon(icon === faBars ? faClose : faBars);
  };
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleShowSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <header className="headermob">
      {/* <div className="mob_menu_iconmob">
        <FontAwesomeIcon
          icon={faBars}
          className="mob_menu_iconmob"
          onClick={toggleSearchMob}
        />
        <div className={`search_div_mob${searchMobVisible ? " visible" : ""}`}>
          {searchMobVisible && <Search addTab={addTab} />}
        </div>
      </div> */}
      <div className="mob_menu_iconmob">
      <FontAwesomeIcon
        icon={searchMobVisible ? faTimes : faBars}
        className="mob_menu_iconmob"
        onClick={toggleSearchMob}
      />
      <div className={`search_div_mob${searchMobVisible ? ' visible' : ''}`}>
        {searchMobVisible && <Search addTab={addTab} />}
      </div>
    </div>

      <div className="profile-iconmob">
        <div className="round-iconmob" onClick={toggleDropdown}>
          <span>{profiileName}</span>

          {isDropdownOpen && (
            <div className="dropdownmob">
              <div className="pro_detailsmob">
                <div className="image_detailsmob">
                  {" "}
                  <div className="round-iconsmob" onClick={toggleDropdown}>
                    <span>{profiileName}</span>
                  </div>
                </div>
                <div className="pro_details_txtmob">
                  <div className="name_dropdownmob">{userInfo.name}</div>
                  <div className="mail_dropdownmob">{userInfo.email}</div>
                </div>
              </div>
              <div className="custom-line"></div>

              <div className="drop_down_sectionmob">
                <FontAwesomeIcon
                  icon={faQuestionCircle}
                  size="1x"
                  className="fav_iconsmob"
                />
                <div
                  className="dropdown_contentsmob"
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
              <div className="drop_down_sectionmob">
                <FontAwesomeIcon
                  icon={faCog}
                  size="1x"
                  className="fav_iconsmob"
                />
                <div
                  className="dropdown_contentsmob"
                  onClick={() => (window.location.href = "/settings")}
                >
                  Settings
                </div>
              </div>
              <div className="drop_down_sectionmob">
                <FontAwesomeIcon
                  icon={faKey}
                  size="1x"
                  className="fav_iconsmob"
                />
                <div
                  className="dropdown_contentsmob"
                  onClick={() => (window.location.href = "/changepwd")}
                >
                  Change Password
                </div>
              </div>
              <div className="drop_down_sectionmob">
                <FontAwesomeIcon
                  icon={faSignOutAlt}
                  size="1x"
                  className="fav_iconsmob"
                />

                <div
                  className="dropdown_contentsmob"
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
  );
};

export default HeaderMob;
