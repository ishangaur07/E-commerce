import './App.css';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login"
import { useEffect } from 'react';
import { auth } from './Firebase'; 
import { useStateValue } from './Components/StateProvider/StateProvider';

const routes = createBrowserRouter([
  {
    path:"/",
    children:[
      {path:"/",element:[<Header/>,<Home></Home>]},
      {path:"/checkout",element:[<Header></Header>,<Checkout></Checkout>]},
      {path:"/login", element:<Login></Login>}
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
