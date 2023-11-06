import * as request from "./requester";

const baseUrl = 'http://localhost:3030/users';

export const login = (data) => 
    request.post(`${baseUrl}/login`, data);


export const logout = async (accessToken) => {
    try {
        const response = request.get(`${baseUrl}/logout`, {
            headers: {
                'X-Authorization': accessToken
            }
        });

        return response;
    } catch (error) {
        console.log(error);
    }
};

export const register = (email, password) =>
    request.post(`${baseUrl}/register`, {email, password});
