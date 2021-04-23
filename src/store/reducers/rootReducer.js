import { combineReducers } from 'redux';
import { articlesReducer } from './articlesReducer';
import { usersReducer } from './usersReducer';

const rootReducer = combineReducers({
    articles: articlesReducer,
    users: usersReducer
});

export default rootReducer;