import React, { useState } from 'react';
import { DropDownList} from "@progress/kendo-react-dropdowns";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@progress/kendo-react-buttons";
import { faDownload, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
import { orderBy } from '@progress/kendo-data-query';
import products from "./product.json";
import { DatePicker } from '@progress/kendo-react-dateinputs';
import {TextBox } from '@progress/kendo-react-inputs';
import "../../styles/UserLog.css";
import "../APIs/AccountServices";
import AccountServices from '../APIs/AccountServices';
import { ExcelExport } from '@progress/kendo-react-excel-export';
const logType=['All','Search Case','Save Case','Meeting','Delete Payment','Tag Update'];
const users=['All','Search Case','Save Case','Meeting','Delete Payment','Tag Update'];
const initialSort = [{
    field: 'UserName',
    dir: 'asc'
}];
const initialDataState = {
    skip: 0,
    take: 10
  };

const UsersLog = () => {
    const [gridResponse, setGridResponse] = useState([]);
    const token = localStorage.getItem("token");
    AccountServices.getUserLog(token)
    .then((res) => {
      if (res.status == 200) {
        console.log("clicked");
        setGridResponse(res.data);
      }
    })
    console.log("PD",products);
    const [sort, setSort] = useState(initialSort);
    const [page, setPage] = React.useState(initialDataState);
    const [pageSizeValue, setPageSizeValue] = React.useState();
    const pageChange = event => {
      const targetEvent = event.targetEvent;
      const take = targetEvent.value === 'All' ? products.length : event.page.take;
      if (targetEvent.value) {
        setPageSizeValue(targetEvent.value);
      }
      setPage({
        ...event.page,
        take
      });
    };
    const _export = React.useRef(null);
    const excelExport = () => {
        console.log("clicked");
     alert("");
     if (_export.current !== null) {
        _export.current.save();
      }
    };

    const refresh =() =>{
        alert("Refresh");
    }

    const caseNumber=({value}) =>{
      
    }
/*------------Date Picker*/
    const [dateValue, setDateValue] = React.useState(new Date());
    const changeDate=({value})=>{
        alert(value);
        console.log("Date Value",value);

    }
    return (
        <div style={{width:'100%'}}>
            <div className="row" id='toolbar'>
                <div className="log_type_column" style={{ minWidth: "213px;" }}>
                    <div className="internal-row">
                        <label className="button_text">Log Type:</label>
                        <DropDownList style={{width: '160px'}} data={logType} defaultValue="All" className="input_fields"/>
                    </div>
                </div>
                <div  className="users_column"  style={{ minWidth: "213px;" }}>
                    <div className="internal-row">
                        <label className="button_text">Users:</label>
                        <div className="users-internal-row">
                            <DropDownList style={{width: '160px'}} data={users} defaultValue="All" className="input_fields"/>
                             <TextBox placeholder="Case ID" onInput={caseNumber} className="input_fields" maxLength={15}/>
                      
                        </div>
                    </div>
                </div>
                <div className="from_date_column" style={{ minWidth: "213px;" }}>
                    <div className="internal-row">
                        <label className="button_text">From Date:</label>
                        <DatePicker defaultValue={new Date()} value={dateValue} onChange={changeDate} className="input_fields datepickers" style={{width: '500px'}} />
                    </div>
                </div>
                <div className="to_date_column" style={{ minWidth: "213px;" }}>
                    <div className="internal-row">
                    <label className="button_text">To Date:</label>
                    <DatePicker defaultValue={new Date()} className="input_fields datepickers" style={{width: '500px'}}/>
                    </div>
                </div>
                <div className="buttons_column" style={{ minWidth: "213px;" }}>
                    <Button className="log_buttons" onClick={refresh}><FontAwesomeIcon icon={faArrowsRotate} className="button_icons" style={{ marginRight: "4px" }} />Refresh</Button>
                    <Button className="log_buttons" onClick={excelExport} style={{ marginLeft: "4px" }}><FontAwesomeIcon icon={faDownload} className="button_icons" style={{ marginRight: "4px" }} />Expert</Button>
                </div>
            </div>

            
            {/* <Grid style={{
                height: 'calc(100vh - 82px)'
            }} data={orderBy(gridResponse, sort,gridResponse.slice(page.skip, page.take + page.skip))} sortable={true} sort={sort} onSortChange={e => {
                setSort(e.sort);
            }}  

            > */}
            <Grid style={{
                height: 'calc(100vh - 82px)'
            }} data={ orderBy(gridResponse, sort,gridResponse.slice(page.skip, page.take + page.skip))}
            sortable={true} sort={sort} onSortChange={e => {
                setSort(e.sort);
            }}
            skip={page.skip} take={page.take} total={gridResponse.length} pageable={{
                
                
                
              }} onPageChange={pageChange}
            >
                <GridColumn field="userName" title="User Name" width="192px" />
                <GridColumn field="logType" title="Log Type" width="127px" />
                <GridColumn field="createdDate" title="Created Date" width="192px" />
                <GridColumn field="caseId" title="Case Id" width="127px" />
                <GridColumn field="ip" title="IP  Address" width="192px" />
                <GridColumn field="description" title="Description" />
            </Grid>
        </div>
    );
    function getGridHeight(){
        var gridHeight=document.getElementsByClassName('tab_content')[0].offsetHeight - document.getElementById('toolbar').offsetHeight;
        console.log(gridHeight);
        alert(gridHeight);
        return gridHeight;
            } 
            getGridHeight();
};


export default UsersLog;