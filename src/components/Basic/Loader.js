import React from 'react';
import '../../styles/Loader.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons';
const Loader = () => {
  return (
    <div className="loader-container" style={{height:"100vh",width:"84vw"}}>
      <div className="loader">
        
      <FontAwesomeIcon icon={faCircleNotch} spin size="3x" />
      </div>
    </div>
  );
};

export default Loader;
