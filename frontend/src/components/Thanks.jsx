
import "./Thanks.css";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

function Thanks() {
  const clickho = useNavigate();
  const handlechangeclick = () => {
    clickho("/");
  };
  return (
    <>
      <div className="forupperspace"></div>
      <div className="thankscont">
        
        <div className="insidethankscont">
          <img style={{width:"70%" , margin:"auto"}}
            src="https://rukminim1.flixcart.com/image/416/416/k69ncsw0/card/r/9/n/60-6010522454483-greeting-for-u-enterprises-original-imafzrgza4bbbhux.jpeg?q=70"
            alt="image"
          />


            <div style={{width:"100%"}}>
          <Button
            style={{ marginTop: "40px", width:"20%", marginLeft:"40%",marginBottom:"50px"}}
            onClick={handlechangeclick}
            colorScheme="orange"
          >
            Continue Shopping
          </Button>

          </div>
          </div>
      </div>
    </>
  );
}

export default Thanks;
