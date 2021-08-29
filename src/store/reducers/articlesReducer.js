import * as actionsTypes from '../actions/actionsTypes' 

let articles = [
    {
        "id": "1",
        "title": "How To learn a new Skills to Keep Up With the century",
        "urlToImage": "",
        "author": "Hassan Alhalabi",
        "content": '',
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
        "content": "You may have owned an iPhone for years and regard yourself as an experienced user. At the same time, you keep removing unwanted characters one at a time while typing by pressing delete. However, one day you find out that a quick shake allows you to delete the whole message in one tap.",
        "date": "2/12/2020",
        "categories": ["travel","sport"],
        "tags": ["james brandon","culture travel"],
        "isPublished": true,
        inTrash: false,
    },
    {
        "id": "3",
        "title": "Travel the world with james brandon in a caravan !!",
        "urlToImage": "",
        "author": "James Brandon",
        "content": "You may have owned an iPhone for years and regard yourself as an experienced user. At the same time, you keep removing unwanted characters one at a time while typing by pressing delete. However, one day you find out that a quick shake allows you to delete the whole message in one tap.",
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
        "content": "You may have owned an iPhone for years and regard yourself as an experienced user. At the same time, you keep removing unwanted characters one at a time while typing by pressing delete. However, one day you find out that a quick shake allows you to delete the whole message in one tap.",
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
        "content": "You may have owned an iPhone for years and regard yourself as an experienced user. At the same time, you keep removing unwanted characters one at a time while typing by pressing delete. However, one day you find out that a quick shake allows you to delete the whole message in one tap.",
        "date": "2/12/2020",
        "categories": ["travel","sport"],
        "tags": ["james brandon","culture travel"],
        "isPublished": false,
        inTrash: true,
    }
];

export const articlesReducer = (state = articles, action) => {

    switch (action.type) {
        case actionsTypes.INITIALIZE_ARTICLE:
            return [
                ...state,
               action.articles
            ]
        // Add New Article
        case actionsTypes.ADD_ARTICLE:
            console.log('New Article Added');
            return [
                ...state,
               action.article
            ] 

        case actionsTypes.REMOVE_ARTICLE:
            console.log('Article Removed')
            return state.map(article => {
                if(article.id === action.id){
                    console.log('Article Removed')
                    article.inTrash = true;
                }
                return article;
            });
        // Delete Article Permenantly    
        case actionsTypes.DELETE_ARTICLE:
            console.log('Article Deleted')
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
            console.log('Article Updated')
            return state.map(article => {
                if(`${article.id}` === `${action.article.id}`){
                    return action.article
                } 
                return article
            });
        // Empty Trash    
        case actionsTypes.EMPTY_TRASH:
            console.log('Trash Deleted');
            return state.filter(article => article.inTrash === false);
        default:
            return state
        }

}