import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PageHeader from './layout/PageHeader';
import ArticleCard from './articles/ArticleCard';
import Alert from '@material-ui/lab/Alert';

const SearchResults = ({articles,favorites}) => {

    const searchParam = useParams('search-term').search_term;
    const searchTerm = new RegExp(searchParam.split(' ').join('|'),'ig');
    let searchResults = articles.filter(article => {
       return article.title.search(searchTerm) !== -1 && 
       article.isPublished === true && article.inTrash === false
    });

    return ( 
        <div className='search-results pt-5 pb-5'>
            <div className='container'>
            <PageHeader title={`Search Results For "${searchParam}"`} />
                {searchResults.length > 0 ?
                    <div className='row'>
                        {
                            searchResults.map(article => {
                                if(favorites.includes(article.id) === true) {
                                    return <ArticleCard key={article.id} isFavorite={true} articleCardProps={article}/>    
                                } else {
                                    return <ArticleCard key={article.id} isFavorite={false} articleCardProps={article}/>
                                }
                            })
                        }
                    </div>
                    :
                    <Alert severity='info'>
                        No Results Matched Your Search Term
                    </Alert>  
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
 
export default connect(mapStateToProps)(SearchResults);