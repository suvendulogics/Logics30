import React, { useState, useRef } from "react";
import "../../styles/IRSPublications.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

const IRSPublications = () => {
  return (
    <div className="irs_pub">
      <div>
        <div className="pdfheader">Administrative</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        {/* <FontAwesomeIcon icon="fal fa-file-pdf" style={{color: "#831b25",}} /> */}
          <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f23.pdf" target="_blank">
            <b>Form 23 and Instructions</b>- Application for Enrollment to
            Practice Before the Internal Revenue Service{" "}
            <span className="pdfrevision">(Rev. 1-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f8821.pdf" target="_blank">
            <b>Form 8821 and Instructions</b>- Tax Information Authorization{" "}
            <span className="pdfrevision">(Rev. 6-2008)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/i2848.pdf" target="_blank">
            <b>Instructions for Form 2848</b>- Power of Attorney and Declaration
            of Representative{" "}
            <span className="pdfrevision">(Revised 06-2008)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p470.pdf" target="_blank">
            <b>Publication 470</b> - Limited Practice without Enrollment{" "}
            <span className="pdfrevision">(Revised 01-1982)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p4245.pdf" target="_blank">
            <b>Publication 4245</b> - Power of Attorney Preparation Guide{" "}
            <span className="pdfrevision">(Revised 04-2009)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a
            href="http://www.irs.gov/pub/irs-utl/circular_230.pdf"
            target="_blank"
          >
            <b>Circular 230</b> - Regulations Governing the Practice of
            Attorneys, Certified Public Accountants, Enrolled Agents{" "}
            <span className="pdfrevision">(Revised 04-2008)</span>
          </a>
        </div>
        <div className="pdfheader">Appeals</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f9423.pdf" target="_blank">
            <b>Form 9423 and Instructions</b>- Collection Appeal Request{" "}
            <span className="pdfrevision">(Revised 01-1999)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f12153.pdf" target="_blank">
            <b>Form 12153 and Instructions</b>- Request for a Collection Due
            Process or Equivalent Hearing{" "}
            <span className="pdfrevision">(Revised 11-2006)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p5.pdf" target="_blank">
            <b>Publication 5</b> - Your Appeal Rights and How To Prepare a
            Protest If You Don't Agree{" "}
            <span className="pdfrevision">(Revised 01-1999)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p3605.pdf" target="_blank">
            <b>Publication 3605</b> Fast Track Mediation{" "}
            <span className="pdfrevision">(Revised 09-2002)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p4539.pdf" target="_blank">
            <b>Publication 4539</b> - Fast Track Settlement{" "}
            <span className="pdfrevision">(Revised 03-2007)</span>
          </a>
        </div>
        <div className="pdfheader">Bankruptcy</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p908.pdf" target="_blank">
            <b>Publication 908</b> - Bankruptcy Tax Guide{" "}
            <span className="pdfrevision">(Revised 03-2009)</span>
          </a>
        </div>
        <div className="pdfheader">Collection Information</div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f433d.pdf" target="_blank">
            <b>Form 433-D and Instructions</b>- Installment Agreement{" "}
            <span className="pdfrevision">(Revised 04-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f433f.pdf" target="_blank">
            <b>Form 433-F and Instructions</b>- Collection Information Statement{" "}
            <span className="pdfrevision">(Revised 06-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f9465.pdf" target="_blank">
            <b>Form 9465 and Instructions</b>- Installment Agreement Request{" "}
            <span className="pdfrevision">(Revised 12-2009)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p594.pdf" target="_blank">
            <b>Publication 594</b> - The IRS Collection Process{" "}
            <span className="pdfrevision">(Revised 07-2007)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1660.pdf" target="_blank">
            <b>Publication 1660</b> - Collection Appeal Rights{" "}
            <span className="pdfrevision">(Revised 03-2007)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1854.pdf" target="_blank">
            <b>Publication 1854</b> - How to prepare a Collection Information
            Statement (Form 433-A){" "}
            <span className="pdfrevision">(Revised 03-2010)</span>
          </a>
        </div>
        <div className="pdfheader">Employment</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1779.pdf" target="_blank">
            <b>Publication 1779</b> - Independent Contractor or Employee...{" "}
            <span className="pdfrevision">(Revised 08-2008)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1976.pdf" target="_blank">
            <b>Publication 1976</b> - Do You Qualify for Relief under Section
            530 <span className="pdfrevision">(Revised 05-2007)</span>
          </a>
        </div>
        <div className="pdfheader">Examinations</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p556.pdf" target="_blank">
            <b>Publication 556</b> - Examination of Returns, Appeal Rights, and
            Claims for Refund{" "}
            <span className="pdfrevision">(Revised 05-2008)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p3114.pdf" target="_blank">
            <b>Publication 3114</b> - Compliance Check, Audit, Examination or
            Review? <span className="pdfrevision">(Revised 01-2005)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p3498.pdf" target="_blank">
            <b>Publication 3498</b> - The Examination Process{" "}
            <span className="pdfrevision">(Revised 12-2008)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p3598.pdf" target="_blank">
            <b>Publication 3598</b> - The Audit Reconsideration Process{" "}
            <span className="pdfrevision">(Revised 04-2010)</span>
          </a>
        </div>
        <div className="pdfheader">General</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1.pdf" target="_blank">
            <b>Publication 1</b> - Your Rights as a Taxpayer{" "}
            <span className="pdfrevision">(Revised 05-2005)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p4048.pdf" target="_blank">
            <b>Publication 4048</b> - Special IRS Penalty Refund Offer{" "}
            <span className="pdfrevision">(Revised 11-2006)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/n609.pdf" target="_blank">
            <b>Notice 609</b> - Privacy Act Notice{" "}
            <span className="pdfrevision">(Revised 09-2009)</span>
          </a>
        </div>
        <div className="pdfheader">Information / Return Request</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f4506.pdf" target="_blank">
            <b>Form 4506 and Instructions</b>- Request for Copy of Tax Return{" "}
            <span className="pdfrevision">(Revised 01-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f4506t.pdf" target="_blank">
            <b>Form 4506-T and Instructions</b>- Request for Transcript of Tax
            Return <span className="pdfrevision">(Revised 01-2010)</span>
          </a>
        </div>
        <div className="pdfheader">Liens</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p783.pdf" target="_blank">
            <b>Publication 783</b> - Instructions on How to Apply for
            Certificate of Discharge of Property from Federal Tax Lien{" "}
            <span className="pdfrevision">(Revised 06-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p784.pdf" target="_blank">
            <b>Publication 784</b> - How to Prepare an Application for
            Certificate of Subordination of Federal Tax Lien{" "}
            <span className="pdfrevision">(Revised 06-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1024.pdf" target="_blank">
            <b>Publication 1024</b> - How to Prepare an Application for a
            Certificate of Nonattachment of Federal Tax Lien{" "}
            <span className="pdfrevision">(Revised 03-2006)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1450.pdf" target="_blank">
            <b>Publication 1450</b> - Instructions on How to Request a
            Certificate of Release of Federal Tax Lien{" "}
            <span className="pdfrevision">(Revised 12-2005)</span>
          </a>
        </div>
        <div className="pdfheader">Offer in Compromise</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f656b.pdf" target="_blank">
            <b>Form 656-B</b> - Offer in Compromise Booklet{" "}
            <span className="pdfrevision">(Revised 03-2009)</span>
          </a>
        </div>
        <div className="pdfheader">Penalties & Interest</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/n433.pdf" target="_blank">
            <b>Notice 433</b> - Interest and Penalty Information{" "}
            <span className="pdfrevision">(Revised 07-2006)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/i843.pdf" target="_blank">
            <b>Instructions for Form 843</b>{" "}
            <span className="pdfrevision">(Revised 12-2010)</span>
          </a>
        </div>
        <div className="pdfheader">Spousal Defense</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/i8379.pdf" target="_blank">
            <b>Form 8379 and Instructions</b>- Injured Spouse Allocation{" "}
            <span className="pdfrevision">(Revised 12-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/i8857.pdf" target="_blank">
            <b>Instructions for Form 8857</b>- Request for Innocent Spouse
            Relief <span className="pdfrevision">(Revised 09-2010)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f12507.pdf" target="_blank">
            <b>Form 12507</b> - Innocent Spouse Statement{" "}
            <span className="pdfrevision">(Revised 12-1999)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f12509.pdf" target="_blank">
            <b>Form 12509</b> - Statement of Disagreement{" "}
            <span className="pdfrevision">(Revised 01-2005)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p971.pdf" target="_blank">
            <b>Publication 971</b> - Innocent Spouse Relief{" "}
            <span className="pdfrevision">(Revised 02-2011)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p3512.pdf" target="_blank">
            <b>Publication 3512</b> - Innocent Spouse Relief (Brochure){" "}
            <span className="pdfrevision">(Revised 03-2001)</span>
          </a>
        </div>
        <div className="pdfheader">Taxpayer Assistance</div>
        <div className="custom-lines_irs"></div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/f911.pdf" target="_blank">
            <b>Form 911 and Instructions</b>- Request for Taxpayer Advocate
            Service Assistance{" "}
            <span className="pdfrevision">(Revised 06-2007)</span>
          </a>
        </div>
        <div className="pdflink">
        <FontAwesomeIcon icon={faFilePdf} className="pdf" />
          <a href="http://www.irs.gov/pub/irs-pdf/p1546.pdf" target="_blank">
            <b>Publication 1546</b> - Taxpayer Advocate Service{" "}
            <span className="pdfrevision">(Revised 01-2010)</span>
          </a>
        </div>
      </div>
    </div>
  );
};
export default IRSPublications;
