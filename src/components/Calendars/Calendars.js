import React, { useState } from "react";
import {
  Scheduler,
  DayView,
  WorkWeekView,
  WeekView,
  MonthView,
  AgendaView,
  TimelineView,
} from "@progress/kendo-react-scheduler";
import "../../styles/Calendars.css";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { Menu, MenuItem } from "@progress/kendo-react-layout";
import "@progress/kendo-theme-default/dist/all.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { Calendar } from "@progress/kendo-react-all";
import response from "./Response";
import filterdata from "./Filterdata.js";

const Calendars = () => {
  const [view, setView] = useState("month");
  const [date, setDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(null);
  const filter = filterdata.d;
  const url =
    "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories?$expand=Products";
  const handleRefreshClick = () => {
    alert("Refresh button clicked!");
  };
  const handleDefaultClick = () => {
    alert("Default button clicked!");
  };
  const formattedData = response.Result.map((event, index) => ({
    id: index + 1,
    title: event.Title,
    start: new Date(event.StartDate),
    end: new Date(event.EndDate),
  }));
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        setItems(mapItems(json.value));
      });
  }, []);

  function mapItems(items) {
    return items.map((item) => {
      const result = {
        text: item.CategoryName,
      };

      if (item.Products) {
        result.items = item.Products.map((childItem) => {
          return {
            text: childItem.ProductName,
          };
        });
      }
      return result;
    });
  }
  return (
    <div className="main_div" id="calendar">
      <div className="filter_div">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            className="font_icon_calender"
          />
          <div className="filter_txt" id="cal_fil">Filter :</div>
         
           
              <DropDownList   className="cal_filter" style={{width:"180px",height:"27px"}}
                placeholder="Assigned to me"
              />
            
        
          {/* <div>
          <Menu items={items}/>
        </div> */}

          <div className="button-group">
            <div>
              <button className="refresh_btn" onClick={handleRefreshClick}>
                Refresh
              </button>
            </div>
          </div>
        </div>

        <div className="button-group">
          <div>
            <button className="default_btn" onClick={handleDefaultClick}>
              Set as default page
            </button>
          </div>
        </div>
      </div>
<div id="calendar">
<Scheduler data={formattedData} defaultView={view} defaultDate={date}>
        <DayView />
        <WorkWeekView />
        <WeekView />
        <MonthView />
        <AgendaView />
        <TimelineView />
      </Scheduler>
</div>
   
    </div>
  );
};

export default Calendars;
