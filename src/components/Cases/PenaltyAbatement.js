import React, { useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import { DropDownList } from "@progress/kendo-react-dropdowns";
import {
  Input,
  TextArea,
  Checkbox,
  MaskedTextBox,
} from "@progress/kendo-react-inputs";
import "../../styles/PenaltyAbatement.css";

const PenaltyAbatement = () => {
  const [selectedYears, setSelectedYears] = useState([]);

  const handleYearSelection = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const yearsData = [
    2023,
    2022,
    2021,
    2020,
    2019,
    2018,
    2017,
    2016,
    2015,
    2014,
    2013,
    2012,
    2011,
    2010,
    2009,
    2008,
    2007,
    2006,
    2005,
    2004,
  ].map((year) => ({
    year,
  }));

  return (
    <div className="main_div_cont" id="penalty">
      <div className="main_heading">Penalty Abatement</div>
      <div className="custom-lines"></div>
      <div style={{ width: "90%" }}>
        {" "}
        <div
          className="main_heading"
          style={{ marginLeft: "20px", marginTop: "10px" }}
        >
          IRS Penalty Abatement
        </div>
        <div
          className="custom-lines"
          style={{ marginLeft: "20px", width: "100%" }}
        ></div>
        <div
          className="alignment alignment_cont"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <div className="label_name_req">IRS Penalty Abatement Amount</div>
          <div style={{ width: "20px" }}>:</div>
          <Input className="drpodown_list_req" />
        </div>
        <Grid
          data={yearsData}
          className="main_grid"
          style={{
            marginLeft: "20px",
            marginTop: "20px",
            height: "320px",
            marginBottom: "30px",
          }}
          scrollable="true"
        >
          <GridColumn field="year" title="Year" width="200px" />
          <GridColumn
            title="Select"
            cell={(props) => (
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "10px",
                }}
              >
                {/* <input
                  type="radio"
                  name="selectedYear"
                  value={props.dataItem.year}
                  checked={selectedYears.includes(props.dataItem.year)}
                  onChange={() => handleYearSelection(props.dataItem.year)}
                /> */}
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  value={props.dataItem.year}
                  checked={selectedYears.includes(props.dataItem.year)}
                  onChange={() => handleYearSelection(props.dataItem.year)}
                  style={{
                    color: "#ccc",
                  }}
                />
              </td>
            )}
            width="300px"
          />
        </Grid>
      </div>

      <div style={{ width: "90%" }}>
        {" "}
        <div
          className="main_heading"
          style={{ marginLeft: "20px", marginTop: "10px" }}
        >
          State Penalty Abatement
        </div>
        <div
          className="custom-lines"
          style={{ marginLeft: "20px", width: "100%" }}
        ></div>
        <div
          className="alignment alignment_cont"
          style={{ marginBottom: "20px", marginTop: "20px" }}
        >
          <div className="label_name_req">State Penalty Abatement Amount</div>
          <div style={{ width: "20px" }}>:</div>
          <Input className="drpodown_list_req" />
        </div>
        <Grid
          data={yearsData}
          style={{
            width: "450px",
            marginLeft: "20px",
            marginTop: "20px",
            height: "320px",
          }}
          scrollable="true"
        >
          <GridColumn field="year" title="Year" width="200px" />
          <GridColumn
            title="Select"
            cell={(props) => (
              <td
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: "10px",
                }}
              >
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  value={props.dataItem.year}
                  checked={selectedYears.includes(props.dataItem.year)}
                  onChange={() => handleYearSelection(props.dataItem.year)}
                  style={{
                    color: "#ccc",
                  }}
                />
                {/* <input
                  type="radio"
                  name="selectedYear"
                  value={props.dataItem.year}
                  checked={selectedYears.includes(props.dataItem.year)}
                  onChange={() => handleYearSelection(props.dataItem.year)}
                /> */}
              </td>
            )}
            width="300px"
          />
        </Grid>
      </div>
    </div>
  );
};

export default PenaltyAbatement;
