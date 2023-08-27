import './App.css';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login"
import { useEffect } from 'react';
import { auth } from './Firebase'; 
import { useStateValue } from './Components/StateProvider/StateProvider';
import Payment from './Components/Payment/Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from "./Components/Orders/OrdersMy";

const promise = loadStripe('pk_test_51NjZQzSBvPEKr6NEyngjCnxgCO2q6ZOw9a1OWUqmkUjl0VW4p6tZ2ljDU4DLdPtEOTCA4M9W6Y6UsY1QaBZjFclx00D4THHD5q');

const routes = createBrowserRouter([
  {
    path:"/",
    children:[
      {path:"/",element:[<Header/>,<Home></Home>]},
      {path:"/checkout",element:[<Header></Header>,<Checkout></Checkout>]},
      {path:"/login", element:<Login></Login>},
      {path:"/orders", element:<Orders/>},
      {path:"/payment", element:[<Elements stripe={promise}><Payment/></Elements>]}
    ]
  }
])


function App() {
  const [{},dispatch] = useStateValue();
  useEffect(()=>{
    // Will  only run once
  auth.onAuthStateChanged(authUser=>{
    console.log("The user is>>>", authUser);

    if(authUser){
      // The user just logged in 
      dispatch({
        type:"SET_USER",
        user:authUser
      })
    }else{
      // the user is logged out
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
    })
  },[])
  return (
  <RouterProvider router={routes}></RouterProvider>
  )
}

export default App;
