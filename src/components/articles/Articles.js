import React from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PageHeader from '../layout/PageHeader';
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import Loading from '../layout/Loading';
import ArticleCard from './ArticleCard';

const Articles = ({ articles, articlesLoading, favorites }) => {

    const history = useHistory();

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1;

    const handlePagination = (event, value) => {
        history.push(`/articles/page/${value}`);
    };
    
    const pageSize = 12;

    const slicedArticles = articles.slice( (page * pageSize - pageSize ) , page * pageSize ).filter(
        article => article.inTrash === false && article.isPublished === true
    );
    
    return ( 
        <div className='articles pt-5 pb-5'>
            <div className='container'>
                <PageHeader title='Articles' />
                {
                    articlesLoading === true ?
                        <Loading />
                    :
                        slicedArticles.length === 0 ? 
                            <Alert severity='info'>There is no Articles</Alert>
                        :
                            <div className='row'>
                                {
                                    slicedArticles.map(article => {
                                        if(favorites.includes(article.id) === true) {
                                            return <ArticleCard key={article.id} isFavorite={true} articleCardProps={article}/>    
                                        } else {
                                            return <ArticleCard key={article.id} isFavorite={false} articleCardProps={article}/>
                                        }
                                        return <ArticleCard key={article.id} isFavorite={false} articleCardProps={article}/>
                                    })
                                }
                                {
                                    articles.length >= pageSize &&
                                    <div className='d-flex justify-content-center align-items-center pt-4'>
                                        <Pagination
                                            page={page}
                                            count={Math.ceil(articles.length / 12)}
                                            onChange={handlePagination}
                                            size='large'
                                        />
                                    </div>
                                }
                            </div>
                }
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return({
        articles: state.articles.articles,
        articlesLoading: state.articles.articlesLoading,
        favorites: state.favorites
    })
}

export default connect(mapStateToProps,null)(Articles);