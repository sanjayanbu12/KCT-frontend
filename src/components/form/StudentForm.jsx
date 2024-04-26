import React, { useRef } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, IconButton } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect } from 'react';
import AvatarImage from './AvatarImage';


const StudentForm = ({ formData, setFormData, onValidityChange , avatarimg, setAvatarimg }) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [image, setImage] = useState(null);


    useEffect(() => {
        validateForm();
    }, [formData]);

    const handleInputChange = (field, value) => {
        let newValue = value || ''; 
        if (field === 'name' || field === 'fathersname' || field === 'gender' || field === 'department') {
            newValue = newValue.replace(/[^A-Za-z .]/gi, '');
        }
        if (field === 'phoneNo' || field === 'age') {
            newValue = newValue.replace(/\D/g, ''); 
        }
        if (field === 'email') {
            newValue = newValue.trim(); // Remove leading and trailing spaces
            if (newValue.endsWith('@gmail.com')) {
                setEmailError(''); // Clear email error if valid
            } else {
                setEmailError('Use @gmail.com'); // Set email error
            }
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
    const fileInputRef = useRef(null);
  const selectfiles = () => {
    fileInputRef.current.click();
}

const onFileSelect = async (event) => {
    const file = event.target.files[0];
    setAvatarimg(file);
    console.log(file);
    const reader = new FileReader();
    
    reader.onload = () => {
        setImage(reader.result);
    };
    
    if (file) {
        reader.readAsDataURL(file);
    }
};

    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <div>
                <h3>Student Details</h3>
            </div>
            <Box sx={{}}>
                <Grid container spacing={2} style={{ marginBottom: '3vw' }}>
                    <Grid item xs={3}>
                    <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
             onClick={selectfiles}
            >
              <input style={{ display: "none" }} type="file" ref={fileInputRef} onChange={onFileSelect} ></input>
              <AvatarImage
                src={image}
                className={".crop-container"}
                
              />
            </IconButton>
                    </Grid>
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
               
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}>Email</InputLabel>

                        <TextField
                            value={formData?.email || ''}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            style={{ width: '100%' }} id="outlined-basic" size="small" variant="outlined" />
                              {emailError && <span style={{ color: 'red' }}>{emailError}</span>}
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
                            <MenuItem value="2022-2024">2022-2024</MenuItem>
                            <MenuItem value="2021-2023">2021-2023</MenuItem>
                            <MenuItem value="2020-2022">2020-2022</MenuItem>
                            <MenuItem value="2019-2021">2019-2021</MenuItem>
                            <MenuItem value="2018-2020">2018-2020</MenuItem>
                            <MenuItem value="2017-2019">2017-2019</MenuItem>
                            <MenuItem value="2016-2018">2016-2018</MenuItem>
                            <MenuItem value="2015-2017">2015-2017</MenuItem>
                            <MenuItem value="2014-2016">2014-2016</MenuItem>
                            <MenuItem value="2013-2015">2013-2015</MenuItem>
                            <MenuItem value="2012-2014">2012-2014</MenuItem>
                            <MenuItem value="2011-2013">2011-2013</MenuItem>
                            <MenuItem value="2010-2012">2010-2012</MenuItem>
                            <MenuItem value="2009-2011">2009-2011</MenuItem>
                            <MenuItem value="2008-2010">2008-2010</MenuItem>
                            <MenuItem value="2007-2009">2007-2009</MenuItem>
                            <MenuItem value="2006-2008">2006-2008</MenuItem>
                            <MenuItem value="2005-2007">2005-2007</MenuItem>
                            <MenuItem value="2004-2006">2004-2006</MenuItem>
                            <MenuItem value="2003-2005">2003-2005</MenuItem>
                            <MenuItem value="2002-2004">2002-2004</MenuItem>
                            <MenuItem value="2001-2003">2001-2003</MenuItem>
                            <MenuItem value="2000-2002">2000-2002</MenuItem>
                        </Select>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default StudentForm