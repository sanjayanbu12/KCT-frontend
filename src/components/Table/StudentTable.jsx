  import React, { useEffect, useState } from 'react';
  import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper, Tooltip } from '@mui/material';
  import EditIcon from '@mui/icons-material/Edit';
  import DeleteIcon from '@mui/icons-material/Delete';
  import Profile from '../ProfileDetails/Profile';
  import DetailsModal from './DetailsModal';
  import axios from 'axios';
  import StarIcon from '@mui/icons-material/Star';
  import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
  import Swal from 'sweetalert2';

  const StudentTable = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [details, setDetails] = useState();
    const [selectedStudent, setSelectedStudent] = useState();
    console.log(selectedStudent, 'selectedStudent');
    const getDetails = async() => {
      try{
        const response= await axios.get(`https://kct-backend.onrender.com/api/getallstudents`);
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

    const handleDelete = async (id) => {
      // Show a confirmation dialog before deleting
      Swal.fire({
        title: 'Are you sure?',
        text: 'You will not be able to recover this student!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Delete',
        cancelButtonText: 'Cancel',
        confirmButtonStyle: {
          marginRight: '10px',
          // Adjust margin between buttons
        },
        cancelButtonStyle: {
          backgroundColor: '#d33', // Customize cancel button color
        },
      }).then(async (result) => {
        if (result.isConfirmed) {
          try {
            // If confirmed, make the delete request
            const response = await axios.delete(`https://kct-backend.onrender.com/api/delete-student/${id}`);
            console.log(response);
            // Show success message
            Swal.fire('Deleted!', 'The student has been deleted.', 'success');
            // Fetch updated details after deletion
            getDetails();
          } catch (error) {
            console.log(error);
            // Show error message if deletion fails
            Swal.fire('Error!', 'Failed to delete student.', 'error');
          }
        }
      });
    };

  
    const getClassCircle = (studentClass) => {
      let classNumber = '';
      let additionalIcon = null;
    
      switch (studentClass) {
        case 'First Class with Distinction':
          classNumber = '1';
          additionalIcon = <StarIcon style={{ color: '#FFD700', fontSize: 18 }} />;
          break;
        case 'First Class':
          classNumber = '1';
          break;
        case 'Second Class':
          classNumber = '2';
          break;
        case 'Third Class':
          classNumber = '3';
          break;
        default:
          classNumber = 'F'; // 'F' for Fail or any other case
          break;
      }
    
      return (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 40,
            height: 40,
            borderRadius: '50%',
            backgroundColor: '#18283B', // You can customize the color
            color: '#fff',
            fontWeight: 'bold',
          }}
        >
        {/* Render star icon if it exists */}
          {classNumber}
          {additionalIcon}
        </div>
      );
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
                <TableCell>Academic Year</TableCell>
                <TableCell>CGPA</TableCell>
                <TableCell>Class</TableCell>
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
        <TableCell>{data.academicYear}</TableCell>
        <TableCell>{data.cgpa}</TableCell>
        <TableCell>{getClassCircle(data.studentClass)}</TableCell>
        <TableCell  onClick={() => handleViewDetails(data)} style={{ cursor: 'pointer' }}>
         <RemoveRedEyeIcon/>
        </TableCell>
        <TableCell>
        <Tooltip title="Delete">
        <DeleteIcon
  onClick={() => handleDelete(data._id)}
  style={{ cursor: 'pointer' }}
/>
          </Tooltip>
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
