import styled from '@emotion/styled/macro';
import { Height } from '@material-ui/icons';
import { Box, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React from 'react'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "80%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: "90vh",
    overflow: 'scroll',
    border:"none",
  };
 
const DetailsModal = (props) => {
  const {open,handleClose,student} = props;
   console.log(student)
  return (
    <div >
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{display:'flex',justifyContent:'center',alignItems:'center'}}
      >
        <Box sx={style}>
       <Grid container spacing={2}>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Name:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.name:"Name"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Roll No:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.rollno:"Roll No"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Father Name:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.fathersname:"Father Name"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Gender:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.gender:"Gender"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Email:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.email:"Email"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Department:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.department:"Department"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Phone No:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.phoneNo:"Phone No"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Age:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.age:"Age"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>DOB:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.dob:"Date of Birth"}</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Academic Year:&nbsp;</Typography>
    <Typography variant='h6'>{student?student.academicYear:"Academic Year"}</Typography>
</Grid>
       </Grid>
       {student && student.semesters.map((semester) => (
          <div key={semester.semester}>
            <Typography variant='h6' style={{ fontWeight: 'bold', marginTop: '20px' }}>Semester {semester.semester}</Typography>
            <TableContainer component={Paper} style={{ marginTop: '10px' }}>
              <Table>
                <TableHead>
                  <TableRow style={{ backgroundColor: '#D3D3D3' }}>
                    <TableCell style={{ fontWeight: 'bold' }}>Course Code</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Course Title</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Credits</TableCell>
                    <TableCell style={{ fontWeight: 'bold' }}>Grade</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {semester.courses.map((course) => (
                    <TableRow key={course._id}>
                      <TableCell>{course.code}</TableCell>
                      <TableCell>{course.title}</TableCell>
                      <TableCell>{course.credit}</TableCell>
                      <TableCell>{course.grade}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        ))}
        </Box>
      </Modal>
    </div>
  )
}

export default DetailsModal