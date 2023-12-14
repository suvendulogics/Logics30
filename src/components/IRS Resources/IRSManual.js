import React, { useState } from "react";
import IRSLogo from "../../assets/IRSLogo.jpg";
import "../../styles/IRSManual.css";

const IRSManual = () => {
  return (
    <div id="welcome" className="welcomehomes">
      <table className="HeaderContainer" cellpadding="0" cellspacing="0">
        <colgroup>
          <col width="90" />
          <col width="190" />
          <col />
        </colgroup>

        <tbody>
          <tr>
            <td rowspan="2">
              <img src={IRSLogo} alt="Internal Revenue Service" />
            </td>
            <td className="FormTitle">
              <span>
                MANUAL
                <br />
                TRANSMITTAL
              </span>
            </td>
            <td className="FormTitle" style={{ textAlign: "right" }}>
              <span>Table of Contents</span>
            </td>
          </tr>

          {/* <div classNameName="manual-line"></div> */}

          <tr>
            <td style={{ paddingTop: "6px" }}>
              <span className="FormName">Department of the Treasury</span>
              <br />
              <span className="FormNameBold">Internal Revenue Service</span>
            </td>
            <td style={{ textAlign: "right" }}>
              <span className="FormNameBold">
                {/* <xsl:value-of select="manual/mt/mtdate"></xsl:value-of> */}
              </span>
            </td>
          </tr>
        </tbody>
      </table>



      <table className="Container">
                    <tbody><tr>
                        <td>
                            <ul className="List">

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=1" onclick="return openContent(2,1); ">
                            Part 1 Organization, Finance and Management
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=2" onclick="return openContent(2,2); ">
                            Part 2 Information Technology
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=3" onclick="return openContent(2,3); ">
                            Part 3 Submission Processing
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=4" onclick="return openContent(2,4); ">
                            Part 4 Examining Process
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=5" onclick="return openContent(2,5); ">
                            Part 5 Collecting Process
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=6" onclick="return openContent(2,6); ">
                            Part 6 Human Resources Management
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=7" onclick="return openContent(2,7); ">
                            Part 7 Rulings and Agreements
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=8" onclick="return openContent(2,8); ">
                            Part 8 Appeals
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=9" onclick="return openContent(2,9); ">
                            Part 9 Criminal Investigation
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=10" onclick="return openContent(2,10); ">
                            Part 10 Security, Privacy and Assurance
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=11" onclick="return openContent(2,11); ">
                            Part 11 Communications and Liaison
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=13" onclick="return openContent(2,13); ">
                            Part 13 Taxpayer Advocate Service
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=20" onclick="return openContent(2,20); ">
                            Part 20 Penalty and Interest
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=21" onclick="return openContent(2,21); ">
                            Part 21 Customer Account Services
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=22" onclick="return openContent(2,22); ">
                            Part 22 Taxpayer Education and Assistance
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=25" onclick="return openContent(2,25); ">
                            Part 25 Special Topics
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=30" onclick="return openContent(2,30); ">
                            Part 30 Administrative
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=31" onclick="return openContent(2,31); ">
                            Part 31 Guiding Principles
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=32" onclick="return openContent(2,32); ">
                            Part 32 Published Guidance and Other Guidance to Taxpayers
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=33" onclick="return openContent(2,33); ">
                            Part 33 Legal Advice
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=34" onclick="return openContent(2,34); ">
                            Part 34 Litigation in District Court, Bankruptcy Court, Court of Federal Claims, and State Court
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=35" onclick="return openContent(2,35); ">
                            Part 35 Tax Court Litigation
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=36" onclick="return openContent(2,36); ">
                            Part 36 Appellate Litigation and Actions on Decision
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=37" onclick="return openContent(2,37); ">
                            Part 37 Disclosure
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=38" onclick="return openContent(2,38); ">
                            Part 38 Criminal Tax
                        </a>
                    </li>

                

                    <li className="list_style">
                        <a href="Visualizer.aspx?level=2&amp;res=39" onclick="return openContent(2,39); ">
                            Part 39 General Legal Services
                        </a>
                    </li>

                                

                            </ul>
                        </td>
                    </tr>
                </tbody></table>
    </div>
  );
};

export default IRSManual;
