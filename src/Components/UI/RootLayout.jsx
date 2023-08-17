import { Outlet } from "react-router-dom";
import Header from "../Header/Header";

const RouteLayout = ()=>{
    return (
        <>
         <Header></Header>
        <Outlet></Outlet>
        </>
       
    )
}

export default RouteLayout;