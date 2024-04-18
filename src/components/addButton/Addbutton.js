import React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

const Addbutton = () => {
    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
          backgroundColor: purple[700],
        },
      }));
  return (
    <div>
         <Stack sx={{width:"300px"}} spacing={4} direction="row">
      <ColorButton sx={{backgroundColor:'#18283b'}} variant="contained">Add Profile</ColorButton>
    </Stack>

    </div>
  )
}

export default Addbutton