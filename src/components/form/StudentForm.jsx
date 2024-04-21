import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; 
import InputLabel from '@mui/material/InputLabel';

const StudentForm = ({ formData, setFormData }) => {
    const handleInputChange = (field, value) => {
      setFormData((prevData) => ({
        ...prevData,
        studentDetails: {
          ...prevData?.studentDetails,
          [field]: value
        }
      }));
    };
    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <div>
                <h3>Student Details</h3>
            </div>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Name</InputLabel>
                    <TextField
              id="student-name"
              value={formData.studentDetails?.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              fullWidth
              variant="outlined"
            />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}> Roll No</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined"
                        value={formData.studentDetails?.rollno || ''}
                        onChange={(e) => handleInputChange('rollno', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Father`s Name</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined"
                        value={formData.studentDetails?.fathersname || ''}
                        onChange={(e) => handleInputChange('fathersname', e.target.value)}
                        />
                    </Grid> 
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Gender</InputLabel>
                        <TextField
                         value={formData.studentDetails?.gender || ''}
                         onChange={(e) => handleInputChange('gender', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Email</InputLabel>

                        <TextField
                         value={formData.studentDetails?.email || ''}
                         onChange={(e) => handleInputChange('email', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Department</InputLabel>

                        <TextField 
                         value={formData.studentDetails?.department || ''}
                         onChange={(e) => handleInputChange('department', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Phone No</InputLabel>

                        <TextField 
                         value={formData.studentDetails?.phoneNo || ''}
                         onChange={(e) => handleInputChange('phoneNo', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Age</InputLabel>

                        <TextField  
                         value={formData.studentDetails?.age || ''}
                         onChange={(e) => handleInputChange('age', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Date of Birth</InputLabel>

                        <TextField 
                         value={formData.studentDetails?.dob || ''}
                         onChange={(e) => handleInputChange('dob', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" type='date' variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Select Academic Year</InputLabel>
                        <Select 
                         value={formData.studentDetails?.academicYear || ''}
                         onChange={(e) => handleInputChange('academicYear', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic"  size="small"  variant="outlined">
                            <MenuItem value="Option 1">Option 1</MenuItem>
                            <MenuItem value="Option 2">Option 2</MenuItem>
                            <MenuItem value="Option 3">Option 3</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default StudentForm