import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';

const StaffForm = () => {
    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <div>
                <h3>Staff Details</h3>
            </div>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="outlined-basic" placeholder='Enter Name' variant="outlined" />
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default StaffForm