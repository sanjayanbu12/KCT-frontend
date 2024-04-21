import React, { useState } from 'react';
import { Box, Stepper, Step, StepLabel, Button } from '@mui/material';
import StudentForm from './StudentForm';
import CourseForm from './CourseForm';
import StaffForm from './StaffForm';
import axios from 'axios';
const steps = ['Student Details', 'Sem 1 Course Details', 'Sem 2 Course Details', 'Sem 3 Course Details', 'Staff Details'];

const Form = () => {
  const [formData, setFormData] = useState({
    studentDetails: {},
    courseDetails: {
      sem1: [],
      sem2: [],
      sem3: []
    },
    staffDetails: {}
  });
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = async () => {
    // Perform form submission with formData
    console.log('Form submitted:', formData);
    // Reset formData if needed
    // setFormData({ studentDetails: {}, courseDetails: { sem1: [], sem2: [], sem3: [] }, staffDetails: {} });
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <StudentForm formData={formData} setFormData={setFormData} />;
      case 1:
        return <CourseForm formData={formData} setFormData={setFormData} semester="sem1" />;
      case 2:
        return <CourseForm formData={formData} setFormData={setFormData} semester="sem2" />;
      case 3:
        return <CourseForm formData={formData} setFormData={setFormData} semester="sem3" />;
      case 4:
        return <StaffForm formData={formData} setFormData={setFormData} />;
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
          <Button disabled={activeStep === 0} onClick={handleBack} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
            Back
          </Button>
          {activeStep === steps.length - 1 ? (
            <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
              Submit
            </Button>
          ) : (
            <Button variant="contained" color="primary" onClick={handleNext} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
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
