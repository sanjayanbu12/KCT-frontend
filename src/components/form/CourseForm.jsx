import React, { useState, useEffect, useRef } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

const CourseForm = (props) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const { formData, setFormData, onValidityChange } = props;

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


    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '1vw' }}>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Semester</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-disabled" disabled size="small" value="Semester 1" variant="outlined" />
                    </Grid>
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