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

const Penalties = () => {
  return (
    <div>
      <div id="AccountOverview_grid">
        <Grid className="AccountOverview_grid_main">
          <GridColumn field="Name" title="Year" width="40px" />
          <GridColumn field="CategoryName" title="Return Filed" width="70px" />
          <GridColumn field="CategoryName" title="Failure To File Penalties" width="80px" />
          <GridColumn field="CategoryName" title="Failure To Pay Penalties" width="80px" />
          <GridColumn field="CategoryName" title="Accuracy Related Penalties" width="80px" />
          <GridColumn field="CreatedDate" title="Other Penalties" width="80px" />
          <GridColumn field="CategoryName" title="Accrued Penalties" width="80px" />
          <GridColumn field="CategoryName" title="Total Penalties" width="80px" />
          <GridColumn field="CategoryName" title="Charged Interests" width="80px" />
          <GridColumn field="CreatedDate" title="Accrued Interests" width="80px" />
          <GridColumn field="CategoryName" title="Total Interests" width="80px" />
          <GridColumn field="CreatedDate" title="Qualifying FTA" width="80px" />
       
        </Grid>
      </div>
    </div>
  );
};

export default Penalties;
