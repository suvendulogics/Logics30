import React, { useState, useEffect, useRef } from "react";
import {
  faListOl,
  faCheckCircle,
  faMoneyBillAlt,
  faFileAlt,
  faMobileAlt,
  faUnlink,
  faCog,
  faLongArrowAltRight,
  faBook,
} from "@fortawesome/free-solid-svg-icons";
import PowerOfAttorney from "./PowerOfAttorney";
import { TabStrip, TabStripTab } from "@progress/kendo-react-layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Input, Checkbox, MaskedTextBox } from "@progress/kendo-react-inputs";
import "../../styles/Services.css";
import LevyRelease from "./LevyRelease";
import TaxPreperation from "./TaxPreperation";
import ReqDocs from "./ReqDocs";
import PrgmStatus from "./PrgmStatus";
import Collections from "./Collections";
import PartialPay from "./PartialPay";
import IRSDecision from "./IRSDecision";
import StateDecision from "./StateDecision";
import IdentityTheft from "./IdentityTheft";
import PenaltyAbatement from "./PenaltyAbatement";
import TaxAutho from "./TaxAutho";
import ServiceCase from "./ServiceCase";

const Services = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);

  if (selectedComponent == null || "") {
    setSelectedComponent("ServiceDetails");
  }
  const handleViewComponentClicked = (component) => {
    setSelectedComponent(component);
  };

  const [selected, setSelected] = React.useState(1);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showDocumentsPopup, setShowDocumentsPopup] = useState(false);
  const handleSelect = (e) => {
    setSelected(e.selected);
    if (e.selected === 4) {
      setShowDocumentsPopup(true);
    }
  };

  return (
    <div style={{ height: "150vh", overflow: "auto" }}>
      <div className="section_out">
        <div className="text_name_service_out">Case Work</div>
      </div>
      <div className="services-component" id="services_style">
        <div className="content_fil">
          <div id="service_section">
            <TabStrip
              selected={selected}
              onSelect={handleSelect}
              scrollable={true}
            //   style={{
            //     width: "100%",
            //     marginTop: "35px",
            //     backgroundColor: "rgb(208, 221, 240)",
            //     borderBottom: "1px solid rgb(158, 193, 243)",
            //   }}
            >
              <TabStripTab
                title="Service Details"
                unselectable="on"
                className="cont_div_mob"
              >
                <ServiceCase />
              </TabStripTab>
              <TabStripTab
                title="Power Of Attorney"
                unselectable="on"
                className="cont_div_mob"
              >
                <PowerOfAttorney />
              </TabStripTab>
              <TabStripTab
                title="Tax Authority Contacts"
                unselectable="on"
                className="cont_div_mob"
              >
                <TaxAutho />
              </TabStripTab>
              <TabStripTab
                title="Levy Release"
                unselectable="on"
                className="cont_div_mob"
              >
                <LevyRelease />
              </TabStripTab>
              <TabStripTab
                title="Collections"
                unselectable="on"
                className="cont_div_mob"
              >
                <Collections />
              </TabStripTab>

              <TabStripTab
                title="Tax Preperation"
                unselectable="on"
                className="cont_div_mob"
              >
                <TaxPreperation />
              </TabStripTab>
              <TabStripTab
                title="Penalty Abatement"
                unselectable="on"
                className="cont_div_mob"
              >
                <PenaltyAbatement />
              </TabStripTab>
              <TabStripTab
                title="Identity Theft"
                unselectable="on"
                className="cont_div_mob"
              >
                <IdentityTheft />
              </TabStripTab>
              <TabStripTab
                title="Partial Payment Agree."
                unselectable="on"
                className="cont_div_mob"
              >
                <PartialPay />
              </TabStripTab>
              <TabStripTab
                title="Required Documents"
                unselectable="on"
                className="cont_div_mob"
              >
                <ReqDocs />
              </TabStripTab>
              <TabStripTab
                title="Program Status"
                unselectable="on"
                className="cont_div_mob"
              >
                <PrgmStatus />
              </TabStripTab>
              <TabStripTab
                title="IRS Decision"
                unselectable="on"
                className="cont_div_mob"
              >
                <IRSDecision />
              </TabStripTab>
              <TabStripTab
                title="State Decision"
                unselectable="on"
                className="cont_div_mob"
              >
                <StateDecision />
              </TabStripTab>
            </TabStrip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
