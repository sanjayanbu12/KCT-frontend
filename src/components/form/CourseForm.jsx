import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Button, Select, MenuItem } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import styled from 'styled-components';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
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

const CourseForm = (props) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const { formData, setFormData, onValidityChange, marksheet1img ,setMarksheet1img } = props;
    const [marksheet1, setMarksheet1] = useState(null);

    const creditInputRef = useRef(null);
    const gradeInputRef = useRef(null);

    const handleAddCourseClick = () => {
        const updatedFormData = { ...formData };
        updatedFormData.semesters[0].courses.push({});
        setFormData(updatedFormData);
    };

    const handleCourseChange = (index, field, value) => {
        const updatedFormData = { ...formData };
        updatedFormData.semesters[0].courses[index][field] = value;
        setFormData(updatedFormData);
    };

    useEffect(() => {
        validateForm();
    }, [formData]);

    const handleChange = (event) => {
        setMarksheet1(event.target.value);
    };

    const validateForm = () => {
        // Check if all courses in semester 1 have required fields filled
        const isSemesterCoursesValid = formData.semesters[0].courses.every(course => {
            return course.code && course.title && course.credit && course.grade;
        });

        // Check if overall form is valid (semester courses are valid)
        const isValid = isSemesterCoursesValid;

        setIsFormValid(isValid);
        onValidityChange(isValid);
    };

    const fileInputRef = useRef(null);
    const onFileSelect = async (event) => {
        const file = event.target.files[0];
        setMarksheet1img(file);
        console.log(file,"file");
    }

    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '1vw' }}>
                    <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Semester</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-disabled" disabled size="small" value="Semester 1" variant="outlined" />
                    </Grid>
                    <Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> mark sheet</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={marksheet1}
                            onChange={handleChange}
                            sx={{ width: '100%' }}
                            size='small'
                        >
                            <MenuItem value="Recieved">Recieved</MenuItem>
                            <MenuItem value="Not Recieved">Not Recieved</MenuItem>
                        </Select>
                    </Grid>
                    {marksheet1 === 'Recieved' &&<Grid item xs={4}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Upload Marksheet</InputLabel>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            startIcon={marksheet1img ? <CheckCircleIcon /> : <CloudUploadIcon />}
                        >
                            {marksheet1img ? 'Marksheet Uploaded' : 'Upload Marksheet'}
                            <VisuallyHiddenInput type="file" ref={fileInputRef} onChange={onFileSelect}/>
                        </Button>
                    </Grid>}
                </Grid>


                {formData.semesters[0].courses.map((course, index) => (
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
                            <InputLabel id={`credit-points-label-${index}`} style={{ fontWeight: '500', color: 'black' }}>
                                Credit Points
                            </InputLabel>
                            <TextField
                                style={{ width: '100%' }}
                                id={`credit-points-${index}`}
                                size="small"
                                variant="outlined"
                                type="number"
                                inputRef={creditInputRef}
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
                                inputRef={gradeInputRef}
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

export default CourseForm;