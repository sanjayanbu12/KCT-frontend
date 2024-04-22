import React, { useEffect, useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Profile from '../ProfileDetails/Profile';
import DetailsModal from './DetailsModal';
import axios from 'axios';

const StudentTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [details, setDetails] = useState();
  const [selectedStudent, setSelectedStudent] = useState();
  console.log(selectedStudent, 'selectedStudent');
  const getDetails = async() => {
    try{
      const response= await axios.get(`http://localhost:5000/api/getallstudents`);
      setDetails(response.data)
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    getDetails()
  },[]);

  const handleViewDetails = (student) => {
    setSelectedStudent(student); // Set selected student details in state
    handleOpen(); // Open modal
  };

  return (
    <div style={{ margin: '3vw 3vw 3vw 0' }}>
      <div>
        <h3>Student Table</h3>
      </div>
      <TableContainer component={Paper} style={{ margin: '3vw 3vw 3vw 0' }}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: '#D3D3D3' }}>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Mobile Number</TableCell>
              <TableCell>Date of Birth</TableCell>
              <TableCell>View</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          {details && details.map((data) => (  
  <TableBody key={data._id}>
    <TableRow>
      <TableCell>{data.name}</TableCell>
      <TableCell>{data.email}</TableCell>
      <TableCell>{data.phoneNo}</TableCell>
      <TableCell>{data.dob}</TableCell>
     
      <TableCell  onClick={() => handleViewDetails(data)} style={{ cursor: 'pointer' }}>
        View details
      </TableCell>
      <TableCell>
        <DeleteIcon />
      </TableCell>
    </TableRow>
  </TableBody>
))}
        </Table>
      </TableContainer>
      <DetailsModal open={open} handleClose={handleClose} student={selectedStudent}/>
    </div>
  );
}

export default StudentTable;
