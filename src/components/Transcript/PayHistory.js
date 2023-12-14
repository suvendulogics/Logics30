import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileAlt, faUpload } from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@progress/kendo-react-upload";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

const PayHistory = () => {
  return (
    <div>
      <div id="AccountOverview_grid">
        <Grid className="AccountOverview_grid_main">
          <GridColumn field="Name" title="Year" width="190px" />
          <GridColumn field="CategoryName" title="Payment Date" width="250px" />
          <GridColumn field="CategoryName" title="Description" width="150px" />
          <GridColumn field="CategoryName" title="Amount" width="150px" />
        </Grid>
      </div>
    </div>
  );
};

export default PayHistory;
