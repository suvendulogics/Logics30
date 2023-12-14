import React from "react";
import "../Main/StyleSheet.css";
import MainMenu from "../Header/HeaderNav";
import Header from "../Header/Header";

const RightPanal = () => {
  return (
    <div id="defaultPage">
      <div id="topPanel">
        <div id="mainPanel">
          <div id="rightPanel">
            <div id="menubar">
              <div style={{display:"flex",flexDirection:"row"}} className="right_div" >
                <MainMenu/>
                <Header/>
              </div>
            </div>
          </div>
          {/* <div id="centerPanel"></div> */}
        </div>
      </div>
    </div>
  );
};

export default RightPanal;
