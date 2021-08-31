import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

const LatestArticls = ({articles}) => {

    const latestArticles = articles.slice(-4).reverse();

    return(
        <div className='dashboard-latest-articles'>
            <h3 className='flag mb-0'>Latest Articles</h3>
            <div className='p-2'>    
                {
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
        articles: state.articles
    });
}

export default connect(mapStateToProps,null)(LatestArticls);