import * as actionsTypes from '../actions/actionsTypes'
import store from '../store';
import {getArticles} from '../actions/actions'; 

let articles = [
    {
        "id": "1",
        "title": "How To learn a new Skills to Keep Up With the century",
        "urlToImage": "",
        "author": "Hassan Alhalabi",
        "content": {
            "blocks": [
              {
                "key": "8i090",
                "text": "Hello CodePulse!",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "42ncd",
                "text": "This text should be underlined.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "UNDERLINE"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "327r6",
                "text": "And this text should be italic.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "ITALIC"
                  }
                ],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          },
        "date": "2/12/2020",
        "categories": ["uncategorized","sport"],
        "tags": ["learning","skills"],
        "isPublished": true,
        inTrash: false,
    },
    {
        "id": "2",
        "title": "Travel the world with james brandon in a caravan !!",
        "urlToImage": "",
        "author": "James Brandon",
        "content": {
            "blocks": [
              {
                "key": "8i090",
                "text": "Hello CodePulse!",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "42ncd",
                "text": "This text should be underlined.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "UNDERLINE"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "327r6",
                "text": "And this text should be italic.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "ITALIC"
                  }
                ],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          },
        "date": "2/12/2020",
        "categories": ["travel","sport"],
        "tags": ["james brandon","culture travel"],
        "isPublished": true,
        inTrash: false,
    },
    {
        "id": "3",
        "title": "One Night in a Local Irish Motel",
        "urlToImage": "",
        "author": "James Brandon",
        "content": {
            "blocks": [
              {
                "key": "8i090",
                "text": "Hello CodePulse!",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "42ncd",
                "text": "This text should be underlined.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "UNDERLINE"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "327r6",
                "text": "And this text should be italic.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "ITALIC"
                  }
                ],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          },
        "date": "2/12/2020",
        "categories": ["travel","sport"],
        "tags": ["james brandon","culture travel"],
        "isPublished": true,
        inTrash: false,
    },
    
    {
        "id": "4",
        "title": "Travel the world with james brandon in a caravan !!",
        "urlToImage": "",
        "author": "Kame Namek",
        "content": {
            "blocks": [
              {
                "key": "8i090",
                "text": "Hello CodePulse!",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "42ncd",
                "text": "This text should be underlined.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "UNDERLINE"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "327r6",
                "text": "And this text should be italic.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "ITALIC"
                  }
                ],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          },
        "date": "2/12/2020",
        "categories": ["travel","sport"],
        "tags": ["james brandon","culture travel"],
        "isPublished": false,
        inTrash: false,
    },
    {
        "id": "5",
        "title": "Travel the world with james brandon in a caravan !!",
        "urlToImage": "",
        "author": "Kame Namek",
        "content": {
            "blocks": [
              {
                "key": "8i090",
                "text": "Hello CodePulse!",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 16,
                    "style": "BOLD"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "42ncd",
                "text": "This text should be underlined.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "UNDERLINE"
                  }
                ],
                "entityRanges": [],
                "data": {}
              },
              {
                "key": "327r6",
                "text": "And this text should be italic.",
                "type": "unstyled",
                "depth": 0,
                "inlineStyleRanges": [
                  {
                    "offset": 0,
                    "length": 31,
                    "style": "ITALIC"
                  }
                ],
                "entityRanges": [],
                "data": {}
              }
            ],
            "entityMap": {}
          },
        "date": "2/12/2020",
        "categories": ["travel","sport"],
        "tags": ["james brandon","culture travel"],
        "isPublished": false,
        inTrash: true,
    }
];

// store.dispatch(getArticles())

export const articlesReducer = (state = articles, action) => {

    switch (action.type) {
        case actionsTypes.INITIALIZE_ARTICLE:
          console.log('in reducer')  
          return [
            ...state,
            action.articles
          ]
        // Add New Article
        case actionsTypes.ADD_ARTICLE:
            return [
                ...state,
               action.article
            ] 

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