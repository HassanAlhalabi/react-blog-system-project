import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toggleFavoriteArticle } from '../store/actions/actions';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import Favorite from '@material-ui/icons/Favorite';
import Share from '@material-ui/icons/Share';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import articleImage from './imgs/article-image-placeholder.png';

const useStyle = makeStyles({
    favoriteArticle: {
        color: '#ec75b2 !important',
        backgroundColor: '#ec75b233 !important'
    }
});

const Article = ({articleCardProps,toggleFavoriteArticle,isFavorite}) => {

    const handleToggleFavorite = id => toggleFavoriteArticle(id);
    const classes = useStyle();

    return ( 
        <div className='col-12 col-sm-6 col-lg-4 mb-3'>
            <Card className='article-card'>
                <Link to={`/articles/${articleCardProps.id}`}>
                    <CardMedia>
                        <div className='article-image'>
                            {
                                articleCardProps.urlToImage === '' ?
                                <img src={articleImage} alt='article-img' className='img-fluid'/> :
                                <img src={articleCardProps.urlToImage} alt='article-img' className='img-fluid'/>
                            }
                        </div>
                    </CardMedia> 
                    <CardHeader title={articleCardProps.title} 
                                subheader={articleCardProps.date}
                    /> 
                </Link>    
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
            </Card>   
        </div>
     );
}

const mapDispatchToProps = dispatch => ({
            toggleFavoriteArticle: id => {
                dispatch(toggleFavoriteArticle(id))
            }
        });
 
export default connect(null,mapDispatchToProps)(Article);