import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { favoriteArticlesReducer } from './favoritesReducer';
import { usersReducer } from './usersReducer';
import { galleryReducer } from './galleryReducer';
import commentsReducer from './commentsReducer';

const rootReducer = combineReducers({
    articles: articlesReducer,
    users: usersReducer,
    favorites: favoriteArticlesReducer,
    photos: galleryReducer,
    comments: commentsReducer
});

export default rootReducer;