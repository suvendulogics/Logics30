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

const Calendars = () => {
  const [view, setView] = useState("day");
  const [date, setDate] = useState(new Date());
  const [selectedItem, setSelectedItem] = useState(null);
  const url =
    "https://odatasampleservices.azurewebsites.net/V4/Northwind/Northwind.svc/Categories?$expand=Products";
  const handleRefreshClick = () => {
    alert("Refresh button clicked!");
  };

  const dataOption = ["Option 1", "Option 2", "Option 3"];

  const data = [
    {
      id: 1,
      title: "Meeting 1",
      start: new Date(2023, 7, 21, 9, 0),
      end: new Date(2023, 7, 21, 10, 0),
    },
    {
      id: 2,
      title: "Meeting 2",
      start: new Date(2023, 9, 22, 14, 0),
      end: new Date(2023, 9, 22, 15, 0),
    },
  ];

  const handleViewChange = (e) => {
    setView(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };
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
    <div className="main_div">
      <div className="filter_div">
        <FontAwesomeIcon icon={faCalendarDays} className="font_icon_calender" />
        <div className="filter_txt">Filter :</div>

        <div>
          {/* <Menu items={items} /> */}
        </div>

        <div>
          <button className="refresh_btn" onClick={handleRefreshClick}>
            Refresh
          </button>{" "}
        </div>
      </div>

      {/* <div className="calendar_div"> */}
      <Scheduler data={data} defaultView={view} defaultDate={date}>
        <DayView />
        <WorkWeekView />
        <WeekView />
        <MonthView />
        <AgendaView />
        <TimelineView />
      </Scheduler>
      {/* </div> */}
    </div>
  );
};

export default Calendars;
