import React from 'react';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

const Article = ({articleCardProps}) => {
    return ( 
        <div className='col-4 mb-3'>
            <Link to={`/articles/${articleCardProps.id}`}>
                <Card>
                    <div className='article-image'>
                        <img src={articleCardProps.urlToImage} alt='article-img'/>
                    </div>
                    <div className='article-title'>
                        <Typography variant='h4'>{articleCardProps.title}</Typography>
                    </div>
                    <div className='article-time'>
                        <time>{articleCardProps.date}</time>
                    </div>
                </Card>
            </Link>    
        </div>
     );
}
 
export default Article;