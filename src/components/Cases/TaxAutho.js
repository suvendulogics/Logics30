import React, { useState } from "react";
import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import "@progress/kendo-theme-default/dist/all.css";
import "../../styles/TaxAutho.css";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DropDownList } from "@progress/kendo-react-dropdowns";

const TaxAutho = () => {
  const [data, setData] = useState([]);
  const [isDialogVisible, setDialogVisible] = useState(false);
  const [newItem, setNewItem] = useState({ name: "", contact: "" });

  const addRow = () => {
    setNewItem({ name: "", contact: "" });
    setDialogVisible(true);
  };

  const saveNewItem = () => {
    if (newItem.name && newItem.contact) {
      const id = Math.max(...data.map((item) => item.id), 0) + 1;
      setData([...data, { id, ...newItem }]);
      setDialogVisible(false);
    }
  };

  const closeDialog = () => {
    setDialogVisible(false);
  };

  return (
    <div>
      <div className="main_div_taxauth">
        <div className="main_heading">Tax Authority Contacts</div>
        <div className="custom-lines"></div>

        <div>
        
          <Grid data={data} style={{ width: "490px" }} id="taxautho">
            <GridToolbar  >  <button onClick={addRow} className="add_btn">
            + Add
          </button></GridToolbar>
            <GridColumn field="#" title="#" width="50px" />
            <GridColumn field="name" title="Name" width="190px" />
            <GridColumn field="contact" title="Contact" width="190px" />
            <GridColumn field="" title="" width="58px" />
          </Grid>
        </div>
      </div>

      {isDialogVisible && (
        <div className="popup">
          <div className="pop_cont_tax">
            <div  className="add_item"> Add New Item</div>
            <div className="dialog-content" >

              <div className="content_main">
                <div className="text_name_tax">Full Name</div>
                <div>: </div>
                <input
                  type="text"
                  className="inp_div_tax"
                  value={newItem.name}
                  onChange={(e) =>
                    setNewItem({ ...newItem, name: e.target.value })
                  }
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Officer ID </div>
                <div>: </div>
                <input
                className="inp_div_tax"
                  type="text"
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Agency </div>
                <div>: </div>
                <DropDownList
                  
                style={{width:"145px",border: "1px solid rgb(186, 186, 186)",height:"25px"}}
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Job Title </div>
                <div>: </div>
                <DropDownList
                  
                style={{width:"145px",border: "1px solid rgb(186, 186, 186)",height:"25px"}}
                />
              </div>

              <div className="content_main">
                <div className="text_name_tax">Full Address</div>
                <div>: </div>
                <input
                  type="text"
                  className="inp_div_tax"
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Email </div>
                <div>: </div>
                <input
                  type="text"
                  placeholder="user@domain.com"
                  className="inp_div_tax"
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Phone </div>
                <div>: </div>
                <input
                  type="text" className="inp_div_tax"
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Fax </div>
                <div>: </div>
                <input
                  type="text" className="inp_div_tax"
                />
              </div>
              <div className="content_main">
                <div className="text_name_tax">Comments </div>
                <div>: </div>
                <input
                  type="text" className="inp_div_tax"
                />
              </div>





              <div className="content_main">
                <div className="text_name_tax">Contact</div>
                <div>: </div>
                <input
                className="inp_div_tax"
                  type="text"
                  value={newItem.contact}
                  onChange={(e) =>
                    setNewItem({ ...newItem, contact: e.target.value })
                  }
                />
              </div>
            </div>
            <div className="dialog-actions">
             
              <button onClick={closeDialog} className="save_btn_add">Cancel</button>
              <button onClick={saveNewItem} className="save_btn_add">OK</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TaxAutho;







