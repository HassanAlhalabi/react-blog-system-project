import * as actionTypes from './actionsTypes';

export const addArticle = article => (
    {
        type: actionTypes.ADD_ARTICLE,
        article,
    }
)

export const removeArticle = id => (
    {
        type: actionTypes.REMOVE_ARTICLE,
        id,
    }
)


export const updateArticle = article => (
    {
        type: actionTypes.UPDATE_ARTICLE,
        article,
    }
)