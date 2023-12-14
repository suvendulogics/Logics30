import React from "react";
import adminData from "./AdministrationData";
import "../../styles/AdditionalFields.css";
const AdminTable = () => {
  return (
    <div>
      <h2>Admin Data Table</h2>
      <table className="admin-table">
        <thead>
          <tr>
            <th>UDFID</th>
            {/* <th>Read Only</th> */}
            <th>Type</th>
            <th>Label</th>
            <th>Default value</th>
            <th>Values</th>
            <th>Group Name</th>
            <th>UILocation</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {adminData.result.map((item, index) => (
            <tr key={index}>
              <td>{item.UDFID}</td>
              {/* <td>{item.IsReadOnly}</td>  */}
              <td>{item.ColType}</td>
              <td>{item.FieldLabel}</td>
              <td>{item.DefaultValue}</td>
              <td>{item.Value}</td>
              <td>{item.GroupName}</td>
              <td>{item.UILocation}</td>
              <td>{item.Position}</td>

              {/* {console.log("item.GroupName}",item.GroupName)} */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminTable;
