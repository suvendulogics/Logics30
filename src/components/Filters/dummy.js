import React, { useState } from "react";
import { Grid, GridColumn, GridPager } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import { ExcelExport } from "@progress/kendo-react-excel-export";
import {
  faFilter,
  faPen,
  faFileExcel,
  faArrowsRotate,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EditFilter from "./EditFilter";
import actionResp from './ActionData';
import "../../styles/Filters.css";

const response = {
  Error: false,
  ErrorMessage: "",
};

const defaultPageSize = 30;
const data = JSON.parse(response.Result.Data);
 
const Filters = () => {
  const [pageSize, setPageSize] = useState(defaultPageSize);
  const [skip, setSkip] = useState(0);
  const [isEditFilterPopupVisible, setEditFilterPopupVisible] = useState(false);
  const excelExport = React.createRef();

  const onPageChange = (event) => {
    const newSkip = event.page.skip;
    setSkip(newSkip);
  };

  const displayedData = data.slice(skip, skip + pageSize);

  const exportExcel = () => {
    excelExport.current.save();
  };
  const type = [
    "Edit Filter",
    "Delete Filter",
    "Copy Filter for",
    "Set as default page",
  ];
  const handleEditFilterClick = () => {
    setEditFilterPopupVisible(true);
  };

  const handlePopupClose = () => {
    setEditFilterPopupVisible(false);
  };

  return (
    <div>
      <div className="subheader">
        <div style={{ display: "flex", flexDirection: "row" }}>
          <DropDownList
            data={type}
            defaultValue="This Filter"
            className="subhead_drop"
            onChange={(e) => {
              if (e.target.value === "Edit Filter") {
                handleEditFilterClick();
              }
            }}
          />

          <DropDownList
            defaultValue="Actions"
            className="subhead_drop"
          />
        </div>
        <div >
            <div>
            <FontAwesomeIcon icon={faFileExcel} className="icons" style={{color:"aliceblue"}}/>
          <button onClick={exportExcel} className="exp_ref_btn">
            Export
          </button>
            </div>
       

          <div style={{ color: "white", fontSize: "24px", fontWeight: "400" ,marginRight:"10px"}}>
            l
          </div>
          <div   style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}>
          <FontAwesomeIcon icon={faArrowsRotate} className="icons"  style={{color:"aliceblue"}} />
          <button className="exp_ref_btn">Refresh</button>
          </div>
        
        </div>
      </div>
       <ExcelExport
        data={displayedData}
        fileName="exported-data.xlsx"
        ref={excelExport}
      >
        <Grid
          data={displayedData}
          skip={skip}
          pageable={true}
          total={data.length}
          onPageChange={onPageChange}
        >
          <GridColumn
            field="OpenTasksCount"
            title="Open Tasks Count"
            className="contents"
          />
          <GridColumn field="Stage" title="Stage" className="contents" />
        </Grid>
      </ExcelExport>
      {isEditFilterPopupVisible && (
        <div className="popup-overlay_fil">
          <div className="edit-filter-popup_fil">
            <EditFilter/>
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;







