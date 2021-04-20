import React, { useState } from 'react';
import store from '../../store/store'
import Article from '../Article'

const MyArticles = () => {
    const articles = useState(store.getState())[0]
    console.log(articles)
    return (
        <div className='my-articles'>
            <div className='container'>
                <div className='row'>
                    {
                        articles.map(article => 
                            <Article key={article.id} articleProps={article} />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default MyArticles;