import * as actionsTypes from './actionsTypes';
import { 
        getArticles, 
        uploadArticle, 
        fireArticleDelete, 
        fireArticleRemove,
        fireGetArticle,
        fireArticleUpdate } from '../../config/fbConfig';

// Article Actions

export const articlesInit = () => {
    return async function(dispatch) {
        const response = await getArticles();
        const articles = await response;
        dispatch({
            type: actionsTypes.INITIALIZE_ARTICLES,
            articles
        })
    }
}

export const getArticle = id => {
    return async function(dispatch) {
        const response = fireGetArticle(id);
        const article = await response;
        dispatch({
            type: actionsTypes.GET_ARTICLE,
            article
        })
    }
}

export const addArticle = article => {
    return async function (dispatch){
        dispatch({
            type: 'uploading',
        })
        const response = await uploadArticle(article);
        dispatch({
            type: actionsTypes.ADD_ARTICLE,
            article,
        })
    }
}

export const removeArticle = id => {
    return async dispatch => {
        const response = await fireArticleRemove(id)
        dispatch({
            type: actionsTypes.REMOVE_ARTICLE,
            id,
        })
    }
};

export const deleteArticle = id => {
    return async dispatch => {
        const response = await fireArticleDelete(id);
        dispatch({
            type: actionsTypes.DELETE_ARTICLE,
            id,
        })
    }
};

export const publishUpdate = (id,isPublished) => {
    return async dispatch => {
        const response = await fireArticleUpdate(id,{'isPublished': !isPublished});
        dispatch({
            type: actionsTypes.PUBLISH_UPDATE,
            id
        })
    }
};

export const updateArticle = article => {
    return async dispatch => {
        const response = await fireArticleUpdate(article.id,article);
        dispatch({
            type: actionsTypes.UPDATE_ARTICLE,
            article,
        })
    }
};

// Favorite Articles Actions

export const toggleFavoriteArticle = id => {
    return async dispatch => {
        // const response = await fireArticleUpdate(id);
        dispatch({
            type: actionsTypes.TOGGLE_FAVORITE_ARTICLE,
            id
        })
    }
};

// Gallery Photos Actions

export const addPhoto = url => (
    {
        type: actionsTypes.ADD_PHOTO,
        url
    }
)

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
);

export const suspendUser = id => (
    {
        type: actionsTypes.SUSPEND_USER,
        id
    }
);

// Trash Actions

export const emptyTrash = () => ({
    type: actionsTypes.EMPTY_TRASH
});
