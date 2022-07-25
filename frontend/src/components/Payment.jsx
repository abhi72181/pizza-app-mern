import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./Payment.css"
const Payment = () => {
    const navigate=useNavigate()
    const [otp,setOtp]=useState("")
const handleOtpChange=(e)=>{
    setOtp(e.target.value)
}

const handleConfirmbtn=()=>{
    if(otp==""){
        alert("Please fill the otp box")
    }
    else if(otp=="1234"){
   navigate("/thanks")
    }
    else{
        alert("Invalid otp")
    }
}
  return (
    
   <div id="otpbox">
        
        <div style={{width:"50%",margin:"auto"}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaW4cAuI9YLmQHIRWywmtjvYqdDcfzAc5vew&usqp=CAU" />
        </div>
        <br />
        <div style={{width:"90%", margin:"auto",textAlign:"center"}}>
        <h2>Enter One Time Password(OTP)</h2>
        <p>Pizza App has sent you an otp on your registered mobile number +91-**********</p>
        </div>
        <br />
        <div style={{width:"100%", margin:"auto",marginLeft:"10%"}}>
        <input type="password" id="otpenter" onChange={handleOtpChange} placeholder="Enter OTP here" />
        </div>
        <br />
        {/* <input type="submit" id="confirm" value="CONFIRM"/> */}
        <div style={{width:"90%", margin:"auto",marginLeft:"10%"}}>
        <button id="confirm" onClick={handleConfirmbtn}>CONFIRM</button>
        </div>
        
        
        
    </div>
  )
}

export default Payment