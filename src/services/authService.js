import * as request from "./requester";

const baseUrl = "http://localhost:3030/users";

export const login = (data) => request.post(`${baseUrl}/login`, data);

export const logout = async (token) => {
  try {
    const response = await fetch(`${baseUrl}/logout`, {
      headers: {
        "X-Authorization": token,
      },
    });
    return response;

  } catch (error) {
    alert.log(error);
  }
};

export const register = (data) => request.post(`${baseUrl}/register`, data);
