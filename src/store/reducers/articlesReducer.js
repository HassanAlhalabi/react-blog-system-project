import * as actionsTypes from '../actions/actionsTypes'
import { doc, setDoc } from "firebase/firestore"; 
import { firebaseDB } from '../../config/fbConfig';

const initialState = {
  articles: [],
  articlesLoading: true,
  articleUploading: true
}

export const articlesReducer = (state = initialState, action) => {

    switch (action.type) {
      // Initilize Articles 
        case actionsTypes.INITIALIZE_ARTICLE:
          return action.articles.length === 0 ?
            {...state} :
            {
             ...state, 
              articles: action.articles,
              articlesLoading: false
            }           
        // Add New Article
        case actionsTypes.ADD_ARTICLE:
          async function addDoc(){
            await setDoc(doc(firebaseDB, "articles",action.article.id), action.article);
          }
          addDoc();
          return {
            ...state, 
             articles: [...state.articles,action.article],
             articleUploading: false
           }
        case actionsTypes.REMOVE_ARTICLE:
            return state.map(article => {
                if(article.id === action.id){
                    article.inTrash = true;
                }
                return article;
            });
        // Delete Article Permenantly    
        case actionsTypes.DELETE_ARTICLE:
            return state.filter(article => article.id !== action.id)
        // Publish or UnPublish an Article    
        case actionsTypes.PUBLISH_UPDATE:
            return state.map(article => {
                if(`${article.id}` === `${action.id}`){
                    console.log('article publish updated')
                    article.isPublished = !article.isPublished
                } 
                return article
            });
        // Update an Article    
        case actionsTypes.UPDATE_ARTICLE:
            return state.map(article => {
                if(`${article.id}` === `${action.article.id}`){
                    return action.article
                } 
                return article
            });
        // Empty Trash    
        case actionsTypes.EMPTY_TRASH:
            return state.filter(article => article.inTrash === false);
        default:
            return state
        }

}