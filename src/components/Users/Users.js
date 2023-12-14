import React,{useEffect,useState} from "react";
import { Splitter } from "@progress/kendo-react-layout";
import Teams from "./Teams";
import UserRight from "./UserRight";

const Users =()=>{
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    useEffect(() => {
        const handleResize = () => {
          setWindowWidth(window.innerWidth);
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
      const [nestedPanes, setNestedPanes] = React.useState([
        {
          size: "20%",
          collapsible: true,
        },
        {},
        {
          size: "80%",
          resizable: false,
          collapsible: true,
        },
      ]);
      const onNestedChange = (event) => {
        setNestedPanes(event.newState);
    
      };
    return(
        <div style={{width:"87vw",marginTop:"10px"}}>
           
            <Splitter
            style={{ height: "100vmin" }}
            panes={nestedPanes}
            onChange={onNestedChange}
            id="welcome_split"
          >
            <div>
              <Teams/>
            </div>

            <div>
              <UserRight/>
            </div>
          </Splitter>
        </div>
    )
}
export default Users;