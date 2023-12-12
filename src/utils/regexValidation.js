

export const validateEmail = (email) => {
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    return emailRegex.test(email);
};

export const validatePassword = (password) => {
    const passwordRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
    return passwordRegex.test(password);
};

export const validateUpdateInfos = (infos) => {
    const inputRegex = /^[a-zA-Z]{3,30}$/;
    return inputRegex.test(infos);
}