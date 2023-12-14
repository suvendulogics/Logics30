// import React, { useState, useEffect, useRef } from "react";
// import {
//   faListOl,
//   faFileAlt,
// } from "@fortawesome/free-solid-svg-icons";
// import PowerOfAttorney from "./PowerOfAttorney";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { DropDownList } from "@progress/kendo-react-dropdowns";
// import { Input, Checkbox, MaskedTextBox } from "@progress/kendo-react-inputs";
// import "../../styles/Services.css";
// import ServiceCase from "./ServiceCase";

// const Services = () => {
//   const [selectedComponent, setSelectedComponent] = useState();
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
//   console.log("selectedComponent",selectedComponent);
//   if (selectedComponent == null || "") {
//     setSelectedComponent("ServiceDetails");
//   }
//   const handleViewComponentClicked = (component) => {
//     setSelectedComponent(component);
//   };

//   return (
//     <div style={{ height: "150vh", overflow: "auto" ,width:"fit-content" }}>   
//       <div className="services-component" id="services_style">
//         <div className="content_fil">
//           <div className="left-content_services">
        
//             <div className="section_fil_services">
//               <FontAwesomeIcon
//                 icon={faListOl}
//                 className="font_fil"
//                 style={{ color: "#458CC8" }}
//               />

//               <div
//                 className="text_name_service"
//                 onClick={() => handleViewComponentClicked("ServiceDetails")}
//               >
//                 Service Details
//               </div>
//             </div>
//             <div className="section_fil_services">
//               <FontAwesomeIcon
//                 icon={faFileAlt}
//                 className="font_fil"
//                 style={{ color: "#a7a7a7" }}
//               />
//               <div
//                 className="text_name_service"
//                 onClick={() => handleViewComponentClicked("PowerOfAttorney")}
//               >
//                 Power of Attorney
//               </div>
//             </div>
//           </div>
//           <div className="right-content">
//             {selectedComponent === "PowerOfAttorney" && <PowerOfAttorney />}
//             {selectedComponent === "ServiceDetails" && <ServiceCase />}
//           </div>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default Services;





import React, { useState, useEffect } from 'react';

const YourComponent = () => {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState(null);

  const addTab = (menuItem, icon) => {
    setLoading(true);

    
    setTimeout(() => {
      let TabContent = "";

      // ... (Your switch statement)

      let newCount = tabcount + 1;
      MainMenu.push({
        id: newCount - 1,
        title: menuItem,
        content: TabContent,
      });

      dispatch(setTabData({ id: newCount - 1, title: menuItem, content: TabContent }));
      dispatch(addedTabData({ id: newCount - 1, title: menuItem, content: TabContent }));
      console.log("mainmenu", MainMenu);
      setCount(newCount);
    }, 2000); 
  };

  useEffect(() => {
 
    if (loading) {
   
      setTimeout(() => {
        setContent(MainMenu[MainMenu.length - 1].content);
        setLoading(false);
      }, 1000); 
    }
  }, [loading]);

  return (
    <div>
   
      {loading && <Loader />}
      {content && <div key={content.id}>{content}</div>}
    </div>
  );
};

export default YourComponent;










