import React from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Login() {
  return (
   <>
       <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: "100vh", backgroundColor: "#ACE2E1",   color: "black",
          '& .MuiInputBase-input': {
            color: 'black' } }}>
                 <TextField id="standard-basic" label="Email" variant="standard" />
                 <TextField id="standard-basic" label="Password" variant="standard" />
                 <Button variant="contained" sx = {{mt: 8, color: "008DDA", width: "200px"}}>
        Login
      </Button>
            </Box>
   
   </>
  )
}

export default Login