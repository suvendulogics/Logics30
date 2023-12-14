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
import { Menu } from "@progress/kendo-react-layout";
import EditFilter from "./EditFilter";
import "../../styles/Filters.css";
import items from "./items";

const response = {
  Error: false,
  Result: {
    Data:
      '[{"_ID":206514,"_Name":"Maria Test","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206514,"Date":"2023-10-11T03:22:49.163","Name":"Maria Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":"123 Street "},{"_ID":206513,"_Name":"Olivia Rodrigo","_FolderID":35,"_ProductID":15,"StatusID":182,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206513,"Date":"2023-10-06T20:31:35","Name":"Olivia Rodrigo","Cell":"(123)123-1233","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206512,"_Name":"Maria Beneta","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"English","CaseID":206512,"Date":"2023-10-06T02:17:39","Name":"Maria Beneta","Cell":"(111)111-1111","Home":"","Email":"Joseph@logics.com","WorkPhone":"","Fax":"","Address":"Lynden street "},{"_ID":206511,"_Name":"ivaan ","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206511,"Date":"2023-10-04T18:48:59.437","Name":"","Cell":"(23)456-1234","Home":"","Email":"roshni@testl.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206510,"_Name":"sdasd asdas","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206510,"Date":"2023-10-03T21:20:07.21","Name":"sdasd asdas","Cell":"(111)111-1111","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206509,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206509,"Date":"2023-10-03T04:58:44","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206508,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206508,"Date":"2023-10-03T04:57:56.093","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206507,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206507,"Date":"2023-10-03T04:55:46.257","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206506,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206506,"Date":"2023-10-03T04:55:00.803","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206505,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206505,"Date":"2023-10-03T04:50:20.507","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206504,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206504,"Date":"2023-10-03T04:48:31.033","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206503,"_Name":"Michael Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206503,"Date":"2023-10-03T04:39:34.49","Name":"Michael Test","Cell":"(312)698-8770","Home":"","Email":"josephd@logics.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206502,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206502,"Date":"2023-10-03T04:38:40.317","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206501,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206501,"Date":"2023-10-03T04:36:15.327","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206500,"_Name":"Logics Testin","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206500,"Date":"2023-09-30T04:24:07.27","Name":"Logics Testin","Cell":"","Home":"","Email":"logics@test.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206499,"_Name":"Sam Williams","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206499,"Date":"2023-09-27T21:45:28","Name":"Sam Williams","Cell":"(123)123-4566","Home":"","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Patricks street "},{"_ID":206498,"_Name":"Sarah Williams","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206498,"Date":"2023-09-25T22:28:39","Name":"Sarah Williams","Cell":"(123)123-4589","Home":"","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Park Avenue Street "},{"_ID":206497,"_Name":"Samy Miller","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206497,"Date":"2023-09-25T22:25:32","Name":"Samy Miller","Cell":"(123)123-4561","Home":"888","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Park Avenue Street "},{"_ID":206496,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206496,"Date":"2023-09-25T17:34:01.567","Name":"Jhon Smith","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206495,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206495,"Date":"2023-09-25T17:33:33.363","Name":"Jhon Smith","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206494,"_Name":"shilpa bh","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"English","CaseID":206494,"Date":"2023-09-25T14:30:04","Name":"shilpa bh","Cell":"(111)111-1111","Home":"(111)111-1111","Email":"shilpa@logics.com","WorkPhone":"(111)111-1111","Fax":"(111)111-1111","Address":" "},{"_ID":206493,"_Name":"Sam Miller","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"English","CaseID":206493,"Date":"2023-09-22T19:56:13.313","Name":"Sam Miller","Cell":"(123)123-1456","Home":"","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Park Avenue Street "},{"_ID":206492,"_Name":"fsfsdfsd fgfgddgdg","_FolderID":56,"_ProductID":16,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206492,"Date":"2023-09-22T12:43:01.823","Name":"fsfsdfsd fgfgddgdg","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206491,"_Name":"roshni postlead","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206491,"Date":"2023-09-22T00:41:17.427","Name":"roshni postlead","Cell":"(23)456-7890","Home":"","Email":"roshini@logics.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206490,"_Name":"sankarlogics test (testbusiness)","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206490,"Date":"2023-09-21T12:03:52","Name":"sankarlogics test","Cell":"(234)567-8901","Home":"","Email":"revathy@logics.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206489,"_Name":"Jhon Smith (LTW Enterprises Property Corp)","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206489,"Date":"2023-09-20T13:56:20","Name":"Jhon Smith","Cell":"(333)333-3333","Home":"(222)222-2222","Email":"tejeshwari@logics.com","WorkPhone":"","Fax":"","Address":"hj "},{"_ID":206488,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206488,"Date":"2023-09-20T13:56:06.5","Name":"Jhon Smith","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206487,"_Name":"sdf asdf","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206487,"Date":"2023-09-19T13:27:48","Name":"sdf asdf","Cell":"21","Home":"(222)222-2222","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206486,"_Name":"firstname Revathy","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206486,"Date":"2023-09-19T13:24:34","Name":"firstname Revathy","Cell":"(222)222-2222","Home":"(135)467-8901","Email":"","WorkPhone":"(222)222-2222","Fax":"","Address":" "},{"_ID":206485,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206485,"Date":"2023-09-19T13:23:30.727","Name":"Jhon Smith","Cell":"","Home":"(222)222-2222","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206514,"_Name":"Maria Test","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206514,"Date":"2023-10-11T03:22:49.163","Name":"Maria Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":"123 Street "},{"_ID":206513,"_Name":"Olivia Rodrigo","_FolderID":35,"_ProductID":15,"StatusID":182,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206513,"Date":"2023-10-06T20:31:35","Name":"Olivia Rodrigo","Cell":"(123)123-1233","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206512,"_Name":"Maria Beneta","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"English","CaseID":206512,"Date":"2023-10-06T02:17:39","Name":"Maria Beneta","Cell":"(111)111-1111","Home":"","Email":"Joseph@logics.com","WorkPhone":"","Fax":"","Address":"Lynden street "},{"_ID":206511,"_Name":"ivaan ","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206511,"Date":"2023-10-04T18:48:59.437","Name":"","Cell":"(23)456-1234","Home":"","Email":"roshni@testl.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206510,"_Name":"sdasd asdas","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206510,"Date":"2023-10-03T21:20:07.21","Name":"sdasd asdas","Cell":"(111)111-1111","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206509,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206509,"Date":"2023-10-03T04:58:44","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206508,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206508,"Date":"2023-10-03T04:57:56.093","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206507,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206507,"Date":"2023-10-03T04:55:46.257","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206506,"_Name":"john smith","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206506,"Date":"2023-10-03T04:55:00.803","Name":"john smith","Cell":"(312)914-7211","Home":"","Email":"john@smith.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206505,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206505,"Date":"2023-10-03T04:50:20.507","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206504,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206504,"Date":"2023-10-03T04:48:31.033","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206503,"_Name":"Michael Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206503,"Date":"2023-10-03T04:39:34.49","Name":"Michael Test","Cell":"(312)698-8770","Home":"","Email":"josephd@logics.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206502,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206502,"Date":"2023-10-03T04:38:40.317","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206501,"_Name":"Logics Test","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206501,"Date":"2023-10-03T04:36:15.327","Name":"Logics Test","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206500,"_Name":"Logics Testin","_FolderID":35,"_ProductID":1,"StatusID":2,"OpenTasksCount":0,"Stage":"Client","Language":"","CaseID":206500,"Date":"2023-09-30T04:24:07.27","Name":"Logics Testin","Cell":"","Home":"","Email":"logics@test.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206499,"_Name":"Sam Williams","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206499,"Date":"2023-09-27T21:45:28","Name":"Sam Williams","Cell":"(123)123-4566","Home":"","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Patricks street "},{"_ID":206498,"_Name":"Sarah Williams","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206498,"Date":"2023-09-25T22:28:39","Name":"Sarah Williams","Cell":"(123)123-4589","Home":"","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Park Avenue Street "},{"_ID":206497,"_Name":"Samy Miller","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206497,"Date":"2023-09-25T22:25:32","Name":"Samy Miller","Cell":"(123)123-4561","Home":"888","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Park Avenue Street "},{"_ID":206496,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206496,"Date":"2023-09-25T17:34:01.567","Name":"Jhon Smith","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206495,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206495,"Date":"2023-09-25T17:33:33.363","Name":"Jhon Smith","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206494,"_Name":"shilpa bh","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"English","CaseID":206494,"Date":"2023-09-25T14:30:04","Name":"shilpa bh","Cell":"(111)111-1111","Home":"(111)111-1111","Email":"shilpa@logics.com","WorkPhone":"(111)111-1111","Fax":"(111)111-1111","Address":" "},{"_ID":206493,"_Name":"Sam Miller","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"English","CaseID":206493,"Date":"2023-09-22T19:56:13.313","Name":"Sam Miller","Cell":"(123)123-1456","Home":"","Email":"zoe@logics.com","WorkPhone":"","Fax":"","Address":"Park Avenue Street "},{"_ID":206492,"_Name":"fsfsdfsd fgfgddgdg","_FolderID":56,"_ProductID":16,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206492,"Date":"2023-09-22T12:43:01.823","Name":"fsfsdfsd fgfgddgdg","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206491,"_Name":"roshni postlead","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206491,"Date":"2023-09-22T00:41:17.427","Name":"roshni postlead","Cell":"(23)456-7890","Home":"","Email":"roshini@logics.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206490,"_Name":"sankarlogics test (testbusiness)","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206490,"Date":"2023-09-21T12:03:52","Name":"sankarlogics test","Cell":"(234)567-8901","Home":"","Email":"revathy@logics.com","WorkPhone":"","Fax":"","Address":" "},{"_ID":206489,"_Name":"Jhon Smith (LTW Enterprises Property Corp)","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206489,"Date":"2023-09-20T13:56:20","Name":"Jhon Smith","Cell":"(333)333-3333","Home":"(222)222-2222","Email":"tejeshwari@logics.com","WorkPhone":"","Fax":"","Address":"hj "},{"_ID":206488,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206488,"Date":"2023-09-20T13:56:06.5","Name":"Jhon Smith","Cell":"","Home":"","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206487,"_Name":"sdf asdf","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206487,"Date":"2023-09-19T13:27:48","Name":"sdf asdf","Cell":"21","Home":"(222)222-2222","Email":"","WorkPhone":"","Fax":"","Address":" "},{"_ID":206486,"_Name":"firstname Revathy","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206486,"Date":"2023-09-19T13:24:34","Name":"firstname Revathy","Cell":"(222)222-2222","Home":"(135)467-8901","Email":"","WorkPhone":"(222)222-2222","Fax":"","Address":" "},{"_ID":206485,"_Name":"Jhon Smith","_FolderID":56,"_ProductID":1,"StatusID":33,"OpenTasksCount":0,"Stage":"Prospect","Language":"","CaseID":206485,"Date":"2023-09-19T13:23:30.727","Name":"Jhon Smith","Cell":"","Home":"(222)222-2222","Email":"","WorkPhone":"","Fax":"","Address":" "}]',
    Total: 144862,
  },
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

  return (
    <div>
      <div className="subheader" id="filters">
        <div className="div_alignc">
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
          <div className="custom-lines-fil"></div>
          {/* <DropDownList
            defaultValue="Actions"
            className="subhead_drop"
            data={type}
          /> */}
           <div>
     <div id="dropdown_actions"> <Menu items={items} /></div>     
    </div>
          <div className="custom-lines-fil"></div>
        </div>
        <div className="div_alignc">
          <div className="div_alignc">
            <FontAwesomeIcon
              icon={faFileExcel}
              className="icons"
              style={{ color: "#cedfee",fontSize:"18px" }}
            />
            <button onClick={exportExcel} className="exp_ref_btn">
              Export
            </button>
          </div>

          <div className="custom-lines-fil" style={{ marginRight: "10px" }}></div>
          <div className="div_alignc">
            <FontAwesomeIcon
              icon={faArrowsRotate}
              className="icons"
              style={{ color: "rgb(123 242 25)",fontSize:"18px" }}
            />
            <button className="exp_ref_btn">Refresh</button>
          </div>
        </div>
      </div>

      {/* <DropDownList
        data={[30]}
        value={pageSize}
        onChange={(event) => {
          setPageSize(event.target.value);
          setSkip(0);
        }}
      /> */}

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
          <GridColumn field="Language" title="Language" className="contents" />
          <GridColumn field="CaseID" title="Case" className="contents" />
          <GridColumn field="Date" title="Date" className="contents" />
          <GridColumn field="Name" title="Name" className="contents" />
          <GridColumn field="Cell" title="Cell" className="contents" />
          <GridColumn field="Home" title="Home" className="contents" />
          <GridColumn field="Email" title="Email" className="contents" />
          <GridColumn
            field="WorkPhone"
            title="Work Phone"
            className="contents"
          />
          <GridColumn field="Fax" title="Fax" className="contents" />
          <GridColumn field="Address" title="Address" className="contents" />
        </Grid>
      </ExcelExport>
      {isEditFilterPopupVisible && (
        <div className="popup-overlay_fil">
          <div className="edit-filter-popup_fil">
            <EditFilter />
          </div>
        </div>
      )}
    </div>
  );
};

export default Filters;
