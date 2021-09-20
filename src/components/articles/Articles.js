import React, { useState, useEffect } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PageHeader from '../layout/PageHeader';
import ArticleCard from './ArticleCard';
import Pagination from '@material-ui/lab/Pagination';
import { articlesInit } from '../../store/actions/actions';
import Alert from '@material-ui/lab/Alert';
import Loading from '../layout/Loading';
import { getArticles } from '../../config/fbConfig';

const Articles = ({articles, favorites, articlesInit}) => {

    const history = useHistory();
    const [loading,setLoading] = useState(true);

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1;

    const handlePagination = (event, value) => {
        history.push(`/articles/page/${value}`);
    };
    
    const pageSize = 12;

    const slicedArticles = articles.slice( (page * pageSize - pageSize ) , page * pageSize ).filter(
        article => article.inTrash === false && article.isPublished === true
    );

    useEffect(() => {

        const fetchArticles = async () => {
            const response = await getArticles();
            const articles = await response;
            articlesInit(articles)
            setLoading(false);
        }
        fetchArticles();

    },[])
    
    return ( 
        <div className='articles pt-5 pb-5'>
            <div className='container'>
                <PageHeader title='Articles' />
                {
                    loading === true ?
                        <Loading />
                    :
                        slicedArticles.length === 0 ? 
                            <Alert severity='info'>There is no Articles</Alert>
                        :
                            <div className='row'>
                                {
                                    slicedArticles.map(article => {
                                        // if(favorites.includes(article.id) === true) {
                                        //     return <ArticleCard key={article.id} isFavorite={true} articleCardProps={article}/>    
                                        // } else {
                                        //     return <ArticleCard key={article.id} isFavorite={false} articleCardProps={article}/>
                                        // }
                                        // return <ArticleCard key={article.id} isFavorite={false} articleCardProps={article}/>
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
        articles: state.articles,
        favorites: state.favorites
    })
}

const mapDispatchToProps = dispatch => {
    return({
        articlesInit: articles => dispatch(articlesInit(articles))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Articles);