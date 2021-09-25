import React , { useContext } from 'react';
import { useParams } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import Loading from '../../layout/Loading';
import PageHeader from '../../layout/PageHeader';
import EditArticleLogic from './EditArticleLogic';

const EditArticle = ({ articlesLoading , articles }) => {

    const articleId = useParams('id').id;
    const article = articles.filter(article => `${article.id}` === articleId)[0];
 

    return(
        <div className='add-form pt-4 pb-4'>
            <div className='container-fluid'>
                <PageHeader title='Edit Article' />
                {
                    articlesLoading === true ? <Loading /> :
                    <EditArticleLogic article={articles.filter(article => `${article.id}` === articleId)[0]} />
                }
            </div>    
        </div>
                
    );
}

const mapStateToProps = state => {
    return ({
        articles: state.articles.articles,
        articlesLoading: state.articles.articlesLoading
    })
}

export default connect(mapStateToProps,null)(EditArticle);