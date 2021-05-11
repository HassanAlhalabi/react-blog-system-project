import React, { useState } from 'react';
import { useParams,useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import PageHeader from './layout/PageHeader';
import ArticleCard from './ArticleCard';
import Pagination from '@material-ui/lab/Pagination';

const Articles = ({articles,favorites}) => {

    const history = useHistory();

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1;
    
    const [selectedPage , setSelectedPage] = useState(page);

    const handlePagination = (event, value) => {
        console.log('value: ',value)
        setSelectedPage(value);
        history.push(`/articles/page/${value}`);
    };

    console.log('page: ',page)
    console.log('selectedPage: ',selectedPage)
    
    const pageSize = 12;
    
    const slicedArticles = articles.slice( (page * pageSize - pageSize ) , page * pageSize );
    
    return ( 
        <div className='articles pt-5 pb-5'>
            <div className='container'>
                <PageHeader title='Articles' />
                <div className='row'>
                    {
                        slicedArticles.map(article => {
                            if(favorites.includes(article.id) === true) {
                                return <ArticleCard isFavorite={true} articleCardProps={article}/>    
                            } else {
                                return <ArticleCard isFavorite={false} articleCardProps={article}/>
                            }
                        })
                    }
                </div>
            </div>
            <div className='d-flex justify-content-center align-items-center pt-4'>
                <Pagination
                    page={page}
                    count={Math.ceil(articles.length / 12)}
                    onChange={handlePagination}
                    size='large'
                    />
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
 
export default connect(mapStateToProps)(Articles);