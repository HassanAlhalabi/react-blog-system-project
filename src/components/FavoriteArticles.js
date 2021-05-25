import React from 'react';
import { connect } from 'react-redux';
import ArticleCard from './articles/ArticleCard';
import Alert from '@material-ui/lab/Alert';

const FavoriteArticles = ({articles,favorites}) => {
    const favoriteArticles = articles.filter(article => {
        return favorites.includes(article.id)
    });
    return ( 
        <div className='favorite-articles pt-5 pb-5'>
            <div className='container'>
                {favoriteArticles.length > 0 ?
                    <div className='row'>
                        {
                            favoriteArticles.map(article => 
                                <ArticleCard key={article.id} isFavorite={true} articleCardProps={article}/>    
                            )
                        }
                    </div>
                    :
                    <Alert severity='info'>You Have No Favorite Articles</Alert>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return({
        articles: state.articles,
        favorites: state.favorites
    })
}
 
export default connect(mapStateToProps)(FavoriteArticles);