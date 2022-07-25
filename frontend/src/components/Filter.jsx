import React, { useState } from "react";
import {
  FormControl,
 
  Input,Button
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";
import { filterPizzaAction } from "../store/getData/pizzaAction";
import { useDispatch } from "react-redux";
const Filter = () => {
    const dispatch=useDispatch()
    const [search,setSearch]=useState("")
    const [category,setCategory]=useState("all")
  return (
    <div style={{display:"flex",width:"80%",margin:"auto",marginTop:"30px"}}>
      <FormControl>
        
        <Input  placeholder="search pizza" value={search} onChange={(e)=>setSearch(e.target.value)} />
      </FormControl>
      <br />
      <Select  value={category} onChange={(e)=>setCategory(e.target.value)}>
        <option value="all" >All</option>
        <option value="veg pizza" >Veg Pizza</option>
        <option value="nonveg pizza">Nonveg Pizza</option>
      </Select>
      <br />
      <Button colorScheme="orange" style={{width:"200px"}} onClick={()=>dispatch(filterPizzaAction(search,category))}>Search</Button>
    </div>
  );
};

export default Filter;
