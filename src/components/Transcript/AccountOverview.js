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
// import response from "./AccountOverviewData.js";
// import "../../styles/AccountOverview.css";
// import responsecat from "./DocCategoryData.js";

const AccountOverview = () => {
  const [data, setData] = useState([]);
  const [isUploadPopupOpen, setUploadPopupOpen] = useState(false);
  const [isUploadPopupOpenedit, setUploadPopupOpenedit] = useState(false);
  const [isUploadPopupOpendelete, setUploadPopupOpendelete] = useState(false);
  const [isRequestPopupOpen, setRequestPopupOpen] = useState(false);
  const [isRequestPopupOpenedit, setRequestPopupOpenedit] = useState(false);
  const [isRequestPopupOpendelete, setRequestPopupOpendelete] = useState(false);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFilesedit, setSelectedFilesedit] = useState([]);
  const [documentInfo, setDocumentInfo] = useState({
    name: "",
    comments: "",
    category: "",
  });
  const [documentInfoedit, setDocumentInfoedit] = useState({
    name: "",
    comments: "",
    category: "",
  });
  useEffect(() => {
    // const formattedData = response.Result.map((item) => {
    //   const date = new Date(item.CreatedDate);
    //   const formattedDate = date.toLocaleDateString();
    //   const formattedTime = date.toLocaleTimeString();
    //   return {
    //     ...item,
    //     CreatedDate: `${formattedDate} ${formattedTime}`,
    //   };
    // });
    // setData(formattedData);
  }, []);

  const handleUploadButtonClick = () => {
    setUploadPopupOpen(true);
  };
  const handleRequestButtonClick=()=>{
    setRequestPopupOpen(true);
  }
  const handleUploadButtonClickedit = () => {
    setUploadPopupOpenedit(true);
  };
  const handleRequestButtonClickedit = () => {
    setRequestPopupOpenedit(true);
  };
  const handleUploadButtonClickdelete = () => {
    setUploadPopupOpendelete(true);
  };
  const handleRequestButtonClickdelete = () => {
    setRequestPopupOpendelete(true);
  };
  const handleUploadCancel = () => {
    setUploadPopupOpen(false);
  };
  const handleRequestCancel = () => {
    setRequestPopupOpen(false);
  };
  const handleUploadCanceledit = () => {
    setUploadPopupOpenedit(false);
  };
  const handleRequestCanceledit = () => {
    setRequestPopupOpenedit(false);
  };
  const handleUploadCanceldelete = () => {
    setUploadPopupOpendelete(false);
  };
  const handleRequestCanceldelete = () => {
    setUploadPopupOpendelete(false);
  };
  const handleUploadFiles = () => {
    console.log("Uploaded files:", selectedFiles);
    console.log("Document info:", documentInfo);

    setUploadPopupOpen(false);

    setSelectedFiles([]);
    setDocumentInfo({
      name: "",
      comments: "",
      category: "",
    });
  };
  const handleUploadFilesedit = () => {
    setUploadPopupOpenedit(false);

    setSelectedFilesedit([]);
    setDocumentInfoedit({
      name: "",
      comments: "",
      category: "",
    });
  };

  const handleFileSelect = (event) => {
    setSelectedFiles(event.files);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDocumentInfo({ ...documentInfo, [name]: value });
  };

  const handleCategoryChange = (e) => {
    setDocumentInfo({ ...documentInfo, category: e.target.value });
  };

  return (
    <div>
   
      <div id="AccountOverview_grid">
        <Grid className="AccountOverview_grid_main" data={data} >
          <GridColumn field="Name" title="Year" width="60px" />
          <GridColumn field="CategoryName" title="Return Type" width="100px" />
          <GridColumn field="CategoryName" title="Return Filed" width="100px" />
          <GridColumn field="CategoryName" title="Filing Date" width="100px" />
          <GridColumn field="CategoryName" title="Filing Status" width="100px" />
          <GridColumn field="CreatedDate" title="Principal Tax" width="100px" />
          <GridColumn field="CreatedBy" title="Interest" width="90px" />
          <GridColumn field="Comments" title="Penalties" width="90px" />
          <GridColumn field="CreatedDate" title="Payments and Credits" width="100px" />

          <GridColumn field="Comments" title="Refunds" width="80px" />
      
         
        </Grid>
      </div>

  







    </div>
  );
};

export default AccountOverview;
