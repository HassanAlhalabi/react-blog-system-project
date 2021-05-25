import * as actionsTypes from './actionsTypes';

// Article Actions

export const articlesInit = () => {
    return (dispatch,getState) => {
        fetch("http://localhost:8000/articles")
            .then(response => response.json())
            .then(data => {
                console.log('data: ',data)
                dispatch({
                    type: actionsTypes.INITIALIZE_ARTICLE,
                    articles: data
                })
            })
    }   
}

export const addArticle = article => (
    {
        type: actionsTypes.ADD_ARTICLE,
        article,
    }
)

export const removeArticle = id => (
    {
        type: actionsTypes.REMOVE_ARTICLE,
        id,
    }
);

export const deleteArticle = id => (
    {
        type: actionsTypes.DELETE_ARTICLE,
        id,
    }
);

export const publishUpdate = id => ({
    type: actionsTypes.PUBLISH_UPDATE,
    id
});

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
);

export const removeUser = id => (
    {
        type: actionsTypes.REMOVE_USER,
        id
    }
);

export const deleteUser = id => (
    {
        type: actionsTypes.DELETE_USER,
        id
    }
);

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