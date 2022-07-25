import React from "react";
import { useState } from "react";
import "./Pizza.css";
import { Button,  useDisclosure } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import {
  Tag,
 
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { addPizzasToCart } from "../store/addData/AddToCartAction";
const Pizza = ({ e }) => {
  const [varient, setVarient] = useState("small");
  const [quantity, setQuantity] = useState(1);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch=useDispatch()
  const handleAddCart=(e)=>{
    dispatch(addPizzasToCart(e,varient,quantity))
  }
  return (
    <div className="pizzaCard">
      <img
        style={{ borderRadius: "20px", cursor: "pointer" }}
        src={e.image}
        alt=""
        onClick={onOpen}
      />
      <h2
        style={{
          fontSize: "20px",
          fontWeight: "500",
          textAlign: "center",
          padding: "5px",
        }}
      >
        {e.name}
      </h2>
      <hr />
      <div className="SelectDiv">
        <div>
          <h3>Size:</h3>

          <select
            name=""
            id=""
            style={{ marginTop: "10px" }}
            onChange={(e) => setVarient(e.target.value)}
          >
            {e.varients.map((e) => (
              <option value={e}>{e}</option>
            ))}
          </select>
        </div>
        <div>
          <h3>Quantity:</h3>
          <select
            name=""
            id=""
            style={{ marginTop: "10px" }}
            onChange={(e) => setQuantity(e.target.value)}
          >
            {[...Array(10).keys()].map((v, i) => (
              <option value={i + 1}>{i + 1}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="SelectDiv">
        <h3>Price: ₹{e.prices[0][varient] * quantity}</h3>
        <Button colorScheme="orange" onClick={()=>handleAddCart(e)}>Add to cart</Button>
      </div>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{e.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img style={{ borderRadius: "20px" }} src={e.image} alt="" />
            <h2
              style={{
                fontSize: "20px",
                fontWeight: "500",
                textAlign: "center",
                padding: "5px",
              }}
            >
              {e.description}
            </h2>
            <Tag
              style={{
                fontSize: "30px",
                fontWeight: "500",
                alignItems: "center",
                padding: "5px",
                display: "flex",
                justifyContent: "space-evenly",
                marginTop: "10px",
              }}
            >
              {e.category}
            </Tag>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default Pizza;
