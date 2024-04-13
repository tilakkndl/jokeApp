import React from 'react'

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';
import FacebookIcon from '@mui/icons-material/Facebook';
import IconButton from '@mui/material/IconButton';

import useRegisterController from './register.controller';


function Register() {
  // console.log(RegisterController.handleRegister())
  const {
    handleRegister, 
    onChangeName, 
    onChangeEmail, 
    onChangePassword, 
    onChangeConfirmPassword,
    nameError,
    resetNameError,
    emailError,
    resetEmailError,
    passwordError,
    resetPasswordError,
    confirmPasswordError,
    resetConfirmPasswordError
  } = useRegisterController();
  return (
    <>
         
    <Box sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center', alignItems: 'center', height: "100vh", backgroundColor: "#ACE2E1",   color: "black",
          '& .MuiInputBase-input': {
            color: 'black' } }}>

   

          <TextField id="standard-basic" label="Name" variant="standard" onChange={(e)=>onChangeName(e)} error={!!nameError} onInput={resetNameError} helperText={nameError} style={{ width: '325px' }}/>
          <TextField id="standard-basic" label="Email" variant="standard" onChange={(e)=>onChangeEmail(e)} error={!!emailError} onInput={resetEmailError} helperText={emailError} style={{ width: '325px'}}/>
          <TextField id="standard-basic" label="Password" variant="standard" onChange={(e)=>onChangePassword(e)} error={!!passwordError} onInput={resetPasswordError} helperText={passwordError} style={{ width: '325px'}}/>
          <TextField id="standard-basic" label="Confirm Password" variant="standard" onChange={(e)=>onChangeConfirmPassword(e)} error = {!!confirmPasswordError} onInput={resetConfirmPasswordError} helperText={confirmPasswordError} style={{ width: '325px'}}/>
          <Button variant="contained" onClick={handleRegister} sx = {{mt: 8, color: "008DDA", width: "200px"}}>
        Signup
      </Button>
    <Button disableRipple>
      <TextField
      
        id="standard-basic"
        // label="Signup with Google"
        defaultValue="Signup with Google"
        // variant="standard"
        InputProps={{
          startAdornment: (
            <IconButton size="small">
              <GoogleIcon />
            </IconButton>
          ),
          readOnly: true

        }}
       
       
        sx = {{ "& fieldset": { border: 'none' },mt: 4, mb: -4}}
      />
      </Button>

      <Button disableRipple>
      <TextField
       
        id="standard-basic"
        // label="Signup with Google"
        defaultValue="Signup with Google"
        // variant="standard"
        InputProps={{
          startAdornment: (
            <IconButton size="small">
              <FacebookIcon />
            </IconButton>
          ),
          readOnly: true

        }}
       
       
        sx = {{ "& fieldset": { border: 'none' },}}
      />
      </Button>
   
   

          </Box>
    </>
  )
}

export default Register