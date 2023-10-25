import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import { Provider } from 'react-redux';
import store from '../reduxcode/store';
import SecureRoute from "./SecureRoute";

function RoutesSection(){
    return (
        <>
        <Provider store={store} >
        <HeaderComponent /><Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/dashboard" element={
                <SecureRoute>
                    <DashboardPage />
                </SecureRoute>
                } />
            <Route path="/login" element={<LoginPage />} />
        </Routes><FooterComponent />
        </Provider>
        </>
    )
}

export default RoutesSection;