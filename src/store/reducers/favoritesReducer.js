import { TOGGLE_FAVORITE_ARTICLE } from '../actions/actionsTypes';

const favoriteArticles = ['1','2','3']

export const favoriteArticlesReducer = (state = favoriteArticles , action) => {
    switch(action.type) {
        case TOGGLE_FAVORITE_ARTICLE :
            // Toggle Favorite Article Reducer
            if(state.includes(action.id)) {
                return state.filter(id => id !== action.id);
            }
            return [
                ...state,
                action.id
            ];
        default:
            return state;
    }
} 