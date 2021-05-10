import React from 'react';
import ArticleBody from './ArticleBody';
import { useParams , useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const ArticleView = ({articles}) => {

    const articleId = useParams('id').id;
    const article = articles.filter(article => article.id === articleId)[0];

    return ( 
        <div className='article-view pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-9'>
                        {
                            article !== undefined ?
                                <ArticleBody articleProps={article} />
                            :
                            <Alert severity='warning' variation='filled'>
                                There is no Such Article , Please Check Your URL
                            </Alert>
                        }
                    </div>
                    <div className='col-12 col-md-3'>
                        SIDEBAR
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