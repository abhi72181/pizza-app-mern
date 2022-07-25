import "./App.css";
import Navbar from "./components/Navbar";
import {Route,Routes} from "react-router-dom"
import Home from "./components/Home";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import Checkout from "./components/Checkout";
import Payment from "./components/Payment";
import Thanks from "./components/Thanks";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";

function App() {
  const isAuth=useSelector((state)=>state.userLoginReducer.currentuser)
  // console.log(isAuth,"isauthcheck")
  return (
    <>
     <Navbar />

     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<PrivateRoute isAuth={isAuth}><Cart /></PrivateRoute>} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/thanks" element={<Thanks />} />
     </Routes>
     <br /><br />
     <Footer />
     <br /><br />
    </>
  );
}

export default App;
