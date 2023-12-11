import {Routes, Route} from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SecureRoute from "./SecureRoute";
import { useSelector, useDispatch } from "react-redux";
import {useState, useEffect} from "react";
import Modal from "../components/Modal";
import { loginFail } from "../reduxcode/login/actionRedux";

function RoutesSection() {
    const errorMessage = useSelector((state) => state.authentification.error);
    const [displayModal, setDisplayModal] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        setDisplayModal(!!errorMessage);
    }, [errorMessage]);

    const handleCloseModal = () => {
        setDisplayModal(false);
        dispatch(loginFail(null));
    };

    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={
                    <SecureRoute>
                        <DashboardPage />
                    </SecureRoute>
                } />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            {displayModal && <Modal show={displayModal} message={errorMessage} close={handleCloseModal} />}
            <FooterComponent />
        </>
    );
}

export default RoutesSection;