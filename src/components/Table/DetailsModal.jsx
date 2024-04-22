import { Box, Grid, Modal, Typography } from '@mui/material';
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
  };
const DetailsModal = (props) => {
  const {open,handleClose} = props;
   
  return (
    <div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
       <Grid container spacing={2}>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Name:&nbsp;</Typography>
    <Typography variant='h6'>Name</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Roll No:&nbsp;</Typography>
    <Typography variant='h6'>19MC023</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Father Name:&nbsp;</Typography>
    <Typography variant='h6'>Maheswaran K</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Gender:&nbsp;</Typography>
    <Typography variant='h6'>male</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Email:&nbsp;</Typography>
    <Typography variant='h6'>Ksrkishore@gmail.com</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Department:&nbsp;</Typography>
    <Typography variant='h6'>Bsc-Comouter Science</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Phone No:&nbsp;</Typography>
    <Typography variant='h6'>8796923158</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Age:&nbsp;</Typography>
    <Typography variant='h6'>22</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Date of Birth:&nbsp;</Typography>
    <Typography variant='h6'>88/88/5289</Typography>
</Grid>
<Grid item xs={4} style={{display:'flex',flexDirection:'row'}}>
    <Typography variant='h6' style={{fontWeight:'bold'}}>Academic Year:&nbsp;</Typography>
    <Typography variant='h6'>2024</Typography>
</Grid>
<Grid item xs={12}></Grid>


       </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default DetailsModal