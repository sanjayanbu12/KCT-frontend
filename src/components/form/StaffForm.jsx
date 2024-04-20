import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

const StaffForm = () => {
    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <div>
                <h3>Staff Details</h3>
            </div>
            <Box>
            <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}> Name</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}> Gender</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Email</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Department</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}>Designation</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                    <InputLabel id="demo-simple-select-label" style={{fontWeight: '500',color: 'black'}}> Phone No</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small"  variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default StaffForm