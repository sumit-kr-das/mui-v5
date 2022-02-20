import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const Data = [
  { label: "The Shawshank Redemption", year: 1994 },
  { label: "The Godfather", year: 1972 },
  { label: "The Godfather: Part II", year: 1974 },
  { label: "The Dark Knight", year: 2008 },
  { label: "12 Angry Men", year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: "Pulp Fiction", year: 1994 },
  { label: "The LOR", year: 2003 },
];

const MobileCategory = () => {
  return <Autocomplete disablePortal options={Data} 
  renderInput={(params)=>(
      <TextField {...params} label="Select Product" align="center" />
  )} 
  />;
};

export default MobileCategory;
