import React, { useEffect, useState } from "react";
import { Button, Container } from "@chakra-ui/react";
import "./Cart.css";
import { FaMinusCircle, FaPlusCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {Link} from "react-router-dom"
// import { deleteDataCart, getDataCart } from '../store/cart/Cart.action'
import { useNavigate } from "react-router-dom";
import { addPizzasToCart, deleteCart } from "../store/addData/AddToCartAction";
// import Checkout from "./Checkout";

const Cart = () => {
  // const navigate = useNavigate();
  const dispatch = useDispatch();

  let getdatad = useSelector((state) => state.addToCart);
  // const {getdata,getloading,geterror}=getdatad
  // console.log(getdatad, "getdatad");
  // const {getloading,geterror,getdata}=useSelector((state)=>state.getCartData.getCart)
  const plus = (e) => {
    dispatch(addPizzasToCart(e, e.varient, e.quantity + 1));
  };
  const minus = (e) => {
    dispatch(addPizzasToCart(e, e.varient, e.quantity - 1));
  };
  const handleDelete = (e) => {
    dispatch(deleteCart(e));
  };
  const subTotalPrice=getdatad.cartItems.reduce((x,item)=>x+item.price,0)
  return (
    <div className="maincartcontainer">
      <div className="cartcontainer">
        <div className="upcartcontainer">
          <div className="firstupcartcontainer">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>
              Product Details
            </p>
          </div>
          <div className="secondupcartcontainer">
            <p style={{ fontSize: "20px", fontWeight: "500" }}>Quantity</p>
            <p style={{ fontSize: "20px", fontWeight: "500" }}>Total Price</p>
          </div>
        </div>

        {getdatad.cartItems.map((e) => (
          <div key={e.name} className="downcartcontainer">
            <div className="firstdowncartcontainer">
              <img
                src={e.image}
                alt="img"
                style={{ width: "150px", marginRight: "10%" }}
              />
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: "700" }}>
                  {e.name}
                </h3>

                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "20px",
                    fontWeight: "400",
                    color: "green",
                  }}
                >
                  {e.varient} @ {e.prices[0][e.varient]}/piece
                </p>

                <Button
                  colorScheme="orange"
                  style={{ marginTop: "10px", width: "100px" }}
                  onClick={() => handleDelete(e)}
                >
                  Delete
                </Button>
              </div>
            </div>
            <div className="seconddowncartcontainer">
              <p
                style={{
                  marginTop: "50px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                <div style={{ display: "flex" }}>
                  <FaMinusCircle
                    style={{ cursor: "pointer", color: "red" }}
                    onClick={() => minus(e)}
                  />
                  <div
                    style={{
                      marginLeft: "5px",
                      marginRight: "5px",
                      marginTop: "-5px",
                    }}
                  >
                    {e.quantity}
                  </div>

                  <FaPlusCircle
                    style={{ cursor: "pointer", color: "green" }}
                    onClick={() => plus(e)}
                  />
                </div>
              </p>
              <p
                style={{
                  marginTop: "70px",
                  fontSize: "20px",
                  fontWeight: "500",
                }}
              >
                <div style={{ marginLeft: "20px", marginTop: "-25px" }}>
                  {e.quantity} * ₹{e.prices[0][e.varient]} = ₹{e.price}
                </div>
              </p>
            </div>
          </div>
        ))}
        </div>
        <div className='cartcheckoutBox'>
  <div style={{fontSize:"20px", fontWeight:"500", textAlign:"center",padding:"15px"}}>Checkout Details</div>
  <div className='insidecartcheckoutbox'>
   <div style={{color:"darkgreen",fontSize:"20px", fontWeight:"500"}}>Total-Items:<span style={{color:"maroon", fontSize:"20px", fontWeight:"500"}}>{getdatad.cartItems.length} </span></div>
   <div style={{color:"darkgreen", fontSize:"20px", fontWeight:"500"}}>Sub-Total:<span style={{color:"darkblue", fontSize:"20px", fontWeight:"500"}}>{subTotalPrice}/-</span></div>
   <div style={{color:"darkgreen", fontSize:"20px", fontWeight:"500"}}>SHIPPING:FREE</div>
   <br />
   <div style={{color:"darkgreen",fontSize:"20px", fontWeight:"500"}}>Cart-Total:<span style={{color:"maroon", fontSize:"20px", fontWeight:"500"}}>{subTotalPrice}/-</span></div>
   <br />
   {/* <Button style={{marginBottom:"50px"}} colorScheme="orange" >
    {getdatad.cartItems.length==0 ? }
    <Link to="/checkout">CHECKOUT NOW</Link>
    </Button> */}
    <Link to="/checkout">
    <Button disabled={getdatad.cartItems.length==0 ? true : false} style={{marginBottom:"50px"}} colorScheme="orange" >CHECKOUT NOW</Button> 
    {/* <Button style={{marginBottom:"50px"}} colorScheme="orange" >CHECKOUT NOW</Button>  */}
     </Link>
   {/* <Checkout subTotal={subTotalPrice} /> */}
   <br />
  </div>
      </div>
      <hr />
    </div>
  );
};

export default Cart;
