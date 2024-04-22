import React, { useState } from 'react';
import { Table, TableContainer, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Profile from '../ProfileDetails/Profile';
import DetailsModal from './DetailsModal';

const StudentTable = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
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
              <TableCell>Action</TableCell>
              <TableCell>View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Sanjay</TableCell>
              <TableCell>sanjayanbazhagan12@gmail.com</TableCell>
              <TableCell>9003386363</TableCell>
              <TableCell>20-01-2002</TableCell>
              <TableCell>
                <EditIcon />
                <DeleteIcon />
              </TableCell>
              <TableCell onClick={handleOpen}>
                View details
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 1 Data 1</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 3</TableCell>
              <TableCell>Row 1 Data 4</TableCell>
              <TableCell>
                <EditIcon />
                <DeleteIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 1 Data 1</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 3</TableCell>
              <TableCell>Row 1 Data 4</TableCell>
              <TableCell>
                <EditIcon />
                <DeleteIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 1 Data 1</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 3</TableCell>
              <TableCell>Row 1 Data 4</TableCell>
              <TableCell>
                <EditIcon />
                <DeleteIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Row 1 Data 1</TableCell>
              <TableCell>Row 1 Data 2</TableCell>
              <TableCell>Row 1 Data 3</TableCell>
              <TableCell>Row 1 Data 4</TableCell>
              <TableCell>
                <EditIcon />
                <DeleteIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <DetailsModal open={open} handleClose={handleClose} />
    </div>
  );
}

export default StudentTable;
