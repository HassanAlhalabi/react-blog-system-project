import React from 'react';
import Typography from '@material-ui/core/Typography';
import articleImg from '../imgs/article-image-placeholder.png';

const ArticleBody = ({articleProps}) => {
    return ( 
        <div className='article-body p-2 p-md-4'>
            <div className='article-image text-center position-relative'>
                {/* <img src={articleProps.urlToImage} className='img-fluid' alt='article-img'/> */}
                <img src={articleImg} alt='article-img' className='img-fluid'/>
                <div className='article-categories position-absolute'>
                    {
                        articleProps.categories.map(category => {
                            if(category.toLowerCase() === 'uncategorized'){
                                return null
                            } 
                            return <span>{category}</span>
                        })
                    }
                </div>
            </div> 
            <div className='article-title'>
                <Typography variant='h4' component='h1' className='pl-0 pr-0'>
                    {articleProps.title}
                </Typography>
            </div>
            <div className='article-meta p-2 d-flex justify-content-between'>
                <div className='article-author'>
                    <span>Written By: {articleProps.author}</span>
                </div>
                <div className='article-date'>
                    <span>{articleProps.date}</span>
                </div>
            </div>
            <div className='article-content pt-4 pb-2'>
                <pre>{articleProps.content}</pre>
            </div>
            <div className='article-tags'>
                <div className='pt-2 pb-4'>
                {
                    articleProps.tags.map(tag =>
                        <span className='article-tag mr-2 font-weight-bold'>{tag}</span>
                    )
                }
                </div>
            </div>
        </div>
     );
}
 
export default ArticleBody;