import React from 'react';
function Logo({ logoHTML }) {
    return (
      <div className="logo-container">
        <div dangerouslySetInnerHTML={{ __html: logoHTML }} />
      </div>
    );
  }
  
  export default Logo;
  