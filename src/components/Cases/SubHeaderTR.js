import React, { useState, useEffect, useRef } from "react";
import { Splitter } from "@progress/kendo-react-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faCogs,
  faComments,
  faCreditCard,
  faCreditCardAlt,
  faFileAlt,
  faPaste,
  faServer,
  faTasks,
} from "@fortawesome/free-solid-svg-icons";
import Activities from "./Activities";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import "../../styles/SubHeaderTR.css";
import SubHeaderFirst from "./SubHeaderFirst";
import SubHeaderFirstMob from "./SubHeaderFirstMob";
import NewTR from "./NewTR";
import NewTRmob from "./NewTRmob";
import Documents from "./Documents";
import DocumentsPopup from "./DocumentsPopup";
import Services from "./Services";
import Loans from "./Loans";
import Forms from "./Forms";
import Tasks from '../Tasks/Tasks';
import Transcript from "../Transcript/Transcript";
import '../../styles/Transcript.css';

const SubHeaderTR = () => {
  const [selected, setSelected] = React.useState(0);
  // const handleSelect = (e) => {
  //   setSelected(e.selected);
  // };
  const [showActivities, setShowActivities] = useState(true);
  const [showDocuments, setShowDocuments] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDocumentsPopup, setShowDocumentsPopup] = useState(false);
  const handleSelect = (e) => {
    setSelected(e.selected);
    if (e.selected === 4) {
      setShowDocumentsPopup(true);
    }
  };

  const closeDocumentsPopup = () => {
    setShowDocumentsPopup(false);
  };
  const openDocuments = () => {
    setShowDocumentsPopup(false);
    setShowDocuments(true);
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
  const [nestedPanes, setNestedPanes] = React.useState([
    {
      size: "85%",
      collapsible: true,
      min: "80%",
    },
    {},
    {
      size: "25%",
      resizable: false,
      collapsible: true,
      min: "40px",
    },
  ]);
  const onNestedChange = (event) => {
    setNestedPanes(event.newState);
  };
  const TabWithTitle = ({ icon, title }) => (
    <div>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "steelblue", marginRight: "5px" ,fontSize:"13px"}}
      />
      {title}
    </div>
  );
  const TabProfile = ({ icon, title }) => (
    <div>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "lightslategrey", marginRight: "5px",fontSize:"13px" }}
      />
      {title}
    </div>
  );
  const TabBilling = ({ icon, title }) => (
    <div>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "forestgreen", marginRight: "5px",fontSize:"13px" }}
      />
      {title}
    </div>
  );
  const TabTasks = ({ icon, title }) => (
    <div>
      <FontAwesomeIcon
        icon={icon}
        style={{ color: "darkorange", marginRight: "5px",fontSize:"13px" }}
      />
      {title}
    </div>
  );

  return (
    <div
      id="casTabs"
      role="none"
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "rgb(208, 221, 240)",
        borderBottom: "1px solid rgb(158, 193, 243)",
        position: "fixed",
        width:"100%"
      }}
      className="sub_header_tr"
    >
      {windowWidth >= 768 ? (
        <div>
          <SubHeaderFirst />
          <div style={{ display: "flex", flexDirection: "row", 
width:"100%"
          // width: "84vw" 
          }}>
            {/* <Splitter
            style={{ height: "100vmin" }}
            panes={nestedPanes}
            onChange={onNestedChange}
          > */}
            <TabStrip
              selected={selected}
              onSelect={handleSelect}
              style={{
                // width: "72vw",
                width:"88%",
                backgroundColor: "rgb(208, 221, 240)",
                borderBottom: "1px solid rgb(158, 193, 243)",
              }}
            >
              <TabStripTab
                title={
                  <TabWithTitle
                    icon={faAddressCard}
                    title="Profile"
                    style={{ color: "red" }}
                  />
                }
                unselectable="on"
                className="cont_div"
               
              >
                <NewTR/>
              </TabStripTab>

              <TabStripTab
                title={<TabProfile icon={faComments} title="Interview" />}
                unselectable="on"
                className="cont_div"
              >
                Interview
              </TabStripTab>

              <TabStripTab
                title={<TabBilling icon={faCreditCard} title="Billing" />}
                unselectable="on"
                className="cont_div"
              >
                Billing
              </TabStripTab>

              <TabStripTab
                title={<TabBilling icon={faPaste} title="Forms" />}
                unselectable="on"
                className="cont_div"
                id="example_1"
              >
                <Forms/>
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle icon={faServer} title="Documents" />}
                unselectable="on"
                className="cont_div"
              >
                {showDocuments && <Documents />}
              </TabStripTab>

              <TabStripTab
                title={<TabProfile icon={faCogs} title="Services" />}
                unselectable="on"
                className="cont_div"
              >
                <Services />
              </TabStripTab>

              <TabStripTab
                title={<TabTasks icon={faTasks} title="Tasks" />}
                unselectable="on"
                className="cont_div"
              >
                <Tasks/>
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle icon={faFileAlt} title="Loans" />}
                unselectable="on"
                className="cont_div"
              >
                <Loans />
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle icon={faFileAlt} title="Transcript" />}
                unselectable="on"
                className="cont_div"
              >
                {/* hi */}
           <div> <Transcript id="subtabs_transcript"/>
            </div>    
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle icon={faFileAlt} title="Finance" />}
                unselectable="on"
                className="cont_div"
              >
                Finance
              </TabStripTab>
            </TabStrip>

            {showActivities && <Activities />}
            {/* </Splitter> */}
          </div>

          {showDocumentsPopup && (
            <DocumentsPopup
              onYesClick={openDocuments}
              onNoClick={closeDocumentsPopup}
            />
          )}
        </div>
      ) : (
        <div>
          <SubHeaderFirstMob />
          <div
            id="mob_tab"
            style={{ display: "flex", flexDirection: "row", marginTop: "65px" }}
          >
            <TabStrip
              selected={selected}
              onSelect={handleSelect}
              scrollable={true}
              style={{
                // width: "72vw",
                backgroundColor: "rgb(208, 221, 240)",
                borderBottom: "1px solid rgb(158, 193, 243)",
              }}
            >
              <TabStripTab
                title={<TabWithTitle title="Profile" />}
                unselectable="on"
                className="cont_div"
              >
                <NewTRmob />
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Interview" />}
                unselectable="on"
                className="cont_div"
              >
                Interview
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Billing" />}
                unselectable="on"
                className="cont_div"
              >
                Billing
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Forms" />}
                unselectable="on"
                className="cont_div"
              >
                <Forms/>
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Documents" />}
                unselectable="on"
                className="cont_div"
              >
                {showDocuments && <Documents />}
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Services" />}
                unselectable="on"
                className="cont_div"
              >
                <Services />
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Tasks" />}
                unselectable="on"
                className="cont_div"
              >
                <Tasks/>
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Loans" />}
                unselectable="on"
                className="cont_div"
              >
                <Loans />
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Transcript" />}
                unselectable="on"
                className="cont_div"
              >
                Transcript
              </TabStripTab>

              <TabStripTab
                title={<TabWithTitle title="Finance" />}
                unselectable="on"
                className="cont_div"
              >
                Finance
              </TabStripTab>
            </TabStrip>

            {showActivities && <Activities />}
          </div>

          {showDocumentsPopup && (
            <DocumentsPopup
              onYesClick={openDocuments}
              onNoClick={closeDocumentsPopup}
            />
          )}
        </div>
      )}
    </div>
  );
};
export default SubHeaderTR;
