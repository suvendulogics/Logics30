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

import "../../styles/CPLoginHistory.css";


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

const CPLoginHistory = () => {
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

    return (
      <div style={{width:'100%'}}>
      <div className="row" id='toolbar'>
          <div className="from_date_column" style={{ minWidth: "213px;" }}>
              <div className="internal-row">
                  <label className="button_text">From Date:</label>
                  <DatePicker placeholder="Choose a date..." className="input_fields datepickers" style={{width: '500px'}} />
              </div>
          </div>
          <div className="to_date_column" style={{ minWidth: "213px;" }}>
              <div className="internal-row">
              <label className="button_text">To Date:</label>
              <DatePicker placeholder="Choose a date..." className="input_fields datepickers" style={{width: '500px'}}/>
              </div>
          </div>
          <div className="buttons_column" style={{ minWidth: "213px;" }}>
              <Button className="log_buttons"><FontAwesomeIcon icon={faArrowsRotate} className="button_icons" style={{ marginRight: "4px" }} />Refresh</Button>
              <Button className="log_buttons" style={{ marginLeft: "4px" }}><FontAwesomeIcon icon={faDownload} className="button_icons" style={{ marginRight: "4px" }} />Expert</Button>
          </div>
      </div>

      
      <Grid style={{
          height: 'calc(100vh - 82px)'
      }} data={orderBy(products, sort,products.slice(page.skip, page.take + page.skip))} sortable={true} sort={sort} onSortChange={e => {
          setSort(e.sort);
      }} skip={page.skip} take={page.take} total={products.length} pageable={{
          buttonCount: 4,
          pageSizes: [5, 10, 15, 'All'],
          pageSizeValue: pageSizeValue
        }} onPageChange={pageChange}

      >
          <GridColumn field="userName" title="User Name" width="192px" />
          <GridColumn field="successful" title="Successful" width="127px" />
          <GridColumn field="ip" title="IP" width="192px" />
          <GridColumn field="signInDate" title="Sign In Date" width="127px" />
          <GridColumn field="loadTime" title="Load Time (ms)" width="192px" />
          <GridColumn field="browserName" title="Browser Name" />
          <GridColumn field="browserVersion" title="Browser Version" />
      </Grid>
  </div>
    );
};


export default CPLoginHistory;