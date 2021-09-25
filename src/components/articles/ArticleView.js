import React, { useEffect } from 'react';
import ArticleBody from './ArticleBody';
import Sidebar from '../layout/Sidebar';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Loading from '../layout/Loading';
import { getArticle } from '../../store/actions/actions';
import { useParams } from 'react-router-dom';

const ArticleView = ({ getArticle, article, articleLoading }) => {

    const articleId = useParams('id').id;

    useEffect(() => {
        getArticle(articleId);
    },[])

    return ( 
        <div className='article-view pt-5 pb-5'>
            <div className='container'>
                {
                    articleLoading === true ? <Loading /> :
                        article === null ? <Alert severity='info'>There is no Such Article</Alert> :
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
                }
            </div>
        </div>
     );
}

const mapStateToProps = state => {
    return({
        article: state.articles.article,
        articleLoading: state.articles.articleLoading
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        getArticle: id => dispatch(getArticle(id))
    })
}
 
export default connect(mapStateToProps,mapDispatchToProps)(ArticleView);