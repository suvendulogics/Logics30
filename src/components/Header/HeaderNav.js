import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import "@progress/kendo-theme-default/dist/all.css";
import Calendars from "../Calendars/Calendars";
import MainMenu from "../Header/HeaderTabs";
import { removeTabData, setTabData } from "../../store/action/action";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse,faCalendarDays  } from "@fortawesome/free-solid-svg-icons";


const Title = (props) => {
  return (
    <React.Fragment>
    {props.content === "Welcome" ? (
      <> 
        <FontAwesomeIcon icon={faHouse} color="goldenrod" style={{ paddingRight: "4px", width: "15px", height: "15px", marginBottom: "2px" }} />
        {props.content}
        <span className="k-spacer" />
        <span
          className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"
          onClick={() => props.onTabRemove(props.content)}
        ></span>
      </>
    ) : props.content === "Calendar" ? (
      <>
        <FontAwesomeIcon icon={faCalendarDays} color="#428bca" style={{ paddingRight: "4px", width: "15px", height: "15px", marginBottom: "2px" }} />
        {props.content}
        <span className="k-spacer" />
        <span
          className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"
          onClick={() => props.onTabRemove(props.content)}
        > <span className="k-icon k-i-x" /></span>
      </>
    ) : (
      <>
        {props.content}
        <span className="k-spacer" />
        <span
          className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base k-icon-button"
          onClick={() => props.onTabRemove(props.content)}
        >
          <span className="k-icon k-i-x" />
        </span>
      </>
    )}
  </React.Fragment>
  

  );
};
console.log("mainmenuhead", MainMenu);
const HeaderNav = () => {
  const selector = useSelector((state) => state.tabReducer.tabs);
  const selectorTab = useSelector((state) => state.tabReducer.addedTab);
  const currentIndex = useSelector((state) => state.tabReducer.currentIndex);
  const [selected, setSelected] = React.useState(0);
  console.log("selected", selected);
  const [tabs, setTabs] = React.useState(selector);
  const dispatch = useDispatch();
  console.log("tabs", tabs);

  useEffect(() => {
    setTabs(selector);
    console.log("tabsuse", MainMenu);
    const currentIndext = selector.findIndex(
      (value) => value.title === selectorTab.title
    );
    const tabExists = tabs.some((tab) => tab.title === selectorTab.title);
    const currentIndexnow = selector.filter(
      (value) => value.title === selectorTab.title
    );
    console.log("currentIndexnow", currentIndexnow.length);
    if (currentIndext > 0) {
      setSelected(currentIndext);
    } else {
      setSelected(selector.length - 1);
    }

    console.log("currentIndext", currentIndext);

    console.log("selectorTab", selectorTab);
  }, [selector]);

  const handleSelect = (e) => {
    setSelected(e.selected);

    const currentTabs = tabs.filter(
      (value) => value.title === selectorTab.title
    );
    console.log("currentTabs", currentTabs);
  };

  const removeTab = (tab) => {
    console.log("remove", tab);

    let newTabs = tabs.filter((item) => {
      return item.title !== tab;
    });

    dispatch(removeTabData(newTabs));
    // if (menuItem !== "Welcome") {
    //   setOpenTabs(openTabs.filter((tab) => tab.name !== menuItem));
    // }
  };

  return (
    <React.Fragment>
      <div
        className="example-config"
        style={{
          textAlign: "center",
        }}
      ></div>
     
      <TabStrip
        tabPosition="top"
        selected={selected}
        onSelect={handleSelect}
        //  scrollable={true}
        // style={{width:"50%"}}
      >
        {tabs.map((tab) => (
          <TabStripTab
            title={
              <Title
                content={tab.title}
                onTabRemove={(tab) => removeTab(tab)}
              />
            }
            key={tab.id}
          >
            <div
              className="tab_content"
              style={{
                display: "flex",
                height: "100vh",
                overflow: "auto",
                fontSize: "18px",
                fontWeight: "800",
              }}
            >
              {tab.content}
            </div>
          </TabStripTab>
        ))}
      </TabStrip>
     
  
    </React.Fragment>
  );
};

export default HeaderNav;

