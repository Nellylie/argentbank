import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/HomePage";
import DashboardPage from "../pages/dashboard/DashboardPage";
import LoginPage from "../pages/login/LoginPage";
import NotFoundPage from "../components/notfoundpage/NotFoundPage";
import HeaderComponent from "../components/header/HeaderComponent";
import FooterComponent from "../components/footer/FooterComponent";
import SecureRoute from "./SecureRoute";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import Modal from "../components/modal/Modal";
import { clearError } from "../reduxcode/global/actionRedux";
import LoaderAnime from "../components/loader/LoaderAnime";

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
                <Route path="/*" element={<NotFoundPage />}/>
            </Routes>
            {renderModal()}
            {renderLoader()}
            <FooterComponent />
        </>
    );
}

export default RoutesSection;
