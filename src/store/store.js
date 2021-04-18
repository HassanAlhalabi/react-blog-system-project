import { createStore } from 'redux';
import { articlesReducer } from './reducers/articlesReducer';

const store = createStore(articlesReducer);

export default store;