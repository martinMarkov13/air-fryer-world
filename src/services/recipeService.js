import * as request from "./requester"

const baseUrl = 'http://localhost:3030/data/recipes'

export const getAll = () => request.get(baseUrl)

export const getOne = (recipeId) => request.get(`${baseUrl}/${recipeId}`);

