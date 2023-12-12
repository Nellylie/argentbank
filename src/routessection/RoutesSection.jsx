import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import HeaderComponent from "../components/HeaderComponent";
import FooterComponent from "../components/FooterComponent";
import SecureRoute from "./SecureRoute";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Modal from "../components/Modal";
import { clearError } from "../reduxcode/global/actionRedux";
import LoaderAnime from "../components/LoaderAnime";

function RoutesSection() {
    const errorMessage = useSelector((state) => state.authentification.error);
    const [displayModal, setDisplayModal] = useState(false);
    const dispatch = useDispatch();
    const loader = useSelector((state)=> state.authentification.loader);
    useEffect(() => {
        if (errorMessage) {
            setDisplayModal(true);
        } else {
            setDisplayModal(false);
        }
    }, [errorMessage]);

    const handleCloseModal = () => {
        setDisplayModal(false);
        dispatch(clearError()); 
    };

    const renderModal = () => {
        if (!displayModal) return null;
        return <Modal show={displayModal} message={errorMessage} close={handleCloseModal} />;
    };

    const renderLoader = () => {
        if (!loader) return null;
        return <LoaderAnime/>
    }
    return (
        <>
            <HeaderComponent />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/dashboard" element={<SecureRoute><DashboardPage /></SecureRoute>} />
                <Route path="/login" element={<LoginPage />} />
            </Routes>
            {renderModal()}
            {renderLoader()}
            <FooterComponent />
        </>
    );
}

export default RoutesSection;
