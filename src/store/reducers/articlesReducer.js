import * as actionTypes from '../actions/actionsTypes' 

const articles = [
    {
        id: 1,
        title: 'title 1',
        author: 'hassan',
        content: 'lorem ipsum dolor sit amet',
        categories: ['uncategorized'],
        tags: ['tag1','tag2']
    }
]

export const articlesReducer = (state = articles, action) => {

    switch (action.type) {
        case actionTypes.ADD_ARTICLE:
            console.log('New Article Added');
            return [
                ...state,
               action.article
            ] 
        case actionTypes.REMOVE_ARTICLE:
            console.log('Article Removed')
            return state.filter(article => article.id !== action.id)
        case actionTypes.UPDATE_ARTICLE:
            console.log('Article Updated')
            return state.map(article => article.id !== action.id)
        default:
            return state
        }

}