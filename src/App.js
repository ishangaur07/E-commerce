import './App.css';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import Login from "./Components/Login/Login"

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
  return (
  <RouterProvider router={routes}></RouterProvider>

  )
}

export default App;
