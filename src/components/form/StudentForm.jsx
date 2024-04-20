import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'; 
import InputLabel from '@mui/material/InputLabel';

const StudentForm = () => {
    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <div>
                <h3>Student Details</h3>
            </div>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Name</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}> Roll No</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Father`s Name</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Gender</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Email</InputLabel>

                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Department</InputLabel>

                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Phone No</InputLabel>

                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Age</InputLabel>

                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Date of Birth</InputLabel>

                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" type='date' variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Select Academic Year</InputLabel>
                        <Select style={{ width: '100%' }} id="outlined-basic"  size="small"  variant="outlined">
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