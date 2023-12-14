import React, { useState } from "react";
import '../../styles/Loans.css';
const Loans = () => {
  return (
    <div className="loan_div" id="loan_div">
      <div id="example">
      <div id="loantabdefault" class="loanBanner">
        <div class="main-heading">
          <label class="textFont headingColor">
            Get Paid now with Logics loan feature
          </label>
        </div>
        <div class="subpanel setpadding">
          <div class="sub-para1">
            <label>
              Clients want to retain your firm but do not have the funds?
            </label>
          </div>
          <div class="sub-para2">
            <label>
              <b>Logics</b> brings to you the perfect solution and a must have
              feature in your <b>Logics CRM</b>.
            </label>
          </div>
          <div class="sub-para2">
            <label>
              We are pleased to announce the launch of a new feature{" "}
              <b>"Client Financing"</b> in{" "}
              <b>
                IRS Logics. An amazing feature that actually allows you to be
                paid on an otherwise lost deal.
              </b>
              IRS Logics now allows you to provide <b>Quick Financing</b>{" "}
              solution to your clients so that they can afford your services
              with confidence.
            </label>
          </div>
          <div class="sub-head">
            <label>Let us show you how to get paid NOW!</label>
            <br />
          </div>
          <div class="sub-para3">
            <label>
              Add your <span class="sub-para-color">WeGetFinancing</span>{" "}
              account details to
              <a
                class="sub-para-color"
                href=""
                onclick="parent.parent.parent.openTabOrWindow('wndSettings','Settings', null,'Settings.aspx',400,550);return false;"
              >
                <span>
                  Settings &gt;&gt; Integration &gt;&gt; Loan Integration
                </span>
              </a>
            </label>
            <br />
          </div>
          <div class="sub-para3">
            <label>
              <span class="sub-text">Or</span>
            </label>
            <br />
          </div>
          <div class="textFont1">
            <label>Don't have an Account?</label>
          </div>
          <div class="textFont2">
            Contact your <span class="sub-para-color">Administrator</span>
            <br />
          </div>
        </div>
      </div>
    </div>   
    </div>
   
  );
};
export default Loans;
