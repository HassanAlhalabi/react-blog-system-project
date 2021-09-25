import * as actionsTypes from '../actions/actionsTypes'

const initialState = {
  articles: [],
  singleArticle: {},
  articlesLoading: true,
  articleLoading: true,
  articleUploading: false,
  articleRemoving: false,
  articleDeleting: false,
}

export const articlesReducer = (state = initialState, action) => {

    switch (action.type) {
        // Initilize Articles 
        case actionsTypes.INITIALIZE_ARTICLES:
          return action.articles.length === 0 ?
            {...state} :
            {
             ...state, 
              articles: action.articles,
              articlesLoading: false
            } 
        
        // Get a Single Article
        case actionsTypes.GET_ARTICLE:
          return action.article === null ?
            {...state,
            articleLoading: false} :
            {
             ...state, 
              article: action.article,
              articleLoading: false
            }           
        // Add New Article
        case 'uploading':
          return {
              ...state,
             articleUploading: true
           }
        case actionsTypes.ADD_ARTICLE:
          return {
            ...state, 
             articles: [...state.articles,action.article],
             articleUploading: false
           }
        case actionsTypes.REMOVE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(article => {
                    if(article.id === action.id){
                        article.inTrash = true;
                        article.isPublished = false;
                    }
                    return article;
                }),
                articleRemoving: false,
            }
        // Delete Article Permenantly    
        case actionsTypes.DELETE_ARTICLE:
            return {
                ...state,
                articles: state.articles.filter(article => article.id !== action.id),
                articleDeleting: false
            }
            // Publish or UnPublish an Article    
        case actionsTypes.PUBLISH_UPDATE:
            return {
                ...state,
                articles: state.articles.map(article => {
                    if(`${article.id}` === `${action.id}`){
                        article.isPublished = !article.isPublished
                    } 
                    return article
                }) 
            }
        // Update an Article    
        case actionsTypes.UPDATE_ARTICLE:
            return {
                ...state,
                articles: state.articles.map(article => {
                    if(`${article.id}` === `${action.article.id}`){
                        return action.article
                    } 
                    return article
                }) 
            }
        // Empty Trash    
        case actionsTypes.EMPTY_TRASH:
            return state.filter(article => article.inTrash === false);
        default:
            return state
        }

}