import React from 'react';
import Thumbnail from './imgs/thumbnail.JPG';
import { Link } from 'react-router-dom';

const LatestArticleCard = ({id, articleImg , title}) => {
    return ( 
        <div className='latest-article-card mt-2 mb-2 w-100'>
            <Link to={`/articles/${id}`}>  
                <div className='d-flex align-items-center'>
                    <div className='latest-card-image'>
                        <img src={Thumbnail} alt='latest articles card image'/>
                        {/* <img src={articleImg} alt='latest articles card image'/> */}
                    </div>
                    <div className='latest-card-title'>
                        <h6>{title}</h6>
                    </div>
                </div>
            </Link>     
        </div>
     );
}
 
export default LatestArticleCard;