import React from 'react';
import { Box, Grid, TextField, InputLabel } from '@mui/material';

const StaffForm = ({ formData, setFormData }) => {
  const handleInputChange = (field, value) => {
    setFormData((prevData) => ({
      ...prevData,
      staffDetails: {
        ...prevData.staffDetails,
        [field]: value
      }
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
            <InputLabel htmlFor="staff-name">Name</InputLabel>
            <TextField
              id="staff-name"
              value={formData.staffDetails.name || ''}
              onChange={(e) => handleInputChange('name', e.target.value)}
              fullWidth
              variant="outlined"
            />
          </Grid>
          {/* Add other fields (Gender, Email, Department, Designation, Phone No) similarly */}
        </Grid>
      </Box>
    </div>
  );
};

export default StaffForm;
