import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import HeaderMob from "../Header/HeaderMob";
import Search from "../Search/Search";
import SearchMob from "../Search/SearchMob";
import Calendars from "../Calendars/Calendars";
import Meetings from "../Meetings/Meetings";
import CalendarsMob from "../Calendars/CalendarsMob";
import { Splitter } from "@progress/kendo-react-layout";
import RightPanel from "../Main/RightPanal";
import IRSPublications from "../IRS Resources/IRSPublications";
import Home from "../Home/Home";
import NewTR from "../Cases/NewTR";
import LayoutTR from "../Cases/LayoutTR";
import Filters from "../Filters/Filters";
import {useNavigate} from 'react-router-dom';
function Welcome() {
  const [openTabs, setOpenTabs] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const addTab = (menuItem, icon) => {
    const tabName = menuItem;

    if (!openTabs.some((tab) => tab.name === tabName)) {
      setOpenTabs([...openTabs, { name: tabName, icon: icon }]);
    }
  };

  const closeTab = (menuItem) => {
    setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
  };
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

  const [nestedPanes, setNestedPanes] = React.useState([
    {
      size: "12%",
      collapsible: true,
    },
    {},
    {
      size: "88%",
      resizable: false,
      collapsible: true,
    },
  ]);
  const onNestedChange = (event) => {
    setNestedPanes(event.newState);

  };
  if(token != null){
  return (
    <div>
      {windowWidth >= 768 ? (
        <div>
          <Splitter
            style={{ height: "100vmin" }}
            panes={nestedPanes}
            onChange={onNestedChange}
            id="welcome_split"
          >
            <div>
              <Search addTab={addTab} />
            </div>

            <div>
              <RightPanel />
            </div>
          </Splitter>
        </div>
      ) : (
        <div>
          <div>
            {" "}
            <HeaderMob />
          </div>
          <div>
            {/* <Search addTab={addTab} /> */}
          </div>
          <div>
            <RightPanel />
          </div>
          <div>
            {/* <SearchMob addTab={addTab} /> */}
            {/* <HeaderMob /> */}
            {/* <Home/> */}
            {/* <IRSPublications/> */}
       
          </div>
        </div>
      )}
    </div>
  );}
  else{
    {console.log("hi")}
    window.location.replace('/');
  }
}

export default Welcome;
