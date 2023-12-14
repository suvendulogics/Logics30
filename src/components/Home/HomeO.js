import React, { useState } from "react";
import "../../styles/Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PanelBar, PanelBarItem } from "@progress/kendo-react-layout";
import { faArrowRight,faChevronUp } from "@fortawesome/free-solid-svg-icons";

const IRSManual = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
 
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


  const [isCollapsedSide, setIsCollapsedSide] = useState(false);

  const toggleCollapseSide = () => {
    setIsCollapsedSide(!isCollapsedSide);
  };
  return (
    <div id="welcome" className="welcomehome">
      <div id="example">
        <div className="demo-section">
          <b></b>
          {/* <label id="lblsetAsDefault" className="lblsetAsDefault">
            Set as default page
          </label> */}
          {/* <input
            name="defaultSwitch"
            type="checkbox"
            id="defaultSwitch"
            onClick="setDefaultPage();"
          /> */}
        </div>
      </div>
      <div className="panel-wrap hidden-on-narrow">
        <div id="teammates" className="widget" style={{ marginTop: "5px" }}>
          <h3>
            Latest Announcements{" "}
            <FontAwesomeIcon icon={faChevronUp}  className={`iconup ${
                isCollapsed ? "collapsed" : "expanded"
              }`}
              
              onClick={toggleCollapse}/>
           
          </h3>
          {!isCollapsed && (
          
                 <div id="divAnnouncements">
            <div className="client_portal">
              Client Portal with Amazing Features! - 5/29/2023
            </div>
            <div style={{ padding: "14px" }}>
              <p className="para_details">
                We are thrilled to share the news about the
                <strong>
                  <span> launch of our upgraded client portal</span>
                </strong>{" "}
                Designed to enhance your experience and streamline interactions
                with your clients.
              </p>
              <p className="para_details">
                Our client portal comes packed with incredible functionalities.
                Such as, <strong>Faster, Stable and Mobile Friendly</strong>
                <strong>
                  , Payment Feature, Customizable Theme, News and Announcements,
                  And Many More to Come
                </strong>
                .
              </p>
              <p className="para_details">
                <span>
                  Our new client portal will revolutionize how you interact with
                  our services, providing a seamless and efficient experience
                  throughout your journey with us. We’re excited to embark on
                  this new chapter and look forward to serving you better than
                  ever before!
                </span>
              </p>
              <p className="para_details">
                <span>
                  Please reach out to our dedicated support line or email us at
                  support@logics.com for more information.
                </span>
              </p>
              <p className="wysiwyg-text-align-justify para_details">
                <img
                  src="https://support.irslogics.com/hc/article_attachments/16042062225812"
                  alt="cropped.png"
                  width="373"
                  height="207"
                />
              </p>
            </div>
            <div className="client_portal">
              Scheduled Maintenance on 21-Dec-2022 @ 10:00pm CST - 12/16/2022
            </div>
            <div style={{ padding: "14px" }}>
              <p className="para_details">
                Please be informed that IRSLogics will be performing{" "}
                <span>
                  <strong>Maintenance</strong>{" "}
                </span>
                impacting our clients on <strong>21-Dec-2022</strong> beginning{" "}
                <strong>10:00 PM</strong> <strong>CST</strong>.
              </p>
              <p className="para_details">
                During this window, we will be working on the performance
                upgrades to our servers, There may be downtime related to our
                public API/Rules as we perform maintenance.
              </p>
              <p className="para_details">
                If you have any questions about the maintenance or which of your
                services may be affected, please open a Ticket or email us at
                support@logics.com, and we will be happy to help you further.
                {/* <br><br> */}
              </p>
            </div>
            <div className="client_portal">
              A2P 10DLC registration required - 10/18/2022
            </div>
            <div style={{ padding: "14px" }}>
              <p className="para_details">
                <strong>Register now</strong> to benefit from improved
                deliverability and increased throughput in the new verified A2P
                10DLC ecosystem. A2P 10DLC comes with{" "}
                <strong>new registration requirements</strong> for businesses
                that intend to send long-code messages to AT&amp;T in the US.
              </p>
              <p className="para_details">
                A2P 10DLC refers to a system in the United States that allows
                businesses to send Application-to-Person (A2P) type messaging
                via standard 10-digit long-code (10DLC) phone numbers. Carriers
                in the US consider all Logics traffic to be A2P. Carriers’ A2P
                10DLC offerings provide better delivery quality and lower
                filtering risk than long code SMS of the past, using the same
                phone numbers.
              </p>
              <h3>What do I need to do?</h3>
              <p className="para_details">
                If you do not send any messages to users in the United States
                using long-code numbers, you do not need to do anything.
              </p>
              <p className="para_details">
                If you send messages to the United States using long code
                numbers you have the following registration options based on
                your Tax ID status, volume, and use case:
              </p>
              <ul>
                <li className="list_data">
                  If you have a Tax ID (EIN) and send under 6,000 message
                  segments per day, you should re-register for Low Volume
                  Standard Brands
                </li>
                <li className="list_data">
                  If you have a Tax ID (EIN) and send over 6,000 message
                  segments per day, you should re-register for appropriate
                  campaign types within Standard Brands
                </li>
                <li className="list_data">
                  If you don’t have a Tax ID (EIN), the registration
                  requirements have changed. Please await further guidance on
                  registration.
                </li>
              </ul>
            </div>
          </div>
           
          )}
        </div>

        <div id="main-content" >
          <div id="checklist" className="widget">
            <h3>
              Before you start ...{" "}
              <FontAwesomeIcon icon={faChevronUp}  className={`icon_up ${
                isCollapsed ? "collapsed" : "expanded"
              }`}
              
              onClick={toggleCollapseSide}/>
              {/* <span  className={`collapse k-icon k-i-arrowhead-n ${
                isCollapsedSide ? "collapsed" : "expanded"
              }`}
              onClick={toggleCollapseSide}></span> */}
            </h3>
            {!isCollapsedSide && (
            <div >
              <ul className="ulchk">
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  Watch{"   "}{"   "}{" "}
                  <a
                    href=""
                    onClick="parent.openTabOrWindow('pngTutorials', 'Tutorials', null, 'https://irslogics.zendesk.com/hc/en-us/categories/200174926-Video-Tutorials',205, 350);return false;"
                  >
                    <b className="bold_content">Video Tutorials</b>
                  </a>{" "}
                </li>
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  Visit your{" "}
                  <a
                    href=""
                    onClick="parent.openTabOrWindow('wndSettings', 'Settings', null, 'Settings.aspx',400, 550); return false;"
                  >
                    Settings
                  </a>{" "}
                  page to
                  <br/><br/>
                    Review your <b className="bold_content">email notification</b> settings. By default you
                  receive all notification emails.
                  <br/><br/>
                  Create your <b className="bold_content">Email Signature</b>
                  <br/><br/>
                </li>
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  To create a <b className="bold_content">new case</b>, simply double-click on 'New Case'
                  under 'Cases'
                </li>
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  Check out and test your current <b className="bold_content">case filters</b>. Create
                  new filters if needed by double-clicking
                  <br/>
                  on 'New Filter' under 'Cases'.
                </li>
              </ul>
              <ul id="ulAdminUser" className="ulchk">
                <li className="side_content">
                  {" "}
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  To setup <b className="bold_content">additional users</b>, visit{" "}
                  <a
                    href=""
                    onClick="parent.openTabOrWindow('pngUsersList', 'Users', 'icon-usermagnify', ' UserManagement/UsersListTeam.aspx',400, 550); return false;"
                  >
                    User Management
                  </a>{" "}
                  and click on 'New User' button.
                </li>
              </ul>
              <ul id="ulAdminGeneral" className="ulchk">
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  To setup <b className="bold_content">custom forms and letters</b>, visit{" "}
                  <a
                    href=""
                    onClick="parent.openTabOrWindow('frmForms', 'Forms Admin', 'icon-pagewhiteoffice', ' Admin/Forms.aspx',400, 550); return false;"
                  >
                    Forms Admin
                  </a>{" "}
                  and follow the instructions on right panel.
                  <br/>
                  You can also watch the training video located in Tutorials
                  section.
                </li>
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  To setup <b className="bold_content">Lead Sources and Marketing Campaigns</b>, visit{" "}
                  <a
                    href=""
                    onClick="parent.openTabOrWindow('frmCampaigns', 'Lead Sources', 'icon-television', 'Admin/Campaigns.aspx',400, 550); return false;"
                  >
                    Lead Source Admin
                  </a>
                  .
                </li>
              </ul>
              <ul id="ulAdminCompany" className="ulchk">
                <li className="side_content">
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="right_arrow"
                  />
                  Visit{" "}
                  <a
                    href=""
                    onClick="parent.openTabOrWindow('frmAccountSettings', 'Your irsLogics Account', 'icon-databasegear', 'Admin/AccountSettings.aspx',400, 550); return false;"
                  >
                    Your Account
                  </a>{" "}
                  page to
                  <br/><br/>
                
                  Complete or change your <b className="bold_content">company profile</b> information.
                  Verify that your company's address,
                  <br/>
                  phone &amp; fax numbers are entered correctly.
                  <br/><br/>
                  Upload your <b className="bold_content">company logo</b>. (the logo is used in
                  engagement letters and other custom forms)
                </li>
              </ul>
            </div>
             )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IRSManual;

