import * as request from "./requester";

const baseUrl = `${process.env.REACT_APP_API_URI}/users`;

export const login = (data) => request.post(`${baseUrl}/login`, data);

export const register = (data) => request.post(`${baseUrl}/register`, data);

export const logout = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      headers: {
        "X-Authorization": token,
      },
    });
    return response;

  } catch (error) {
    console.log(error)
  }
};