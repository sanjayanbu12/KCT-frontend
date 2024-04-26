import React, { useState,useEffect } from 'react';
import { Box, Stepper, Step, StepLabel, Button,CircularProgress } from '@mui/material';
import StudentForm from './StudentForm';
import CourseForm from './CourseForm';
import StaffForm from './StaffForm';
import axios from 'axios';
import CourseSemtwo from './CourseSemtwo';
import CourseSemthree from './CourseSemthree';

const steps = ['Student Details', 'Sem 1 Course Details', 'Sem 2 Course Details', 'Sem 3 Course Details', 'Staff Details'];

const Form = () => {
  const [avatarimg, setAvatarimg] = useState(null);
  const [marksheet1img, setMarksheet1img] = useState(null);
  const [marksheet2img, setMarksheet2img] = useState(null);
  const [marksheet3img, setMarksheet3img] = useState(null);

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
  const [loading, setLoading] = useState(false);

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  const handleSubmit = async () => {
    try { 
        const formDataToSend = new FormData();

        // Convert formData object to FormData
        Object.entries(formData).forEach(([key, value]) => {
            if (key === 'semesters') {
                // Ensure each semester has 'courses' array
                const formattedSemesters = value.map(semester => ({
                    ...semester,
                    courses: semester.courses || [] // Ensure 'courses' exists and is an array
                }));
                // Convert semesters array to JSON string
                formDataToSend.append(key, JSON.stringify(formattedSemesters));
            } else {
                // Append other form fields directly
                formDataToSend.append(key, value);
            }
        });

        // Append avatarimg to FormData if it exists
        if (avatarimg) {
            formDataToSend.append('profilePictureUrl', avatarimg);
        }
        if(marksheet1img){
            formDataToSend.append('sem1FileUrl', marksheet1img);
        }
        if(marksheet2img){
            formDataToSend.append('sem2FileUrl', marksheet2img);
        }
        if(marksheet3img){
            formDataToSend.append('sem3FileUrl', marksheet3img);
        }

        const response = await axios.post(`https://kct-backend.onrender.com/api/students`, formDataToSend, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setFormData({semesters: []});
        console.log(response);
        setFormSubmitted(true);
    } catch (error) {
        console.log(error);
    }
};

  


  // const handleSubmit = async () => {
  //   console.log('Form submitted:', formData);
  //   try { 
  
  //     const response = await axios.post(`https://kct-backend.onrender.com/api/students`, formData,{
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   });
  //   setFormData({semesters: []});
  //     console.log(response)
  //     setFormSubmitted(true);
  //   }
  //   catch (error) {
  //     console.log(error)
  //   }
  // };
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
        return <StudentForm avatarimg={avatarimg} setAvatarimg={setAvatarimg} formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} />;
      case 1:
        return <CourseForm marksheet1img={marksheet1img} setMarksheet1img={setMarksheet1img} formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} semester="sem1" />;
      case 2:
        return <CourseSemtwo marksheet2img={marksheet2img} setMarksheet2img={setMarksheet2img} formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} semester="sem2" />;
      case 3:
        return <CourseSemthree marksheet3img={marksheet3img} setMarksheet3img={setMarksheet3img} formData={formData} setFormData={setFormData} onValidityChange={handleStudentFormChange} semester="sem3" />;
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
               {loading ? <><CircularProgress size={20} sx={{ color: '#ffff' }} /></> : "Submit"}
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
