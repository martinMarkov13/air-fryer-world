import * as request from "../services/requester";

const baseUrl = `${process.env.REACT_APP_API_URI}/data/comments`;

export const getAllComments = async (recipeId) => {
    const searchQuery = encodeURIComponent(`recipeId="${recipeId}"`)
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`)
    const comments = Object.values(result)

    return comments;
}

export const createComment = async (recipeId, comment) => {
    const result = await request.post(baseUrl, {recipeId, comment})
    return result;
}
