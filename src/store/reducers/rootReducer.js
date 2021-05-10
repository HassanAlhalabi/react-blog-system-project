import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { favoriteArticlesReducer } from './favoritesReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
    articles: articlesReducer,
    users: usersReducer,
    favorites: favoriteArticlesReducer,
});

export default rootReducer;