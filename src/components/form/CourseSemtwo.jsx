import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Grid, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';

const CourseSemtwo = (props) => {
    const [isFormValid, setIsFormValid] = useState(false);
    const { formData, setFormData, onValidityChange } = props;

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

    return (
        <div style={{ margin: '2vw 2vw 2vw 0' }}>
            <Box>
                <Grid container spacing={2} style={{ marginBottom: '1vw' }}>
                    <Grid item xs={3}>
                        <InputLabel id="demo-simple-select-label" style={{ fontWeight: '500', color: 'black' }}> Semester</InputLabel>
                        <TextField style={{ width: '100%' }} id="outlined-disabled" disabled size="small" value="Semester 2" variant="outlined" />
                    </Grid>
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
                                onChange={(e) => handleCourseChange(index, 'credit', e.target.value)} />
                        </Grid>
                        <Grid item xs={3}>
                            <InputLabel id={`grade-points-label-${index}`} style={{ fontWeight: '500', color: 'black' }}>Grade Points</InputLabel>
                            <TextField style={{ width: '100%' }} id={`grade-points-${index}`} size="small" variant="outlined"
                                onChange={(e) => handleCourseChange(index, 'grade', e.target.value)} />
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