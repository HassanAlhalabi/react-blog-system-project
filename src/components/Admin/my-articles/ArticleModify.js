import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import store from '../../../store/store';

const ArticleModify = () => {
    const params = useParams();
    const [article , setArticle] = useState(
        store.getState().articles.filter(article => article.id == params.id)
    )
    console.log(article)
    return ( 
        <div className='modify-article'>
            <h2>{article[0].title}</h2>
            <h2>{article[0].author}</h2>
            <h2>{article[0].content}</h2>
            <h2>{article[0].tags}</h2>
        </div> 
    );
}
 
export default ArticleModify;