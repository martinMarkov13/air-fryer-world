import * as request from "./requester";

const baseUrl = `${process.env.REACT_APP_API_URI}/data/recipes`;

export const getAll = () => request.get(baseUrl);

export const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);

export const getMyRecipes = async (ownerId) => {
  const query = encodeURIComponent(`_ownerId="${ownerId}"`);

  const result = await request.get(`${baseUrl}?where=${query}`);

  return result;
};

export const remove = (recipeId) => request.del(`${baseUrl}/${recipeId}`);

export const create = (data) => request.post(baseUrl, data);

export const edit = (recipeId, data) => request.put(`${baseUrl}/${recipeId}`, data);
