import React from 'react';
import { deleteArticle } from '../../../store/actions/actions';
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
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import { showFlashMessage } from '../../layout/FlashMessage';
import { makeStyles } from '@material-ui/core/styles';
import Loading from '../../layout/Loading';

const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    },
    listItemStyle: {
        marginBottom: '20px',
        paddingRight: '96px',
        paddingTop: '25px',
        paddingBottom: '25px'
    },
});

const ArticlesTrash = ({articles,deleteArticle,articlesLoading}) => {

    const classes = useStyle();    
    
    const handleArticleDelete = index => {   
        const deleteConfirmation = window.confirm('Are You Sure You Want to Delete Article Permenantley!!');   
        if(deleteConfirmation){
            deleteArticle(index);
            showFlashMessage('Article Has Been Deleted Successfully')
        }
    }

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1 ;
    
    const pageSize = 10;
    
    const articlesList = articles.slice( (page * pageSize - pageSize) , (pageSize * page) ).filter(article => article.inTrash === false);

    const history = useHistory();

    const handlePagination = (event, value) => {
        history.push(`/admin-panel/all-articles/page/${value}`)
    };

    console.log(articlesLoading)

    return ( 
        <div className='articles-trash'>
             <div className='container h-100'>
                {articlesLoading === true ? <Loading /> :
                    articles.length === 0 ?
                        <Alert severity='info'>There is no Articles</Alert>
                        :
                        <div className='d-flex h-100 flex-column justify-content-between'>
                            <div className='row'>
                                <List className='w-100'>
                                    {
                                        articles.map(article => 
                                            <ListItem key={article.id} article={article} className={`${classes.listItemStyle} article-item`}>
                                                <ListItemAvatar>
                                                    <Avatar className='overflow-hidden'>
                                                        <DescriptionRoundedIcon />                                                    </Avatar>
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
                                                    <IconButton edge="end" aria-label="delete" onClick={(e) => handleArticleDelete(article.id)} color='secondary'>
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
    );
}


const mapStateToProps = state => {
    return ({
        articles: state.articles.articles.filter(article => article.inTrash === true),
        articlesLoading: state.articles.articlesLoading
    })
}

const mapDispathToProps = dispatch => {
    return ({
        deleteArticle: index => 
            dispatch(deleteArticle(index))
    })
}
 
export default connect(mapStateToProps,mapDispathToProps)(ArticlesTrash);