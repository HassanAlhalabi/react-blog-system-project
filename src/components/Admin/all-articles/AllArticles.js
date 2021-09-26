import React from 'react';
import { removeArticle } from '../../../store/actions/actions';
import { connect } from 'react-redux';
import { Link , useParams , useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import Edit from '@material-ui/icons/Edit';
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import { showFlashMessage } from '../../layout/FlashMessage';
import { makeStyles } from '@material-ui/core/styles';
import PageHeader from '../../layout/PageHeader';
import Loading from '../../layout/Loading';
import Uploading from '../../layout/Uploading';

const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    }
});

const AllArticles = ({ articles, removeArticle ,articlesLoading, articleUploading}) => {
    
    const classes = useStyle();    
    
    const handleArticleRemove = async index => {   
        const deleteConfirmation = window.confirm('Are You Sure You Want to Remove Article to Trash!!');   
        if(deleteConfirmation){
            await removeArticle(index);
            showFlashMessage('Article Has Been Removed to Trash')
        }
    }

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1 ;
    
    const pageSize = 10;

    const articlesList = articles.length !== 0 ? articles.slice( (page * pageSize - pageSize) , (pageSize * page) ).filter(article => article.inTrash === false): [];

    const history = useHistory();

    const handlePagination = (event, value) => {
        history.push(`/admin-panel/all-articles/page/${value}`)
    };

    return (
        <div className='all-articles h-100'>
            {articleUploading === true ? <Uploading /> : null }
            <div className='container h-100'>
                <PageHeader title='Articles' />
                { 
                articlesLoading === true ? <Loading /> :
                    articles.length === 0 ?
                        <Alert severity='warning'>There is no Articles</Alert>
                    : 
                        <div className='d-flex flex-column justify-content-between'>
                            <div className='row'>
                                <List className='w-100'>
                                    {
                                        articlesList.map(article => 
                                            <ListItem key={article.id} article={article} className={`${classes.listItemStyle} article-item`}>
                                                <ListItemAvatar>
                                                    <Avatar className='overflow-hidden'>
                                                        <DescriptionRoundedIcon />
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <Link to={`/admin-panel/all-articles/${article.id}`}>
                                                    <ListItemText
                                                        className={classes.textColor}
                                                        primary={article.title}
                                                        secondary={`${article.author} - ${article.date}`}
                                                    />
                                                </Link>  
                                                <div className='article-is-published mr-auto mr-md-0 ml-md-auto'>
                                                    <span className='text-center'>
                                                        {article.isPublished ? 
                                                            <Alert severity='success' variant='filled'>Published</Alert> :
                                                            <Alert severity='warning' variant='filled'>Not Published</Alert> }    
                                                    </span>   
                                                </div>  
                                                <ListItemSecondaryAction>
                                                    <IconButton edge="end" aria-label="edit" color='primary'>
                                                        <Link to={`/admin-panel/edit-article/${article.id}`}>
                                                            <Edit className={classes.textColor} />
                                                        </Link>
                                                    </IconButton>
                                                    <IconButton edge="end" aria-label="delete" onClick={(e) => handleArticleRemove(article.id)} color='secondary'>
                                                        <DeleteIcon className={classes.textColor} color='secondary'/>
                                                    </IconButton>
                                                </ListItemSecondaryAction>
                                            </ListItem>
                                        )
                                    }
                                </List>
                            </div>
                            {
                                articlesList.length >= pageSize &&
                                <div className='pagination d-flex justify-content-center'> 
                                    <Pagination 
                                        page={page} 
                                        onChange={handlePagination} 
                                        count={Math.ceil(articles.length/10)} 
                                        size='large'/>
                                </div>
                            }
                        </div>
                }          
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        articles: state.articles.articles,
        articlesLoading: state.articles.articlesLoading,
        articleUploading: state.articles.articleUploading
    })
}

const mapDispatchToProps = dispatch => {
    return ({
        removeArticle: id => dispatch(removeArticle(id))
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(AllArticles);