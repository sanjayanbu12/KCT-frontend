import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { 
  Table, 
  TableContainer, 
  TableHead, 
  TableRow, 
  TableCell, 
  TableBody, 
  Paper, 
  Tooltip, 
  Pagination, 
  InputBase,  // Import InputBase from Material-UI
  IconButton  // Import IconButton from Material-UI
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import SearchIcon from '@mui/icons-material/Search';
import StarIcon from '@mui/icons-material/Star';
import Swal from 'sweetalert2';
import DetailsModal from './DetailsModal';

const StudentTable = () => {
  const [details, setDetails] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  }
  const rowsPerPage = 6;

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    try {
      const response = await axios.get(`https://kct-backend.onrender.com/api/getallstudents`);
      setDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleViewDetails = (student) => {
    setOpen(true);
    setSelectedStudent(student);
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this student!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
      cancelButtonText: 'Cancel',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`https://kct-backend.onrender.com/api/delete-student/${id}`);
          Swal.fire('Deleted!', 'The student has been deleted.', 'success');
          getDetails();
        } catch (error) {
          console.log(error);
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
          backgroundColor: '#18283B',
          color: '#fff',
          fontWeight: 'bold',
        }}
      >
        {classNumber}
        {additionalIcon}
      </div>
    );
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
    setPage(1); // Reset page to 1 when search query changes
  };

  const filteredData = details.filter((data) =>
    data.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.phoneNo.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.academicYear.toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.cgpa.toString().toLowerCase().includes(searchQuery.toLowerCase()) ||
    data.studentClass.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const startIndex = (page - 1) * rowsPerPage;
  const paginatedData = filteredData.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div style={{ margin: '3vw 3vw 3vw 0' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem',justifyContent:'space-between' }}>
        <h3 style={{ marginRight: '1rem' }}>Student Table</h3>
        <Paper component="form" elevation={3} style={{ padding: '4px 8px', display: 'flex', alignItems: 'center',justifyContent:'space-between' }}>
          <InputBase
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchInputChange}
            style={{ flex: 1 }}
          />
          {/* <IconButton type="submit" aria-label="search"> */}
            <SearchIcon sx={{ mr:'10px' }} />
          {/* </IconButton> */}
        </Paper>
      </div>
      <TableContainer component={Paper}>
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
          <TableBody>
            {paginatedData.map((data) => (
              <TableRow key={data._id}>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.email}</TableCell>
                <TableCell>{data.phoneNo}</TableCell>
                <TableCell>{data.academicYear}</TableCell>
                <TableCell>{data.cgpa}</TableCell>
                <TableCell>{getClassCircle(data.studentClass)}</TableCell>
                <TableCell onClick={() => handleViewDetails(data)} style={{ cursor: 'pointer' }}>
                  <RemoveRedEyeIcon />
                </TableCell>
                <TableCell>
                  <Tooltip title="Delete">
                    <DeleteIcon onClick={() => handleDelete(data._id)} style={{ cursor: 'pointer' }} />
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        count={Math.ceil(filteredData.length / rowsPerPage)}
        page={page}
        onChange={(event, value) => setPage(value)}
        style={{ marginTop: '1rem' }}
      />
      <DetailsModal open={open} handleClose={handleClose} student={selectedStudent} />
    </div>
  );
};

export default StudentTable;