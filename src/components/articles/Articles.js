import React, { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PageHeader from '../layout/PageHeader';
import ArticleCard from './ArticleCard';
import Pagination from '@material-ui/lab/Pagination';

const Articles = ({articles, favorites}) => {

    // const [articles,setArticles] = useState([]);

    // fetch("http://localhost:8000/articles")
    //     .then(response => response.json())
    //     .then(data => {
    //         setArticles(data);
    // })

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
                <div className='row'>
                    {
                        slicedArticles.map(article => {
                            if(favorites.includes(article.id) === true) {
                                return <ArticleCard key={article.id} isFavorite={true} articleCardProps={article}/>    
                            } else {
                                return <ArticleCard key={article.id} isFavorite={false} articleCardProps={article}/>
                            }
                        })
                    }
                </div>
            </div>
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
     );
}

const mapStateToProps = state => {
    return({
        articles: state.articles,
        favorites: state.favorites
    })
}


export default connect(mapStateToProps)(Articles);