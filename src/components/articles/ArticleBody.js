import React from 'react';
import Typography from '@material-ui/core/Typography';
import articleImg from '../imgs/article-image-placeholder.png';
import draftToHtml from 'draftjs-to-html';

const ArticleBody = ({articleProps}) => {
    const dateFormat = new Date(articleProps.date.seconds).toLocaleDateString();
    return ( 
        <div className='article-body p-2 p-md-4'>
            <div className='article-image text-center position-relative'>
                {articleProps.urlToImage === '' ?
                    <img src={articleImg} alt='article-img' className='img-fluid'/>
                    :
                    <img src={articleProps.urlToImage} className='article-image' alt='article-img'/>
                }
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
                    <span>{dateFormat}</span>
                </div>
            </div>
            <div className='article-content pt-4 pb-2'>
                <div dangerouslySetInnerHTML={{__html: draftToHtml(JSON.parse(articleProps.content.slice(1,-1)))}}></div>
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