import './App.css';
import Home from './Components/Home/Home';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import RouteLayout from './Components/UI/RootLayout';
import Checkout from './Components/Checkout/Checkout';

const routes = createBrowserRouter([
  {
    path:"/",
    element:<RouteLayout></RouteLayout>,
    children:[
      {path:"/",element:<Home></Home>},
      {path:"/checkout",element:<Checkout></Checkout>}
    ]
  }
])


function App() {
  return (
  <RouterProvider router={routes}></RouterProvider>

  )
}

export default App;
