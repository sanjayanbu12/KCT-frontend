import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; 
import InputLabel from '@mui/material/InputLabel';

const StudentForm = ({ formData, setFormData }) => {
    console.log(formData)
    const handleInputChange = (field, value) => {
        if (field === 'dob') {
          // Parse the date string and convert it to the desired format
          const parsedDate = new Date(value);
          const formattedDate = `${parsedDate.getDate()}/${parsedDate.getMonth() + 1}/${parsedDate.getFullYear()}`;
          setFormData({ ...formData, [field]: formattedDate });
        } else {
          setFormData({ ...formData, [field]: value });
        }
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
              value={formData?.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}> Roll No</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined"
                        value={formData?.rollno || ''}
                        onChange={(e) => handleInputChange('rollno', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Father`s Name</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined"
                        value={formData?.fathersname || ''}
                        onChange={(e) => handleInputChange('fathersname', e.target.value)}
                        />
                    </Grid> 
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Gender</InputLabel>
                        <TextField
                         value={formData?.gender || ''}
                         onChange={(e) => handleInputChange('gender', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Email</InputLabel>

                        <TextField
                         value={formData?.email || ''}
                         onChange={(e) => handleInputChange('email', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Department</InputLabel>

                        <TextField 
                         value={formData?.department || ''}
                         onChange={(e) => handleInputChange('department', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Phone No</InputLabel>

                        <TextField 
                         value={formData?.phoneNo || ''}
                         onChange={(e) => handleInputChange('phoneNo', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined"
                        inputProps={{ pattern: [0-9], maxLength: 10 }} />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Age</InputLabel>

                        <TextField  
                         value={formData?.age || ''}
                         onChange={(e) => handleInputChange('age', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Date of Birth</InputLabel>

                        <TextField 
                         value={formData?.dob || ''}
                         onChange={(e) => handleInputChange('dob', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic" size="small" type='date'  variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                          }} />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Select Academic Year</InputLabel>
                        <Select 
                         value={formData?.academicYear || ''}
                         onChange={(e) => handleInputChange('academicYear', e.target.value)}
                        style={{ width: '100%' }} id="outlined-basic"  size="small"  variant="outlined">
                            <MenuItem value="2024">2024</MenuItem>
                            <MenuItem value="2023">2023</MenuItem>
                            <MenuItem value="2022">2022</MenuItem>
                            <MenuItem value="2021">2021</MenuItem>
                            <MenuItem value="2020">2020</MenuItem>
                            <MenuItem value="2019">2019</MenuItem>
                            <MenuItem value="2018">2018</MenuItem>
                            <MenuItem value="2017">2017</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default StudentForm