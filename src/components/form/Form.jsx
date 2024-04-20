import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StudentForm from './StudentForm';
import CourseForm from './CourseForm';
import CourseSemtwo from './CourseSemtwo';
import CourseSemthree from './CourseSemthree';
import StaffForm from './StaffForm';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  activeStepIcon: {
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-active': {
      color: '#2c3e50',
    },
    '& .css-1u4zpwo-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
      color: '#2c3e50',
    },
  },
});

const steps = [
  'Student Details',
  'Sem 1 Course Details',
  'Sem 2 Course Details',
  'Sem 3 Course Details',
  'Staff Details',
];

const Form = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  const isLastStep = activeStep === steps.length - 1;

  return (
    <div style={{ margin: '3vw 3vw 3vw 0' }}>
      <Box sx={{ width: '100%' }}>
        <Stepper activeStep={activeStep} alternativeLabel className={classes.activeStepIcon}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div style={{ marginTop: '3vw' }}>
          {activeStep === 0 && <StudentForm />}
          {activeStep === 1 && <CourseForm />}
          {activeStep === 2 && <CourseSemtwo />}
          {activeStep === 3 && <CourseSemthree />}
          {activeStep === 4 && <StaffForm />}
        </div>
      </Box>
      <div style={{ marginTop: '5vw', display: 'flex', justifyContent: 'space-between' }}>
        {activeStep !== 0 && (
          <Button variant="contained" color="primary" onClick={handleBack} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
            Back
          </Button>
        )}
        {isLastStep ? (
          <Button variant="contained" color="primary" onClick={handleSubmit} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
            Submit
          </Button>
        ) : (
          <Button variant="contained" color="primary" onClick={handleNext} sx={{ width: '10%', backgroundColor: '#2c3e50', '&:hover': { backgroundColor: '#2c3e50' } }}>
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default Form;
