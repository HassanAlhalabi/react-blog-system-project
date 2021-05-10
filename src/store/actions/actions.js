import * as actionsTypes from './actionsTypes';

// Article Actions

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
);

// Favorite Articles Actions

export const toggleFavoriteArticle = id => (
    {
        type: actionsTypes.TOGGLE_FAVORITE_ARTICLE,
        id
    }
);

// Users Actions

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