import React from 'react'

const Article = ({articleProps}) => {
    return ( 
        <div className='col-4 mb-3' key={articleProps.id}>
            <div className='article-image'>
                <img src={articleProps.urlToImage} alt='article-img'/>
            </div>
            <div className='article-title'>
                <h3>{articleProps.title}</h3>
            </div>
            <div className='article-time'>
                <time>{articleProps.date}</time>
            </div>
            <div className='article-excerpet'>
                <p>{articleProps.content}</p>
            </div>
        </div>
     );
}
 
export default Article;