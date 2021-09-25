import React from 'react';
import { connect } from 'react-redux';
import { removeArticle, publishUpdate } from '../../../store/actions/actions';
import { useParams , Link , useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { showFlashMessage } from '../../../components/layout/FlashMessage';
import Button from '@material-ui/core/Button';
import Edit from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import PublishRounded from '@material-ui/icons/PublishRounded';
import ArticleBody from '../../articles/ArticleBody';
import Loading from '../../layout/Loading';

const useStyle = makeStyles({
    articleOptions: {
        top: '5px',
        position: 'sticky',
        padding: '15px',
    },
})

const ArticleOptions = ({ articles, articlesLoading, removeArticle, publishUpdate }) => {
    
    const classes   = useStyle();
    const articleId = useParams('id').id;
    const article   = articles.filter(article => article.id === articleId )[0] 
    const history   = useHistory();

    const handleArticleRemove = index => {   
        const deleteConfirmation = window.confirm('Are You Sure You Want to Remove Article!!');   
        if(deleteConfirmation) {
            removeArticle(index);
            showFlashMessage('Article Has Been Removed to Trash');
            history.push('/admin-panel/all-articles');
        }
    }

    const handlePublish = () => {
        publishUpdate(articleId,article.isPublished);
        article.isPublished === true ?
            showFlashMessage('Article Has Been Published Successfully')
        :
            showFlashMessage('Article Has Been UnPublished Successfully')
    };

    return articlesLoading ? <Loading /> : 
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
                                onClick={(e) => handleArticleRemove(article.id)}>
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
}
 
const mapStateToProps = state => {
    return({
        articles: state.articles.articles,
        articlesLoading: state.articles.articlesLoading
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        removeArticle: id => dispatch(removeArticle(id)),
        publishUpdate: (id,isPublished) => dispatch(publishUpdate(id,isPublished))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(ArticleOptions);