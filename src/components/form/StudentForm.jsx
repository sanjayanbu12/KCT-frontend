import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState,useEffect } from 'react';


const StudentForm = ({ formData, setFormData, onValidityChange }) => {
    const [isFormValid, setIsFormValid] = useState(false);


    useEffect(() => {
        validateForm();
    }, [formData]);

    const handleInputChange = (field, value) => {
        let newValue = value || ''; // Set default value to an empty string if value is undefined
        if (field === 'name' || field === 'fathersname' || field === 'gender' || field === 'department') {
            newValue = newValue.replace(/[^A-Za-z]/gi, '');
        }
        if (field === 'phoneNo' || field === 'age') {
            // Restrict input to numeric characters only for Phone Number and Age fields
            newValue = newValue.replace(/\D/g, ''); // \D matches any non-digit character
        }
        setFormData((prevData) => ({
            ...prevData,
            [field]: newValue,
        }));
    };


    const validateForm = () => {
        const { name, rollno, fathersname, gender, email, department, phoneNo, age, dob, academicYear } = formData;
        const isValid = name && rollno && fathersname && gender && email && department && phoneNo && age && dob && academicYear;
        setIsFormValid(isValid);
        onValidityChange(isValid); 
    };


    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <div>
                <h3>Student Details</h3>
            </div>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Name</InputLabel>
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
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Roll No</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined"
                            value={formData?.rollno || ''}
                            onChange={(e) => handleInputChange('rollno', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Father`s Name</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined"
                            value={formData?.fathersname || ''}
                            onChange={(e) => handleInputChange('fathersname', e.target.value)}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Gender</InputLabel>
                        <TextField
                            value={formData?.gender || ''}
                            onChange={(e) => handleInputChange('gender', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Email</InputLabel>

                        <TextField
                            value={formData?.email || ''}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Department</InputLabel>

                        <TextField
                            value={formData?.department || ''}
                            onChange={(e) => handleInputChange('department', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Phone No</InputLabel>

                        <TextField
                            value={formData?.phoneNo || ''}
                            onChange={(e) => handleInputChange('phoneNo', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined"
                            inputProps={{ pattern: [0 - 9], maxLength: 10 }} />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Age</InputLabel>

                        <TextField
                            value={formData?.age || ''}
                            onChange={(e) => handleInputChange('age', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                    </Grid>
                </Grid>

                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Date of Birth</InputLabel>
                        <TextField
                            value={formData?.dob || ''}
                            onChange={(e) => handleInputChange('dob', e.target.value)}
                            style={{ width: '100%' }}
                            id="outlined-basic"
                            size="small"
                            type='date'
                            variant="outlined"
                            // Set max date to today's date (YYYY-MM-DD format)
                            InputLabelProps={{ shrink: true }}
                            inputProps={{ max: new Date().toISOString().split('T')[0] }}
                        />
                    </Grid>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Select Academic Year</InputLabel>
                        <Select
                            value={formData?.academicYear || ''}
                            onChange={(e) => handleInputChange('academicYear', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined">
                            <MenuItem value="2024">2022-2024</MenuItem>
                            <MenuItem value="2024">2021-2023</MenuItem>
                            <MenuItem value="2024">2020-2022</MenuItem>
                            <MenuItem value="2024">2019-2021</MenuItem>
                            <MenuItem value="2024">2018-2020</MenuItem>
                            <MenuItem value="2024">2017-2019</MenuItem>
                            <MenuItem value="2024">2016-2018</MenuItem>
                            <MenuItem value="2024">2015-2017</MenuItem>
                            <MenuItem value="2024">2014-2016</MenuItem>
                            <MenuItem value="2024">2013-2015</MenuItem>
                            <MenuItem value="2024">2012-2014</MenuItem>
                            <MenuItem value="2024">2011-2013</MenuItem>
                            <MenuItem value="2024">2010-2012</MenuItem>
                            <MenuItem value="2024">2009-2011</MenuItem>
                            <MenuItem value="2024">2008-2010</MenuItem>
                            <MenuItem value="2024">2007-2009</MenuItem>
                            <MenuItem value="2023">2006-2008</MenuItem>
                            <MenuItem value="2022">2005-2007</MenuItem>
                            <MenuItem value="2021">2004-2006</MenuItem>
                            <MenuItem value="2020">2003-2005</MenuItem>
                            <MenuItem value="2019">2002-2004</MenuItem>
                            <MenuItem value="2018">2001-2003</MenuItem>
                            <MenuItem value="2017">2000-2002</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default StudentForm