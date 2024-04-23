import React, { useState,useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import StudentForm from './StudentForm';
import CourseForm from './CourseForm';
import StaffForm from './StaffForm';
import axios from 'axios';
import CourseSemtwo from './CourseSemtwo';
import CourseSemthree from './CourseSemthree';

const steps = ['Student Details', 'Sem 1 Course Details', 'Sem 2 Course Details', 'Sem 3 Course Details', 'Staff Details'];

const Form = () => {
  const [formData, setFormData] = useState({
    semesters: [
      {
        semester: 1,
        courses: [

        ]
      },
      {
        semester: 2,
        courses: [

        ]
      },
      {
        semester: 3,
        courses: [

        ]
      }
    ]
  });
  const [activeStep, setActiveStep] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isStudentFormValid, setIsStudentFormValid] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    console.log('Form submitted:', formData);
    try {
      const response = await axios.post(`http://localhost:5000/api/students`, formData,{
        headers: {
            'Content-Type': 'application/json'
        }
    });
    setFormData({semesters: []});
      console.log(response)
      setFormSubmitted(true);
    }
    catch (error) {
      console.log(error)
    }
  };
  useEffect(() => {
    if (formSubmitted) {
      // Redirect to /table after form submission
      window.location.replace('/table');
    }
  }, [formSubmitted]);
  const handleStudentFormChange = (isValid) => {
    setIsStudentFormValid(isValid);
};

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StudentForm formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} />;
      case 1:
        return <CourseForm formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} semester="sem1" />;
      case 2:
        return <CourseSemtwo formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} semester="sem2" />;
      case 3:
        return <CourseSemthree formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} semester="sem3" />;
      case 4:
        return <StaffForm formData={formData} setFormData={setFormData}  onValidityChange={handleStudentFormChange}/>;
      default:
        return null;
    }
  };

  return (
    <div style={{ margin: '3vw 3vw 3vw 0' }}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel >
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <Box>
          {getStepContent(activeStep)}
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
            <Button disabled={activeStep === 0} onClick={handleBack} sx={{ color: "#ffff", width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
              Back
            </Button>
            {activeStep === steps.length - 1 ? (
              <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }} disabled={!isStudentFormValid}>
                Submit
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={handleNext} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }} disabled={!isStudentFormValid}>
                Next
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Form;
