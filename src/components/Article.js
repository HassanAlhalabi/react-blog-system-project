import React from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'

const Article = ({articleProps}) => {
    return ( 
        <div className='col-4 mb-3' >
            <Card>
                <div className='article-image'>
                    <img src={articleProps.urlToImage} alt='article-img'/>
                </div>
                <div className='article-title'>
                    <Typography variant='h4'>{articleProps.title}</Typography>
                </div>
                <div className='article-time'>
                    <time>{articleProps.date}</time>
                </div>
                <div className='article-excerpet'>
                    <p>{articleProps.content}</p>
                </div>
            </Card>
        </div>
     );
}
 
export default Article;