import React from 'react';
import { Box, Grid, TextField, InputLabel } from '@mui/material';

const StaffForm = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      // staffDetails: {
      //   ...prevData.staffDetails,
      //   [field]: value
      // }
      [field]: value
    }));
  };

  return (
    <div style={{ margin: '2vw 2vw 2vw 0' }}>
      <div>
        <h3>Staff Details</h3>
      </div>
      <Box>
        <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
          <Grid item xs={3}>
            <InputLabel htmlFor="staff-name" style={{ fontWeight: '500', color: 'black' }}>Name</InputLabel>
            <TextField
              id="staff-name"
              value={formData.StaffName || ''}
              onChange={(e) => handleInputChange('StaffName', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="staff-name" style={{ fontWeight: '500', color: 'black' }}>Gender</InputLabel>
            <TextField
              id="staff-name"
              value={formData.StaffGender || ''}
              onChange={(e) => handleInputChange('StaffGender', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="staff-name" style={{ fontWeight: '500', color: 'black' }}>Email</InputLabel>
            <TextField
              id="staff-name"
              value={formData.StaffEmail || ''}
              onChange={(e) => handleInputChange('StaffEmail', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="staff-name" style={{ fontWeight: '500', color: 'black' }}>Department</InputLabel>
            <TextField
              id="staff-name"
              value={formData.StaffDepartment || ''}
              onChange={(e) => handleInputChange('StaffDepartment', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="staff-name" style={{ fontWeight: '500', color: 'black' }}>Designation</InputLabel>
            <TextField
              id="staff-name"
              value={formData.StaffDesignation || ''}
              onChange={(e) => handleInputChange('StaffDesignation', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
          </Grid>
          <Grid item xs={3}>
            <InputLabel htmlFor="staff-name" style={{ fontWeight: '500', color: 'black' }}>Phone No</InputLabel>
            <TextField
              id="staff-name"
              value={formData.StaffPhoneNo || ''}
              onChange={(e) => handleInputChange('StaffPhoneNo', e.target.value)}
              fullWidth
              variant="outlined"
              size='small'
            />
          </Grid>
          {/* Add other fields (Gender, Email, Department, Designation, Phone No) similarly */}
        </Grid>
      </Box>
    </div>
  );
};

export default StaffForm;
