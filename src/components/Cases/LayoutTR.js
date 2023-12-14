import React, { useState, useEffect, useRef } from "react";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Input, Checkbox, MaskedTextBox } from "@progress/kendo-react-inputs";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { DatePicker } from "@progress/kendo-react-dateinputs";
import {
  faTriangleExclamation,
  faShareSquare,
  faAddressCard,
  faPhone,
  faHome,
  faList,
  faCogs,
  faBriefcase,
  faUniversity,
  faBuilding,
  faAngleDoubleLeft,
  faCubes,
  faStar,
  faMinusCircle,
  faPlusCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@progress/kendo-theme-default/dist/all.css";
import { Error } from "@progress/kendo-react-labels";
import "../Cases/NewTR.css";
import { Button } from "@progress/kendo-react-buttons";
import { Splitter, SplitterPane } from "@progress/kendo-react-layout";
import SplitPane from "react-split-pane";
import Activities from "./Activities";
import ActivitiesMob from "./ActivitiesMob";
import SubHeaderTR from "./SubHeaderTR";
import NewTR from "./NewTR";
import NewTRmob from "./NewTRmob";
import SubHeaderFirst from "./SubHeaderFirst";
const LayoutTR = () => {
  const [showFields, setShowFields] = useState(false);
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showActivities, setShowActivities] = useState(true);

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
      size: "80%",
      collapsible: true,
      min: "80%",
    },
    {},
    {
      size: "20%",
      resizable: false,
      collapsible: true,
      min: "40px",
      //   max:"15%"
    },
  ]);
  const onNestedChange = (event) => {
    setNestedPanes(event.newState);
  };

  return (
    <div>
         {/* <SubHeaderFirst/> */}
      {windowWidth >= 768 ? (
        // <Splitter
        //   style={{ width: "84vw" }}
        //   panes={nestedPanes}
        //   onChange={onNestedChange}
        // >
          <SubHeaderTR/>

          // {/* <div>{showActivities && <Activities />}</div> */}
        // {/* </Splitter> */}
      ) : (
        <SubHeaderTR/>
       
      )}
    </div>
  );
};

export default LayoutTR;
