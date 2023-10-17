import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";

function RoutesSection(){

    return (
        <Routes>
            <Route path ="/" element = {<HomePage/>}/>
            <Route path ="/dashboard" element = {<DashboardPage/>}/>
            <Route path ="/login" element = {<LoginPage/>}/>
        </Routes>
    )
}

export default RoutesSection;