
import { useState } from "react";
import fetchAPI from "../../components/fetchAPI";
import useSnackBar from "../../components/useSnackBar";

const isValid = (name, reg)=>{
    return reg.test(name);
}


 function useRegisterController(){

    // const { isLoading, error, fetchData} = useFetch();

    const {showSuccessSnackbar, showErrorSnackbar} = useSnackBar();

    const URL = "http://localhost:3001/api/users/signup";
    const METHOD = "POST"

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("")
    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setCPasswordError] = useState("")
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    const regName = /^[a-zA-Z\s]+$/
    const regEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    const regPassword = /^[a-zA-Z0-9@#$%^&*]{3,}$/

    // async function fetchData(url, method, payload){
    //     return await useFetch(url, method, payload)
    // }

   

    const onChangeName = (e)=>{
        setName(e.target.value);
    }

    const onChangeEmail = (e)=>{  
        setEmail(e.target.value)
    }

    const onChangePassword = (e)=>{
        setPassword(e.target.value)
    }

    const onChangeConfirmPassword = (e)=>{
        setConfirmPassword(e.target.value)
    }

    const handleRegister = async()=>{


  if(!isValid(name, regName)){
    return setNameError("Name should contain upper or lower case letter")
  }

  if(!isValid(email, regEmail)){
    return setEmailError("Email is not valid")
  }

  if(!isValid(password, regPassword)){
    return setCPasswordError("Include upper, lower letter, number and special character")
  }

  if(password!==confirmPassword){
    return setConfirmPasswordError("password and confirmPassword should be same")
  }

       
        const payload = {name, email, password, confirmPassword}
     const {data, error} = await fetchAPI(URL, METHOD, payload);
        console.log(data, error)

        
        if(!error){
             showSuccessSnackbar("You are registered successfully")
        }else{
            showErrorSnackbar("Couldn't register the user")
        }
        console.log(name, email, password, confirmPassword)
        
        
    }
   
    return{
        handleRegister,
        onChangeName,
        onChangeEmail,
        onChangePassword,
        onChangeConfirmPassword,
        nameError,
        emailError,
        confirmPasswordError,
        passwordError,
        resetNameError:()=>setNameError(null),
        resetEmailError:()=>setEmailError(null),
        resetPasswordError:()=>setCPasswordError(null),
        resetConfirmPasswordError:()=>setConfirmPasswordError(null)
    }
    
}

export default useRegisterController


