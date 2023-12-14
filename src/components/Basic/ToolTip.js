import React from "react";
import PropTypes from "prop-types";
import "../../styles/ToolTip.css"; 

const CustomTooltip = ({ header, content }) => {
    // if (!isVisible) {
    //     return null;
    //   }
  return (
    <div className="custom-tooltip">
      <div className="tooltip-header">{header}</div>
      
      <div className="tooltip-content">
       <div className="tooltip_head">Use Help desk to:</div> 
        <ul style={{paddingLeft:"15px"}}>
          {content.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CustomTooltip.propTypes = {
  header: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CustomTooltip;
