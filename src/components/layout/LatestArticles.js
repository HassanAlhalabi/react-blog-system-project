import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';

const LatestArticls = ({latestArticles,articlesLoading}) => {

    return(
        <div>
            <h3 className='flag mb-0'>Latest Articles</h3>
            <div className='p-2'>    
                {
                    articlesLoading === true ? <p>Loading...</p> :
                        latestArticles.length === 0 ? <Alert severity='info'>There is no Articles</Alert>  :
                            latestArticles.map(article => {
                            return(
                                <Link to={`all-articles/${article.id}`}>
                                    <p className='latest-article m-0 pt-2 pb-2'>
                                        <span className='article-title pr-2 pr-sm-5'>{article.title}</span>
                                        <span className='article-date'>{article.date}</span>
                                    </p>
                                </Link>     
                            );
                    })
                }
            </div>   
        </div>
    );
}

const mapStateToProps = state => {
    return({
        latestArticles: state.articles.articles.slice(-4).reverse(),
        articlesLoading: state.articles.articlesLoading
    });
}

export default connect(mapStateToProps,null)(LatestArticls);