import * as actionsTypes from './actionsTypes';

export const addArticle = article => (
    {
        type: actionsTypes.ADD_ARTICLE,
        article,
    }
)

export const deleteArticle = id => (
    {
        type: actionsTypes.DELETE_ARTICLE,
        id,
    }
)

export const publishUpdate = id => ({
    type: actionsTypes.PUBLISH_UPDATE,
    id
})

export const updateArticle = article => (
    {
        type: actionsTypes.UPDATE_ARTICLE,
        article,
    }
)

export const addUser = user => (
    {
        type: actionsTypes.ADD_USER,
        user
    }
)

export const deleteUser = id => (
    {
        type: actionsTypes.DELETE_USER,
        id
    }
)

export const updateUser = user => (
    {
        type: actionsTypes.UPDATE_USER,
        user
    }
)

export const suspendUser = id => (
    {
        type: actionsTypes.SUSPEND_USER,
        id
    }
)