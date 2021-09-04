import * as actionsTypes from './actionsTypes';
import { collection, getDocs } from "firebase/firestore";
import {firebaseDB} from '../../config/fbConfig';
import store from '../store';

// Article Actions

export const articlesInit = articles => (
    {
        type: actionsTypes.INITIALIZE_ARTICLE,
        articles,
    }
)

export const getArticles = () => {
    return async function(dispatch) {
        // const querySnapshot = await getDocs(collection(firebaseDB, "users"));
        const articles = [];
        // querySnapshot.forEach((doc) => {
        //     console.log(`${doc.id} => ${doc.data()}`);
        //     articles.push(querySnapshot.data());
        // });
        console.log(articles);
        dispatch(articlesInit(articles));
    }
}

// store.dispatch(getArticles())

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
