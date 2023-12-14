import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileAlt,
  faUpload,
  faCloudArrowUp,
  faEye,
  faInfoCircle,
  faPencil,
  faTrash,
  faTriangleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Upload } from "@progress/kendo-react-upload";
import { Grid, GridColumn } from "@progress/kendo-react-grid";

const AccountTrans = () => {
  return (
    <div>
      <div id="AccountOverview_grid">
        <Grid className="AccountOverview_grid_main">
          <GridColumn field="Name" title="Year" width="90px" />
          <GridColumn field="CategoryName" title="Form Number" width="150px" />
          <GridColumn field="CategoryName" title="Code" width="150px" />
          <GridColumn field="CategoryName" title="Explanation" width="250px" />
          <GridColumn field="CategoryName" title="Transdate" width="140px" />
          <GridColumn field="CreatedDate" title="Amount" width="100px" />
       
        </Grid>
      </div>
    </div>
  );
};

export default AccountTrans;
