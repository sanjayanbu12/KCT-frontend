import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StudentForm from './StudentForm'; // Import the StudentForm component
import CourseForm from './CourseForm'; // Import the CourseForm component
import StaffForm from './StaffForm'; // Import the StaffForm component

const steps = [
  'Student Details',
  'Course Details',
  'Staff Details',
];

const Form = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Logic for submitting form data
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <div style={{ margin: '3vw 3vw 3vw 0' }}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ marginTop: '3vw' }}>
          {activeStep === 0 && <StudentForm />}
          {activeStep === 1 && <CourseForm />}
          {activeStep === 2 && <StaffForm />}
        </div>
      </Box>
      <div style={{ marginTop: '5vw', display: 'flex', justifyContent: 'space-between' }}>
        {activeStep !== 0 && (
          <Button variant="contained" color="primary" onClick={handleBack} sx={{ width: '25%' }}>
            Back
          </Button>
        )}
        {isLastStep ? (
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '25%' }}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext} sx={{ width: '25%' }}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Form;
