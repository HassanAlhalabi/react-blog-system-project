import React, { useState } from 'react';
import { connect } from 'react-redux';
import { deleteArticle, publishUpdate } from '../../../store/actions/actions';
import { useParams , Link , useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { showFlashMessage } from '../../../components/layout/FlashMessage';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PublishRounded from '@material-ui/icons/PublishRounded';
import ArticleBody from '../../ArticleBody';
import Alert from '@material-ui/lab/Alert';

const useStyle = makeStyles({
    articleOptions: {
        top: '5px',
        position: 'sticky',
        padding: '15px',
    },
})

const ArticleOptions = ({articles,deleteArticle,publishUpdate}) => {
    
    const classes   = useStyle();
    const articleId = useParams('id').id;
    const article   = articles.filter(article => article.id == articleId )[0] 
    const history   = useHistory();

    const handleArticleDelete = index => {   
        const deleteConfirmation = window.confirm('Are You Sure You Want to Delete The Article!!');   
        if(deleteConfirmation) {
            deleteArticle(index);
            history.push('/admin-panel/all-articles') 
        } else {
            console.log('');
        }
    }

    const handlePublish = () => {
        publishUpdate(articleId);
        article.isPublished === true ?
            showFlashMessage('Article Has Been Published Successfully')
        :
            showFlashMessage('Article Has Been UnPublished Successfully')
    };

    return ( 
        <div>
            <div className='row'>
                <div className='col-12 col-md-9'>
                        <ArticleBody articleProps={article} />
                </div>
                <div className='col-12 col-md-3'>
                    <div className={`article-options ${classes.articleOptions}`}>
                        <div className='mb-2'>
                            <Link to={`/admin-panel/edit-article/${article.id}`}>
                                <Button variant='contained' color='primary' startIcon={<Edit />}>
                                    Edit Article
                                </Button>
                            </Link>     
                        </div>
                        <div className='mb-2'>
                            <Button 
                                variant='contained'
                                color='secondary'
                                startIcon={<DeleteIcon />}
                                onClick={(e) => handleArticleDelete(article.id)}>
                                Delete Article
                            </Button>
                        </div>
                        <div className='mb-2'>
                            <Button 
                                variant='contained'
                                color='inherit'
                                startIcon={<PublishRounded />}
                                onClick={handlePublish}
                                >
                                {article.isPublished === true ? 'UnPubplish' : 'Puplish'}
                            </Button>
                        </div>
                    </div>
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

const mapDispatchToProps = dispatch => {
    return ({
        deleteArticle: id => dispatch(deleteArticle(id)),
        publishUpdate: id => dispatch(publishUpdate(id))     
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleOptions);