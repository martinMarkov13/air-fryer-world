import * as request from "./requester"

const baseUrl = 'http://localhost:3030/data/recipes'

export const getAll = () => request.get(baseUrl)

export const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);

export const remove = (recipeId) => request.del(`${baseUrl}/${recipeId}`);

export const create = (gameData) => request.post(baseUrl, gameData);


