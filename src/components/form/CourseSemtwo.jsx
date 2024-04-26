import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Button, Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import styled from 'styled-components';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

const CourseSemtwo = (props) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const { formData, setFormData, onValidityChange ,marksheet2img ,setMarksheet2img } = props;
    const [marksheet2, setMarksheet2] = useState(null);

    const creditInputRef2 = useRef(null);
    const gradeInputRef2 = useRef(null);

    const handleAddCourseClick = () => {
        const updatedFormData = { ...formData };
        updatedFormData.semesters[1].courses.push({});
        setFormData(updatedFormData);
    };

    const handleCourseChange = (index, field, value) => {
        const updatedFormData = { ...formData };
        updatedFormData.semesters[1].courses[index][field] = value;
        setFormData(updatedFormData);
    };

    useEffect(() => {
        validateForm();
    }, [formData]);
    

  

    const validateForm = () => {
        // Check if all courses in semester 2 have required fields filled
        const isSemesterCoursesValid = formData.semesters[1].courses.every(course => {
            return course.code && course.title && course.credit && course.grade;
        });

        // Check if overall form is valid (semester courses are valid)
        const isValid = isSemesterCoursesValid;

        setIsFormValid(isValid);
        onValidityChange(isValid);
    };
    const handleChange = (event) => {
        setMarksheet2(event.target.value);
    };
    const fileInputRef = useRef(null);
    const onFileSelect = async (event) => {
        const file = event.target.files[0];
        setMarksheet2img(file);
        console.log(file,"file");
    }
    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '1vw' }}>
                    <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Semester</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-disabled" disabled size="small" value="Semester 2" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> mark sheet</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={marksheet2}
                            onChange={handleChange}
                            sx={{ width: '100%' }}
                            size='small'
                        >
                            <MenuItem value="Recieved">Recieved</MenuItem>
                            <MenuItem value="Not Recieved">Not Recieved</MenuItem>
                        </Select>
                    </Grid>
                    {marksheet2 === 'Recieved' &&<Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Upload Marksheet</InputLabel>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={marksheet2img ? <CheckCircleIcon /> : <CloudUploadIcon />}
                        >
                           {marksheet2img ? 'Marksheet Uploaded' : 'Upload Marksheet'} 
                            <VisuallyHiddenInput type="file" ref={fileInputRef} onChange={onFileSelect}/>
                        </Button>
                    </Grid>}
                </Grid>

                {formData.semesters[1].courses.map((course, index) => (
                    <Grid container spacing={2} style={{ marginBottom: '1vw' }} key={index}>
                        <Grid item xs={3}>
                            <InputLabel id={`course-code-label-${index}`} style={{ fontWeight: '500', color: 'black' }}>Course Code</InputLabel>
                            <TextField style={{ width: '100%' }} id={`course-code-${index}`} size="small" variant="outlined"
                                onChange={(e) => handleCourseChange(index, 'code', e.target.value)} />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel id={`course-title-label-${index}`} style={{ fontWeight: '500', color: 'black' }}> Course Title</InputLabel>
                            <TextField style={{ width: '100%' }} id={`course-title-${index}`} size="small" variant="outlined"
                                onChange={(e) => handleCourseChange(index, 'title', e.target.value)} />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel id={`credit-points-label-${index}`} style={{ fontWeight: '500', color: 'black' }}>Credit Points</InputLabel>
                            <TextField style={{ width: '100%' }} id={`credit-points-${index}`} size="small" variant="outlined"
                                type="number"
                                inputRef={creditInputRef2}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/[^0-9]/g, '');
                                    handleCourseChange(index, 'credit', newValue); 
                                }}
                            />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel id={`grade-points-label-${index}`} style={{ fontWeight: '500', color: 'black' }}>Grade Points</InputLabel>
                            <TextField style={{ width: '100%' }} id={`grade-points-${index}`} size="small" variant="outlined"
                                type="number"
                                inputRef={gradeInputRef2}
                                onChange={(e) => {
                                    const newValue = e.target.value.replace(/[^0-9]/g, '');
                                    handleCourseChange(index, 'grade', newValue);
                                }}
                            />
                        </Grid>
                    </Grid>
                ))}

                <Button variant="contained" color="primary" onClick={handleAddCourseClick} sx={{ width: '20%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
                    Add Course
                </Button>
            </Box>
        </div>
    );
};

export default CourseSemtwo;