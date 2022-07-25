import React from "react";
import "./Checkout.css";
import { Link, useNavigate } from "react-router-dom";
import {
  FormControl,
  FormLabel,

  FormHelperText,
  Input,
  Select,
  Button,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { useState } from "react";
const Checkout = () => {
    const [inputData,setInputData]=useState({
      email:"",
      phone:"",
      name:"",
      address1:"",
      address2:"",
      state:"",
      city:"",
      country:"",
      pincode:""
    })
    const navigate=useNavigate()
    const [promodata,setPromodata]=useState("")
    const [count,setCount]=useState(0)
    
    const [check,setCheck]=useState("")
    let getdatad = useSelector((state) => state.addToCart);
    const subTotalPrice=getdatad.cartItems.reduce((x,item)=>x+item.price,0)
    const [checkoutprice,setCheckoutprice]=useState(subTotalPrice)
  // const {getloading,geterror,getdata}=useSelector((state)=>state.getCartData.getCart)
  // const {addloading,adderror,adddata}=useSelector((state)=>state.addCartData.addCart)
  // const {deleteerror,deletedata,deleteloading}=useSelector((state)=>state.deleteCartData.deleteCart)

 const promoInputchange=(e)=>{
   setPromodata(e.target.value)
 }

 const handleInputChangecheckout=(e)=>{
  setInputData({...inputData,[e.target.id]:e.target.value})
 }

// //  console.log(inputData,"inputdata")
 const handleptop=()=>{
   if(inputData.email!="" && inputData.phone!="" && inputData.name!="" && inputData.address1!="" && inputData.address2!="" && inputData.city!="" && inputData.country!="" && inputData.pincode!=""){
     navigate("/payment")
   }
   else{
    alert("Input Box Cannot Be Empty")
   }
 }
 


 const handlePromobtn=()=>{
  // console.log("clicked");
  // console.log(promodata,checkoutprice,count,"promo1");
  if(promodata=="pizza30"){
    // console.log(promodata,checkoutprice,count,"promo2");
    setCheckoutprice(Math.floor(checkoutprice - (0.3*checkoutprice)))
    setCheck(promodata)
      // console.log(promodata,checkoutprice,count,"promo3");
      if(count<1){
          setCount(count + 1)
      }
      setPromodata("")
  }


}

// // useEffect(()=>{
// //   if(promodata=="meanbuy30"){
// //     // console.log(promodata,checkoutprice,count,"promo2");
// //     setCheckoutprice(checkoutprice - ((3*checkoutprice)/100))
// //     setCheck(promodata)
// //       // console.log(promodata,checkoutprice,count,"promo3");
// //       // if(count<1){
// //       //     setCount(count + 1)
// //       // }
// //       // setPromodata("")
// //   }
// // console.log("chwckoutprice",checkoutprice)
// // },[addloading,deleteloading,getdatad])

//   useEffect(()=>{
//     let totalPrice=0
   
//     getdata.map((e)=>{
//       totalPrice+=e.price
      
       
//     })
//     console.log(totalPrice,"tprice")
//      setCheckoutprice(totalPrice)
 
//   },[addloading,deleteloading,getdatad])

  

  return (
    <div className="mainCheckoutContainer">
      <div className="leftCheckoutContainer">
        <div className="insideleftCheckoutContainer">
          <FormControl>
            <FormLabel htmlFor="email">Email address</FormLabel>
            <Input onChange={handleInputChangecheckout} id="email" type="email" value={inputData.email} />
            <FormHelperText>We'll never share your email.</FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="email">Phone Number</FormLabel>
            <Input onChange={handleInputChangecheckout} id="phone" type="number" value={inputData.phone} />
          </FormControl>
          <br />
         
          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            Delivery Address :
          </div>
         
          <br />
          <FormControl>
            <FormLabel htmlFor="email">Name</FormLabel>
            <Input onChange={handleInputChangecheckout} id="name" type="text" placeholder="Name" value={inputData.name} />
          </FormControl>
       
          <br />
          <div className="flexInput">
            <div className="flexInputleft">
              <FormControl>
                <FormLabel htmlFor="email">Address 1</FormLabel>
                <Input onChange={handleInputChangecheckout} id="address1" type="text" placeholder="Address 1" value={inputData.address1} />
              </FormControl>
            </div>
            <div className="flexInputright">
              <FormControl>
                <FormLabel htmlFor="email">Address 2</FormLabel>
                <Input onChange={handleInputChangecheckout} id="address2" type="text" placeholder="Address 2" value={inputData.address2} />
              </FormControl>
            </div>
          </div>
        
          <br />
          <div className="flexInput">
            <div className="flexInputleft">
              <FormControl>
                <FormLabel htmlFor="state">State</FormLabel>
                <Select id="state"  placeholder="Select state">
                  <option value="maharashtra">Maharashtra</option>
                  <option value="up">Uttar Pradesh</option>
                  <option value="mp">Madhya Pradesh</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="bihar">Bihar</option>
                  <option value="tamil">Tamil Nadu</option>
                </Select>
                
              </FormControl>
            </div>
            
            <div className="flexInputright">
              <FormControl>
                <FormLabel htmlFor="city">City</FormLabel>
                <Input onChange={handleInputChangecheckout} id="city" type="text" placeholder="City" value={inputData.city} />
              </FormControl>
            </div>
            
          </div>
          <br />
          <div className="flexInput">
            <div className="flexInputleft">
              <FormControl>
                <FormLabel htmlFor="country">Country</FormLabel>
                <Input onChange={handleInputChangecheckout} id="country" type="text" placeholder="India" value={inputData.country} />
              </FormControl>
            </div>
           
            <div className="flexInputright">
              <FormControl>
                <FormLabel htmlFor="email">Pincode</FormLabel>
                <Input onChange={handleInputChangecheckout} id="pincode" type="number" placeholder="Pincode" value={inputData.pincode} />
              </FormControl>
            </div>
          </div>
         
          <br />
          <br />
          
          <Button
            colorScheme="orange" onClick={handleptop}
            style={{ width: "100%", margin: "auto", marginBottom: "100px" }}
          >
            Proceed to payment
          </Button>
       
          </div>
        {/* <div style={{ width: "100%" }}></div> */}
        </div> 
        
        <div className="rightCheckoutContainer">
            {getdatad.cartItems.map((e)=>(
                <div className="firstCheckoutContainer">
        <div className="firstCheckoutContainerleft">
            <div style={{fontSize:"20px", padding:"5px", color:"darkgreen" , fontWeight:"600"}}>{e.name}</div>
            <div style={{fontSize:"20px", padding:"5px", color:"orange",fontWeight:"600"}}>Price: <span style={{color:"black"}}> ₹ {e.price}/-</span></div>
        </div>
        <div className="firstCheckoutContainerright">
          <img src={e.image} alt="" />
        {/* <div style={{textAlign:"center",fontSize:"20px", marginTop:"20px",fontWeight:"600" }}>₹ {e.price}</div> */}
        </div>
       </div>
            ))}
       
       <div style={{width:"90%",margin:"auto",marginTop:"2px"}}>
      <Link to="/cart" style={{color:"orange",width:"90%", margin:"auto",padding:"10px",fontSize:"20px", fontWeight:"600"}} >Edit Cart</Link>
      </div>
      <br />
      <div style={{width:"90%",margin:"auto",marginTop:"2px"}}>
      <div style={{fontSize:"20px", padding:"5px", color:"black",fontWeight:"600"}}>SubTotal:₹ <span style={{color:"green"}}>{checkoutprice}/-</span> </div>
      </div>
      <div style={{color:"orange",width:"90%", margin:"auto",padding:"10px",fontSize:"20px", fontWeight:"600"}}>Shipping:Free</div>
      <br />
      <div style={{color:"darkgreen",width:"90%", margin:"auto",padding:"10px",fontSize:"20px", fontWeight:"600"}}>Total: <span style={{color:"black"}}>₹ {checkoutprice}/-</span></div>

      <div style={{width:"90%" , marginLeft:"5%"}}>
      <Input style={{width:"50%"}} value={promodata} className='inputFooter' htmlSize={18} width='auto' placeholder='Promotional Code'  onChange={promoInputchange} />
    <Button disabled={count==1 ? true:false}  style={{width:"50%"}} colorScheme='orange' onClick={handlePromobtn}>Promotional Code</Button>
      </div>
       </div>
      
       
    </div>
  );
};

export default Checkout;
