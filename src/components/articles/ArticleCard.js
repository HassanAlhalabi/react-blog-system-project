import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavoriteArticle } from '../../store/actions/actions';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
import { makeStyles } from '@material-ui/core/styles';
import articleImage from '../imgs/article-image-placeholder.png';
import { showFlashMessage } from '../layout/FlashMessage';

const useStyle = makeStyles({
    favoriteArticle: {
        color: '#ec75b2 !important',
        backgroundColor: '#ec75b233 !important'
    }
});

const ArticleCard = ({articleCardProps,toggleFavoriteArticle,isFavorite}) => {

    const handleToggleFavorite = id => {
        toggleFavoriteArticle(id);
        isFavorite === true ?
            showFlashMessage('Article Has Been Removed From Favorates') :
            showFlashMessage('Article Has Been Added To Favorates')
    };
    const classes = useStyle();

    return ( 
        <div className='col-12 col-sm-6 col-lg-4 mb-3'>
            <div className="landing-article-card pt-4">
                <div className="landing-article-card-image">
                    <div className="card-image-shadow"></div>
                    {articleCardProps.urlToImage === '' ?
                        <img src={articleImage} alt='article-img' className='img-fluid'/> :
                        <img src={articleCardProps.urlToImage} alt='article-img' className='img-fluid'/>}
                                </div>
                <div className="landing-card-content">
                    <div>
                        <Link to={`/articles/${articleCardProps.id}`}>
                            <h5 className='m-0'>{articleCardProps.title}</h5>
                        </Link>
                    </div>
                    <div className='d-flex justify-content-between article-meta'>
                        <span>
                            {articleCardProps.author}
                        </span>
                        <span>
                            {articleCardProps.date}
                        </span>
                    </div>
                    <div>
                        <CardActions>
                            {isFavorite === true ?
                                <IconButton 
                                    onClick={() => handleToggleFavorite(articleCardProps.id)}
                                    className={classes.favoriteArticle}
                                >
                                    <Favorite  />
                                </IconButton>
                            :  
                                <IconButton 
                                    onClick={() => handleToggleFavorite(articleCardProps.id)}
                                >
                                    <Favorite  />
                                </IconButton>
                            }
                            <IconButton>
                                <Share />
                            </IconButton>
                        </CardActions>   
                    </div>
                </div>
            </div>    
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
            toggleFavoriteArticle: id => {
                dispatch(toggleFavoriteArticle(id))
            }
        });
 
export default connect(null,mapDispatchToProps)(ArticleCard);