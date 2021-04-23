import * as actionTypes from './actionsTypes';

export const addArticle = article => (
    {
        type: actionTypes.ADD_ARTICLE,
        article,
    }
)

export const removeArticle = id => (
    {
        type: actionTypes.DELETE_ARTICLE,
        id,
    }
)


export const updateArticle = article => (
    {
        type: actionTypes.UPDATE_ARTICLE,
        article,
    }
)

export const addUser = user => (
    {
        type: actionTypes.ADD_USER,
        user
    }
)

export const deleteUser = id => (
    {
        type: actionTypes.DELETE_USER,
        id
    }
)

export const updateUser = user => (
    {
        type: actionTypes.UPDATE_USER,
        user
    }
)

export const suspendUser = id => (
    {
        type: actionTypes.SUSPEND_USER,
        id
    }
)