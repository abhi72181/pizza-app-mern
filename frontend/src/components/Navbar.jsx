import React from "react";
// import { Input, useDisclosure } from "@chakra-ui/react";
// import { InputGroup } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
// import { InputRightElement } from "@chakra-ui/react";
// import { SearchIcon } from "@chakra-ui/icons";
import { MdShoppingCart } from "react-icons/md";
// import { GoTriangleDown } from "react-icons/go";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  
} from '@chakra-ui/react'
import {

  Button
  
} from "@chakra-ui/react";

import "./Navbar.css";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../store/userRegister/registerAction";
// import { logout } from "../store/auth/auth.action";
// import { useEffect } from "react";
const Navbar = () => {
  // const {isAuth}=useSelector((state)=>state.auth.authenticate)
  // const dispatch=useDispatch()
  // const navigate=useNavigate()
  const dispatch=useDispatch()

  const cartData=useSelector((state=> state.addToCart))
  // console.log(cartData,"cartData")
  
  

  
const userState=useSelector((state)=>state.userLoginReducer)
// console.log(userState,"userState")
  return (
    <div className="mainNav">
      <div className="topNav">
        <div className="leftTopNav">
          <Link to="/" className="imgleftTopNav">
            <img
              src="https://cdn.dribbble.com/users/404971/screenshots/1241486/pizza-logo.png"
              alt="logo"
              style={{width:"100px", borderRadius:"50px",padding:"10px"}}
            ></img>
          </Link>

          {/* <div className="inputDivTopNav">
            <InputGroup>
              <InputRightElement
                pointerEvents="none"
                children={<SearchIcon w={10} h={6} color="gray.300" />}
              />
              <Input type="text" placeholder="Search..." />
            </InputGroup>
          </div> */}
        </div>
        <div className="rightTopNav">
        
         {userState.currentuser.name ? <div className="belowrightTopNav"><Menu >
  {({ isOpen }) => (
    <>
      <MenuButton colorScheme="orange" isActive={isOpen} as={Button} >
        {userState.currentuser.name}
      </MenuButton>
      <MenuList>
        
        <MenuItem onClick={()=>dispatch(logoutUser())} >Logout</MenuItem>
      </MenuList>
    </>
  )}
</Menu></div>: <div className="belowrightTopNav">
         
         <div >
           <Link to="/login">LOGIN</Link> / <Link to="/signup">SIGNUP</Link>
         </div>

         <div className="welcome">WELCOME GUEST</div>
         </div>
       }
        

          <div className="carticon">
           <Link to="/cart"> 
           <div style={{display:"flex",fontSize:"20px",fontWeight:"500"}}>
           <MdShoppingCart size={40} />
           <div style={{color:"red"}}>
           {cartData.cartItems.length}
            </div> 
           </div>
           </Link>
          </div>
        </div>
      </div>
      <div className="bottomNav">
        {/* <div className="leftBottomNav">
          <Button onClick={onOpen}>Categories</Button>
          <GoTriangleDown className="triangle" size={20} />
          <Modal
            blockScrollOnMount={false}
            isOpen={isOpen}
            size="4xl"
            onClose={onClose}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Categories</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text fontWeight="bold" mb="1rem">
                  <div className="CategoriesMain">
                    {CategoriesData.map((e) => {
                      return (
                        <div key={e.heading}>
                          <div className="CategoriesHeading">{e.heading}</div>
                          <br />
                          {e.list.map((s) => {
                            return (
                              <div className="footerList" key={s.name}>
                                <Link to={s.path} onClick={onClose}>
                                  {s.name}
                                </Link>
                              </div>
                            );
                          })}
                        </div>
                      );
                    })}
                  </div>
                </Text>
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
        <div className="rightBottomNav">
          {data.map((e) => {
            return (
              <div key={e.name}>
                <Link to={e.path}>{e.name}</Link>
              </div>
            );
          })}
        </div> */}
      </div>
    </div>
  );
};

export default Navbar