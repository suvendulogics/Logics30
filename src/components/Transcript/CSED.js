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

const CSED = () => {
  return (
    <div>
      <div id="AccountOverview_grid">
        <Grid className="AccountOverview_grid_main">
          <GridColumn field="Name" title="Year" width="60px" />
          <GridColumn field="CategoryName" title="Form Number" width="100px" />
          <GridColumn field="CategoryName" title="Code" width="100px" />
          <GridColumn field="CategoryName" title="Explanation" width="100px" />
          <GridColumn field="CategoryName" title="Date" width="100px" />
          <GridColumn field="CreatedDate" title="Amount" width="100px" />
          <GridColumn
            field="CreatedBy"
            title="Estimated Tolling Days"
            width="190px"
          />
          <GridColumn
            field="Comments"
            title="Estimated Tolling Date"
            width="190px"
          />
        </Grid>
      </div>
    </div>
  );
};

export default CSED;
