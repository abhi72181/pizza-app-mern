import React, { useEffect } from "react";
import { Grid } from "@chakra-ui/react";
import Pizza from "./Pizza";
// import PizzaArr from "../pizza-data";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../store/getData/pizzaAction";
import Loader from "./Loader";
import Failure from "./Failure";
// import { store } from "../store/store";
import Filter from "./Filter";

const Home = () => {
  const dispatch = useDispatch();
  const datas = useSelector((state) => state.getAllPizzas.getPizza);
  // console.log(datas,"datas")
  const {loading,error,data}=datas
  useEffect(() => {
    dispatch(getAllPizzas());
  }, [dispatch]);
  // console.log(datas)
  // console.log(store.getState(),"store")
  if (loading ) {
    
    
  } else if (error ) {
    <Failure error={error} />
  }
  return (
   
    <div>
      
      {loading ? <Loader /> : error ? <Failure error={error} /> :<div ><Filter  /> <Grid
        templateColumns="repeat(3, 1fr)"
        gap={6}
        style={{ width: "90%", margin: "auto",marginTop:"70px"}}
      >
        
        {data.map((e) => (
          <Pizza key={e.name} e={e} />
        ))}
      </Grid></div>}
    
     
    </div>
  );
};

export default Home;
