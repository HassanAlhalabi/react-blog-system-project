import React, { useState } from 'react';
import ArticleBody from './ArticleBody';
import Sidebar from './layout/Sidebar';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const ArticleView = ({articles}) => {

    const articleId = useParams('id').id;
    // const [article,setArticle] = useState();
    const article = articles.filter(article => article.id === articleId)[0];

    // fetch(`http://localhost:8000/articles/${articleId}`)
    //     .then(response => response.json())
    //     .then(article => setArticle(article));

    return ( 
        <div className='article-view pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-lg-8'>
                        {
                            article !== undefined ?
                                <ArticleBody articleProps={article} />
                            :
                            <Alert severity='warning' variation='filled'>
                                There is no Such Article , Please Check Your URL
                            </Alert>
                        }
                    </div>
                    <div className='col-12 col-lg-4'>
                        <Sidebar latestArticlesNumber={3} />
                    </div>
                </div>
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return({
        articles: state.articles,
    })
}
 
export default connect(mapStateToProps)(ArticleView);