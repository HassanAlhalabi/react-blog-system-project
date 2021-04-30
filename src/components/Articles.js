import React from 'react';
import { connect } from 'react-redux';
import ArticleCard from './ArticleCard';

const Articles = ({articles}) => {
    return ( 
        <div className='articles pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    {
                        articles.map(article => 
                            <ArticleCard articleCardProps={article}/>    
                        )
                    }
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return({
        articles: state.articles
    })
}
 
export default connect(mapStateToProps)(Articles);