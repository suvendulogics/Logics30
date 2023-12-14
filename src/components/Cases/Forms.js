import React from "react";
import "../../styles/Forms.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsAlt, faCopy, faPencilSquare, faPrint } from "@fortawesome/free-solid-svg-icons";

const Forms = () => {
  return (
    <div>
      <div id="example" className="forms">
        <div
          id="toolbar"
         
          style={{ touchAction: "none",width:"100%",display:"flex",justifyContent:"space-between" }}
        >
         
          <div
            style={{ visibility: "visible" ,display:"flex",justifyContent:"center",alignItems:"center"}}
          >
            <div id="divIRSForms">
              <label>
                <FontAwesomeIcon
                  icon={faCopy}
                  style={{
                    verticalAlign: "middle",
                    paddingLeft: "8px",
                    color: "white",
                    fontSize:"11px"
                  }}
                />
                <b style={{ padding: "4px", color: "white" ,fontSize:"12px"}}>Form:</b>
              </label>
            
                <span>
                  <input
                    type="text"
                    role="combobox"
                    placeholder="Select or Type"
                    style={{ width: "180px",height:"22px",borderRadius:"4px",border:"none" }}  />
                </span>
               
            
            </div>
          </div>
        

        <div style={{display:"flex",flexDirection:"row"}}>
        <div
            className=" esign"
          
          >
            <button
              id="btnESignOTS"
              data-role="button"
              role="button"
              className=" esign"
            >
              <FontAwesomeIcon icon={faPencilSquare} className="fa fa-pencil-square-o "/>&nbsp;&nbsp;&nbsp;E-Sign OTS
            </button>
          </div>
          <div
            data-uid="19497eb8-4f16-4597-9f65-725a1da240bb"
            data-overflow="never"
            style={{ visibility: "visible" }}
          >
            <button
              id="btnFullScreen"
              className="fullscreen"
              onclick="changeFormScreenModeChild()"
              data-role="button"
              role="button"
            >
              <FontAwesomeIcon icon={faArrowsAlt} className="fa fa-arrows-alt"/>Full Screen
            </button>
          </div>
          <div
          >
            <button
              id="btnPrintPdf"
              className="print"
              onclick="GetPdf();"
              data-role="button"
              role="button"
              aria-disabled="true"
              disabled="disabled"
              tabindex="0"
            >
              <FontAwesomeIcon className="fa fa-print" icon={faPrint}/>Print
            </button>
          </div>
        
          </div>
        </div>
      </div>

      <div className="styleform">
        <b>Form 2848</b>
        <br />
        Power of Attorney and Declaration of Representative
        <br />
        <br />
        <b>Form 8821</b>
        <br />
        Tax Information Authorization
        <br />
        <br />
        <b>Form 4506</b>
        <br />
        Request for Copy of Tax Return
        <br />
        <br />
        <b>Form 4506-T</b>
        <br />
        Request for Transcript of Tax Return
        <br />
        <br />
        <b>Form 433-A</b>
        <br />
        Collection Information Statement for Wage Earners and Self-Employed
        Individuals
        <br />
        <br />
        <b>Form 433-A (OIC)</b>
        <br />
        Collection Information Statement for Wage Earners and Self-Employed
        Individuals
        <br />
        <br />
        <b>Form 433-B</b>
        <br />
        Collection Information Statement for Businesses
        <br />
        <br />
        <b>Form 433-B (OIC)</b>
        <br />
        Collection Information Statement for Businesses
        <br />
        <br />
        <b>Form 433-D</b>
        <br />
        Installment Agreement
        <br />
        <br />
        <b>Form 433-F</b>
        <br />
        Collection Information Statement Worksheet to Calculate an Offer Amount
        <br />
        <br />
        <b>Form 433-H</b>
        <br />
        Installment Agreement Request and Collection Information Statement
        <br />
        <br />
        <b>Form 656</b>
        <br />
        Offer In Compromise
        <br />
        <br />
        <b>Form 656-A</b>
        <br />
        Income Certification for Offer in Compromise. Application Fee and
        Payment
        <br />
        <br />
        <b>Form 656-L</b>
        <br />
        Offer In Compromise (Doubt as to Liability)
        <br />
        <br />
        <b>Form 656-PPV</b>
        <br />
        Offer in Compromise - Periodic Payment Voucher
        <br />
        <br />
        <b>Form 9423</b>
        <br />
        Collection Appeal Request
        <br />
        <br />
        <b>Form 9465</b>
        <br />
        Installment Agreement Request
        <br />
        <br />
        <b>Form 9465-FS</b>
        <br />
        Installment Agreement Request
        <br />
        <br />
        <b>Form 911</b>
        <br />
        Request for Taxpayer Advocate Service Assistance
        <br />
        <br />
        <b>Form 8379</b>
        <br />
        Injured Spouse Allocation
        <br />
        <br />
        <b>Form 12153</b>
        <br />
        Request for a Collection Due Process Hearing
        <br />
        <br />
        <b>Form 12277</b>
        <br />
        Application for Withdrawal of Filed Form 668(Y), Notice of Federal Tax
        Lien
        <br />
        <br />
        <b>Form 12256</b>
        <br />
        Withdrawal of Request for Collection Due Process or Equivalent Hearing
        <br />
        <br />
        <b>Form 12507</b>
        <br />
        Innocent Spouse Statement
        <br />
        <br />
        <b>Form 12509</b>
        <br />
        Statement of Disagreement
        <br />
        <br />
        <b>Form 843</b>
        <br />
        Claim for Refund and Request for Abatement
        <br />
        <br />
        <b>Form 4868</b>
        <br />
        Application for Automatic Extension of Time To File U.S. Individual
        Income Tax Return
        <br />
        <br />
        <b>Form 13711</b>
        <br />
        Request for Appeal of Offer in Compromise
        <br />
        <br />
        <b>Form 7004</b>
        <br />
        Application for Automatic Extension of Time To File, Certain Business
        Income Tax, Information, and Other Returns
        <br />
        <br />
        <b>Form 56</b>
        <br />
        Notice Concerning Fiduciary Relationship
        <br />
        <br />
        <b>Form 872</b>
        <br />
        Consent to Extend the Time to Assess Tax
        <br />
        <br />
        <b>Form 7826</b>
        <br />
        Merchant Pre-Qualification Form
        <br />
        <br />
        <b>Form SS-4</b>
        <br />
        Application for Employer Identification Number
        <br />
        <br />
        <b>Form 4681</b>
        <br />
        Insolvency Worksheet
        <br />
        <br />
        <b>Form 8879 2017</b>
        <br />
        IRS e-file Signature Authorization
        <br />
        <br />
        <b>Form 8879 2018</b>
        <br />
        IRS e-file Signature Authorization
        <br />
        <br />
        <b>Form 8879 2019</b>
        <br />
        IRS e-file Signature Authorization
        <br />
        <br />
        <b>Form 8952</b>
        Voluntary Classification Settlement Program (VCSP)
        <br />
        <br />
        <b>Form 9000</b>
        <br />
        Alternative Media Preference
        <br />
        <br />
        <b>Form 14039</b>
        <br />
        Identity Theft Affidavit
        <br />
        <br />
        <b>Form 2553</b>
        <br />
        Election by a Small Business Corporation
        <br />
      </div>
    </div>
  );
};
export default Forms;
