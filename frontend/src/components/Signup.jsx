import React, { useState } from "react";
import "./Signup.css";
import { Input, Stack } from "@chakra-ui/react";
import { Button, ButtonGroup } from "@chakra-ui/react";
// import axios from "axios";

// import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAction } from "../store/userRegister/registerAction";
import Loader from "./Loader";
import Failure from "./Failure";
import Success from "./Success";
// import { FaCashRegister } from "react-icons/fa";

const Signup = () => {
  // const navigate = useNavigate();
 const dispatch=useDispatch()
 const registerState=useSelector((state)=>state.userRegisterReducer)
 const {loading,error,success}=registerState
  const [register, setRegister] = useState({
    name:"",
    email: "",
    password: "",
    confirmpassword: "",
  });

  const handleChangeSignup=(e)=>{
  //  console.log(e.target.name,e.target.value)
  setRegister({...register,[e.target.name]:e.target.value})
  }

  const handleSignup=()=>{
     if(register.password!==register.confirmpassword){
      alert("both password and confirm password should be same")
     }
     else{
      // console.log(register)
      dispatch(userRegisterAction(register))
     }
  }
  return (
    <div className="mainSignup">
     
      <div className="containerSignup">
      {loading && <Loader />}
      {error && <Failure error={error.message} />}
      {success && <Success success="User Successfully Registered" />}
      <br />
      <h1 style={{fontSize:"30px",fontWeight:"500"}}>Registration:-</h1>
      <br />
      <label>Name:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="text"
            placeholder="Enter Name"
            name="name"
            onChange={handleChangeSignup}
          />
        </Stack>
        <br />
        <label>Email Address:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="email"
            placeholder="Enter Email"
            name="email"
            onChange={handleChangeSignup}
          />
        </Stack>
        <br />
        <label>Password:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="password"
            placeholder="Enter Password"
            name="password"
            onChange={handleChangeSignup}
          />
        </Stack>

        <br />
        <label>Confirm Password:</label>
        <Stack spacing={3}>
          <Input
            variant="outline"
            type="password"
            placeholder="Confirm Password"
            name="confirmpassword"
            onChange={handleChangeSignup}
          />
        </Stack>

        <br />

        <Button colorScheme="orange" onClick={handleSignup} width="100%">
          Register
        </Button>
        {/* <button onClick={handleSignup}>Register</button> */}
      </div>
    </div>
  );
};

export default Signup;
