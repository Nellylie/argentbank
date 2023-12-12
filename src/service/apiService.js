import axios from 'axios';

export const errorMessages = {
    response400: 'Invalid Fields',
    response500: 'Internal Server Error'
};

const API_BASE = 'http://localhost:3001/api/v1/user';

export const userService = {
    login,
    profil,
    updateProfil,
};

async function login(email, password) {
    return await request('/login', 'POST', { email, password });
}

async function profil(token) {
    return await request('/profile', 'POST', null, token);
}

async function updateProfil(token, firstName, lastName) {
    return await request('/profile', 'PUT', { firstName, lastName }, token);
}

async function request(endpoint, method, data = null, token) {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const config = {
            method,
            url: `${API_BASE}${endpoint}`,
            headers,
        };
        
        if (data) {
            config.data = data; 
        }
        
        const response = await axios(config);
        
        return response.data;
    } catch (error) {
        console.log(error);
        if (error.response?.status === 400) {
            throw new Error(errorMessages.response400);
        } else {
            throw new Error(errorMessages.response500);
        }
    } 
}
