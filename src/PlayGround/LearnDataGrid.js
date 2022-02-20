import React, {useState, useEffect} from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/system";

// 1.coloms: Table Header
const cols = [
  { field: "name", headerName: "name", width: 200 },
  { field: "email", headerName: "email", width: 200 },
  { field: "phone", headerName: "phone", width: 200 },
  { field: "website", headerName: "website", width: 200 },
  { field: "company", headerName: "company", width: 200 },
];

// 2.rows: Table body
// const rows = [
//   { id: 1, studentName: "Sumit Kumar Das", studentScore: 85, studentAge: 24 },
//   { id: 2, studentName: "Snehasis Das", studentScore: 52, studentAge: 14 },
//   { id: 3, studentName: "Dipali Das", studentScore: 42, studentAge: 45 },
//   { id: 4, studentName: "Supu Das", studentScore: 56, studentAge: 12 },
// ];



const LearnDataGrid = () => {
  const [users, setUsers] = useState([]);
  const fetchData = async() =>{
    try{
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await res.json();
      setUsers(data)
    }catch(err){
      console.log(err.message);
    }
  }

  useEffect(()=>{
    fetchData()
  },[])

  // trim the data and grab what we want
const trimRowData = users?.map(user=>{
  return{
    // name:user && user.name
    id:user?.id,
    name: user?.name, 
    email: user?.email,
    phone: user?.phone,
    website: user?.website,
    company: user?.company.name
  }
})

  return (
    <div style={{ width: "100%", }}>
      <DataGrid checkboxSelection autoHeight pageSize={5} rows={trimRowData} columns={cols}  />
    </div>
  );
};

export default LearnDataGrid;
