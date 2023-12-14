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
import response from "./DocumentsData.js";
import "../../styles/Documents.css";
import responsecat from "./DocCategoryData.js";

const Documents = () => {
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
    const formattedData = response.Result.map((item) => {
      const date = new Date(item.CreatedDate);
      const formattedDate = date.toLocaleDateString();
      const formattedTime = date.toLocaleTimeString();
      return {
        ...item,
        CreatedDate: `${formattedDate} ${formattedTime}`,
      };
    });
    setData(formattedData);
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
      <div className="first_btn_div" >
        <button className="upload_btn" onClick={handleUploadButtonClick}>
          <FontAwesomeIcon icon={faFileAlt} className="upload_icon" />
          Upload
        </button>
        <button className="request_btn" onClick={handleRequestButtonClick}>Request Files</button>
      </div>
      <div id="documents_grid">
        <Grid className="documents_grid_main" data={data} >
          <GridColumn field="Name" title="Document Name" width="150px" />
          <GridColumn field="CategoryName" title="Category" width="150px" />
          <GridColumn field="CreatedDate" title="Date/Time" width="150px" />
          <GridColumn field="CreatedBy" title="Uploaded By" width="150px" />
          <GridColumn field="Comments" title="Comments" width="150px" />
          <GridColumn
            field="visibleClPortal"
            title="Share on Portal"
            width="200px"
            cell={(props) => (
              <td>
                <input type="checkbox" id="defaultSwitch" />
              </td>
            )}
          />
          <GridColumn
            field=""
            title=""
            width="200px"
            cell={(props) => (
              <td>
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ marginRight: "12px", marginLeft: "12px" }}
                />
                <FontAwesomeIcon
                  icon={faUpload}
                  style={{ marginRight: "12px" }}
                />
                <FontAwesomeIcon
                  icon={faPencil}
                  style={{ marginRight: "12px" }}
                  onClick={handleUploadButtonClickedit}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  style={{ marginRight: "4px" }}
                  onClick={handleUploadButtonClickdelete}
                />
              </td>
            )}
          />
        </Grid>
      </div>

      {isUploadPopupOpen && (
        <div className="popup">
          <div className="upload-popup">
            <div className="box_pop">
              <div className="upload_title">
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  style={{
                    marginRight: "4px",
                    marginLeft: "10px",
                    color: "#36537D",
                  }}
                />
                <div style={{ color: "#36537D" }}>Upload</div>
              </div>
              <div
                style={{
                  height: "148px",
                  border: "2.5px dotted #b7b7b7",
                  margin: "5px",
                }}
              >
                {/* <Upload
                batch={false}
                multiple={true}
                defaultFiles={selectedFiles}
                onAdd={handleFileSelect}
               
              /> */}
                <div className="fileupload" style={{ margin: ".58em" }}>
                  <div style={{ textAlign: "center", paddingBottom: "10px" }}>
                    <FontAwesomeIcon
                      icon={faCloudArrowUp}
                      className="fas fa-cloud-upload-alt fa-4x"
                      style={{ paddingBottom: "10px", paddingTop: "10px" }}
                    />
                    <br />
                    <label
                      className="labeldragnddrop"
                      style={{ fontWeight: "500" }}
                    >
                      Click to upload files or drag files here
                    </label>
                    <br />
                    <input
                      type="file"
                      id="fileup"
                      multiple=""
                      class="k-valid"
                      style={{ marginTop: "10px", marginLeft: "80px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="inp_upload" style={{ marginTop: "15px" }}>
                <div className="details_txt">Name:</div>
                <input
                  className="inp_field_upload"
                  type="text"
                  name="name"
                  value={documentInfo.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="inp_upload">
                <div className="details_txt">Comments:</div>
                <input
                  type="text"
                  className="inp_field_upload"
                  name="name"
                  value={documentInfo.comments}
                  onChange={handleInputChange}
                />
              </div>

              {/* <textarea
                name="comments"
                value={documentInfo.comments}
                onChange={handleInputChange}
                placeholder="Comments"
              /> */}
              <div className="inp_upload" style={{ marginBottom: "30px" }}>
                <div className="details_txt">Category:</div>
                <select
                  className="inp_cat_upload"
                  value={documentInfo.category}
                  onChange={handleCategoryChange}
                >
                  {responsecat.Result.map((category) => (
                    <option key={category.CategoryId} value={category.Name}>
                      {category.Name}
                    </option>
                  ))}
                  {/* <option value="Category 1">Category 1</option>
                  <option value="Category 2">Category 2</option>
                  <option value="Category 3">Category 3</option> */}
                </select>
              </div>
              <div className="footer_divs">
                <div className="btns_divs">
                  <button
                    onClick={handleUploadFiles}
                    className="cancel_up"
                    id="uploadbtn"
                  >
                    Upload{" "}
                    {/* <Upload
                      batch={false}
                      multiple={true}
                      style={{ zIndex: "0" }}
                      defaultFiles={selectedFiles}
                      onAdd={handleFileSelect}
                    /> */}
                  </button>
                  <button onClick={handleUploadCancel} className="cancel_up">
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isUploadPopupOpenedit && (
        <div className="popup">
          <div className="upload-popup">
            <div className="box_pop_edit">
              <div className="upload_title">
                <FontAwesomeIcon
                  icon={faCloudArrowUp}
                  style={{
                    marginRight: "4px",
                    marginLeft: "10px",
                    color: "#36537D",
                  }}
                />
                <div style={{ color: "#36537D" }}>Update</div>
              </div>

              <div className="inp_upload" style={{ marginTop: "15px" }}>
                <div className="details_txt">Name:</div>
                <input
                  className="inp_field_upload_edit"
                  type="text"
                  name="name"
                  value={documentInfo.name}
                  onChange={handleInputChange}
                />
              </div>

              <div className="inp_upload">
                <div className="details_txt">Comments:</div>
                <input
                  type="text"
                  className="inp_field_upload_edit"
                  name="name"
                  value={documentInfo.comments}
                  onChange={handleInputChange}
                />
              </div>

              <div className="inp_upload" style={{ marginBottom: "30px" }}>
                <div className="details_txt">Category:</div>
                <select
                  className="inp_cat_upload_edit"
                  value={documentInfo.category}
                  onChange={handleCategoryChange}
                >
                  {responsecat.Result.map((category) => (
                    <option key={category.CategoryId} value={category.Name}>
                      {category.Name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="footer_divs">
                <div className="btns_divs">
                  <button
                    onClick={handleUploadFilesedit}
                    className="cancel_up"
                    id="uploadbtn"
                  >
                    Upload{" "}
                  </button>
                  <button
                    onClick={handleUploadCanceledit}
                    className="cancel_up"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {isUploadPopupOpendelete && (
        <div className="popup">
          <div className="upload-popup">
            <div className="box_pop_delete">
              <div className="upload_title">
                <div style={{ color: "#36537D", marginLeft: "4px" }}>
                  Alert!
                </div>
              </div>

              <div
                className="inp_upload_delete"
                style={{ marginTop: "15px", alignItems: "center" }}
              >
                <FontAwesomeIcon
                  icon={faTriangleExclamation}
                  style={{
                    marginLeft: "8px",
                    fontSize: "35px",
                    color: "goldenrod",
                  }}
                />
                <div className="details_txt_delete">
                  Document will be deleted permanently. Are you sure?
                </div>
              </div>

              <div className="footer_divs_delete">
                <div className="btns_divs_delete">
                  <button
                    onClick={handleUploadCanceldelete}
                    className="cancel_up"
                    id="uploadbtn"
                  >
                    OK{" "}
                  </button>
                  <button
                    onClick={handleUploadCanceldelete}
                    className="cancel_up"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}







{isRequestPopupOpen && (
        <div className="popup">
          <div className="upload-popup">
            <div className="box_pop_req">
              <div className="upload_title">
             
                <div style={{ color: "#36537D" , marginRight: "4px",
                    marginLeft: "10px",fontSize:"12px"}}>Confirmation</div>
              </div>
           
             
                <div className="fileupload" style={{ margin: ".58em" }}>
                  <div style={{display:"flex",flexDirection:"row", paddingBottom: "10px" }}>
                    <FontAwesomeIcon
                      icon={faInfoCircle}
                      
                      style={{ paddingBottom: "10px", paddingTop: "10px",color:"#468BC7",fontSize:"45px" }}
                    />
             <div style={{fontWeight:"400",fontSize:"13px",fontFamily:"tahoma",color:"#333",paddingLeft:"20px",marginTop:"10px"}}>       This will send an email to client to request files. Are you sure?</div>
                
                
                  
                   
                  </div>
                </div>
            
          

            
              <div className="footer_divs">
                <div className="btns_divs">
                  <button
                    onClick={handleRequestCancel}
                    className="cancel_up"
                    id="uploadbtn"
                  >
                    Yes{" "}
               
                  </button>
                  <button onClick={handleRequestCancel} className="cancel_up">
                    No
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Documents;
