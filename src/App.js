import './App.css';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';

const routes = createBrowserRouter([
  {
    path:"/",
    children:[
      {path:"/",element:[<Header/>,<Home></Home>]},
      {path:"/checkout",element:[<Header></Header>,<Checkout></Checkout>]},
      {path:"/login", element:<h1>Hello login</h1>}
    ]
  }
])


function App() {
  return (
  <RouterProvider router={routes}></RouterProvider>

  )
}

export default App;
