import React, { useState } from "react";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid, GridColumn } from "@progress/kendo-react-grid";
import '../../styles/PenaltyAbatement.css';
const IdentityTheft = () => {
  const [selectedYears, setSelectedYears] = useState([]);

  const handleYearSelection = (year) => {
    if (selectedYears.includes(year)) {
      setSelectedYears(selectedYears.filter((y) => y !== year));
    } else {
      setSelectedYears([...selectedYears, year]);
    }
  };

  const yearsData = [2023,2022,2021,2020,2019,2018,2017,2016,2015,2014,2013,2012,2011,2010,2009,2008,2007,2006,2005,2004].map((year) => ({
    year,
  }));

  return (
  
        <div
    className="main_div_cont" id="identity"
      >
        <div className="main_heading">Identity Theft</div>
        <div className="custom-lines" style={{marginBottom:"20px"}}></div>
      <Grid data={yearsData}  className="main_grid">
        <GridColumn field="year" title="Year" width="200px" />
        <GridColumn
          title="Select"
          cell={(props) => (
            <td      style={{
              display: "flex",
              justifyContent: "center",
              alignItems:"center",
              paddingTop:"10px"
            }}>
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
  );
};

export default IdentityTheft;

