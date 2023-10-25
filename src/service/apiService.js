import axios from 'axios';

const API_BASE = 'http://localhost:3001/api/v1/user';

export const userService = {
    login
};

async function login(email, password) {
    return await request('/login', 'POST', { email, password });
}

async function request(endpoint, method, data, token) {
    const headers = {
        'Content-Type': 'application/json',
    };

    if (token) {
        headers['Authorization'] = `Bearer ${token}`;
    }

    try {
        const response = await axios({
            method,
            url: `${API_BASE}${endpoint}`,
            headers,
            data,
        });

        return response.data;
    } catch (error) {
        if (error.response) {
            throw new Error(error.response.data.error);
        } else if (error.request) {
            throw new Error('No response received from the server.');
        } else {
            throw new Error(error.message);
        }
    }
}
