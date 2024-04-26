import { Box, Grid, Modal, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Button, TextField } from '@mui/material';
import React, { useState } from 'react'
import Avatar from '@mui/material/Avatar';

const avatarStyle = {
    width: '150px',
    height: '150px',
};

const style = {
    position: 'absolute',
    top: '50%',
    left: '60%',
    transform: 'translate(-50%, -50%)',
    width: "70%",
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    height: "70vh",
    overflowX: 'hidden',
    overflowY: 'auto',
    borderRadius: 5,
    '&:focus': {
        outline: 'none',
    },
};

const DetailsModal = (props) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedStudent, setEditedStudent] = useState(null);

    const formatDate = (dob) => {
        if (!dob) return "Date of Birth";

        const date = new Date(dob);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const day = date.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }

    const { open, handleClose, student } = props;
    console.log(student, "student")

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedStudent({ ...student });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditedStudent(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleUpdateClick = () => {
        console.log('Updated student data:', editedStudent);
        fetch(`http://localhost:5000/api/updatestudent/${student._id}`, {
            method: 'PUT',
            body: JSON.stringify(editedStudent),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                setIsEditing(false);
                window.location.reload();
            } else {
                throw new Error('Update failed');
            }
        }).catch(error => {
            console.error('Error updating student:', error);
        });
    };

    return (
        <div >
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Box sx={style}>
                    <Grid container justifyContent="flex-end" spacing={2}>
                        <Grid>
                            {isEditing ? (
                                <Button style={{ width: '50px' }} variant="outlined" onClick={handleUpdateClick}>Update</Button>
                            ) : (
                                <Button style={{ width: '50px' }} variant="outlined" onClick={handleEditClick}>Edit</Button>
                            )}
                        </Grid>
                    </Grid>
                    <Grid container justifyContent="space-between" style={{ marginBottom: '20px', marginTop: '20px' }} spacing={2}>
                        <Grid style={{ marginLeft: '30px' }}>
                            <Avatar style={avatarStyle} src={student ? student.profilePictureUrl : ""} alt="Avatar" />
                            
                            <Grid item style={{ display: 'flex', flexDirection: 'row',marginTop: '10px' }}>
                            {/* <Typography variant='h6' style={{ fontWeight: 'bold' }}>Name:&nbsp;</Typography> */}
                            {isEditing ? <TextField size="small" name="name" value={editedStudent ? editedStudent.name : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6' style={{ fontWeight: 'bold',fontSize: '24px' }}>{student ? student.name : "Name"}</Typography>}
                        </Grid>
                        </Grid>
                        <Grid item style={{ display: 'flex', flexDirection: 'column' }}>
                            <Button
                                style={{ width: '120px', marginBottom: '10px' }}
                                variant="contained"
                                onClick={() => student && student.sem1FileUrl && window.open(student.sem1FileUrl, '_blank')}
                            >
                                Sem 1
                            </Button>
                            <Button
                                style={{ width: '120px', marginBottom: '10px' }}
                                variant="contained"
                                onClick={() => student && student.sem2FileUrl && window.open(student.sem2FileUrl, '_blank')}
                            >
                                Sem 2
                            </Button>
                            <Button
                                style={{ width: '120px' }}
                                variant="contained"
                                onClick={() => student && student.sem3FileUrl && window.open(student.sem3FileUrl, '_blank')}
                            >
                                Sem 3
                            </Button>
                        </Grid>
                    </Grid>
                    <Box style={{ padding: '5px 30px', height: '50px', fontWeight: 'bold', fontSize: '16px', color: 'black', display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px', backgroundColor: 'rgba(178, 207, 217)', borderRadius: '5px', borderBottom: '1px solid black' }}>
                        <div> CGPA &nbsp;-&nbsp;{student ? student.cgpa : "cgpa"}</div>
                        <div>{student ? student.studentClass : "studentClass"}</div>
                    </Box>
                    <Grid container spacing={2}>

                        
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Roll No:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="rollno" value={editedStudent ? editedStudent.rollno : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.rollno : "Rollno"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Father`s Name:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="fathersname" value={editedStudent ? editedStudent.fathersname : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.fathersname : "Father`s Name"}</Typography>}
                        </Grid>

                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Gender:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="gender" value={editedStudent ? editedStudent.gender : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.gender : "Gender"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Email:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="email" value={editedStudent ? editedStudent.email : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.email : "Email"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Department:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="department" value={editedStudent ? editedStudent.department : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.department : "Department"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Phone No:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="phoneNo" value={editedStudent ? editedStudent.phoneNo : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.phoneNo : "Phone No"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Age:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="age" value={editedStudent ? editedStudent.age : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.age : "Age"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>DOB:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="dob" value={editedStudent ? editedStudent.dob : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? formatDate(student.dob) : "Date of Birth"}</Typography>}
                        </Grid>
                    </Grid>
                    {student && student.semesters.map((semester) => (
                        <div key={semester.semester}>
                            <Typography variant='h6' style={{ fontWeight: 'bold', marginTop: '20px' }}>Semester {semester.semester}</Typography>
                            <TableContainer component={Paper} style={{ marginTop: '10px' }}>
                                <Table>
                                    <TableHead>
                                        <TableRow style={{ backgroundColor: '#D3D3D3' }}>
                                            <TableCell style={{ fontWeight: 'bold' }}>Course Code</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }}>Course Title</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }}>Credits</TableCell>
                                            <TableCell style={{ fontWeight: 'bold' }}>Grade</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {semester.courses.map((course) => (
                                            <TableRow key={course._id}>
                                                <TableCell>{course.code}</TableCell>
                                                <TableCell>{course.title}</TableCell>
                                                <TableCell>{course.credit}</TableCell>
                                                <TableCell>{course.grade}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                        </div>
                    ))}

                    <Grid container spacing={2} style={{ marginTop: '20px' }}>

                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Staff Name:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="StaffName" value={editedStudent ? editedStudent.StaffName : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.StaffName : "StaffName  "}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Staff Gender:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="StaffGender" value={editedStudent ? editedStudent.StaffGender : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.StaffGender : "StaffGender"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Staff Email:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="StaffEmail" value={editedStudent ? editedStudent.StaffEmail : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.StaffEmail : "StaffEmail"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Staff Designation:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="StaffDesignation" value={editedStudent ? editedStudent.StaffDesignation : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.StaffDesignation : "StaffDesignation"}</Typography>}
                        </Grid>
                        <Grid item xs={4} style={{ display: 'flex', flexDirection: 'row' }}>
                            <Typography variant='h6' style={{ fontWeight: 'bold' }}>Staff No:&nbsp;</Typography>
                            {isEditing ? <TextField size="small" name="StaffPhoneNo" value={editedStudent ? editedStudent.StaffPhoneNo : ""} onChange={handleInputChange} /> :
                                <Typography variant='h6'>{student ? student.StaffPhoneNo : "StaffPhoneNo"}</Typography>}
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </div>
    )
}

export default DetailsModal