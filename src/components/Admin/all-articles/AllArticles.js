import React , { useState } from 'react';
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
import Edit from '@material-ui/icons/Edit';
import Pagination from '@material-ui/lab/Pagination';
import Alert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// import articleImg from '../../imgs/article-img.jpg';


const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    },
    listItemStyle: {
        backgroundColor: '#484e52',
        marginBottom: '20px',
        paddingRight: '96px',
        paddingTop: '25px',
        paddingBottom: '25px'
    },
})

const AllArticles = ({articles, deleteArticle}) => {

    const classes = useStyle();
    
    const handleArticleDelete = index => {   
        const deleteConfirmation = window.confirm('Are You Sure You Want to Delete The Article!!');   
        deleteConfirmation === true ? deleteArticle(index) : console.log('');
    }

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1 ;

    const [selectedPage,setSelectedPage] = useState(page);

    const articlesList = articles.slice( (page * 10 - 10) , (10 * page) );

    const history = useHistory();

    const handlePagination = (event, value) => {
        setSelectedPage(value);
        history.push(`/admin-panel/all-articles/page/${value}`)
    };

    return (
        <div className='all-articles h-100'>
            <div className='container h-100'>
                { articlesList.length === 0 ?
                    <Alert severity='warning'>There is no Articles</Alert>
                    :
                    <div className='d-flex h-100 flex-column justify-content-between'>
                        <div className='row'>
                            <List className='w-100'>
                                {
                                    articlesList.map(article => 
                                        <ListItem key={article.id} article={article} className={`${classes.listItemStyle} article-item`}>
                                            <ListItemAvatar>
                                                <Avatar className='overflow-hidden'>
                                                    <DescriptionRoundedIcon />
                                                    {/* <img src={articleImg} className='w-100 h-100' alt='article-img'/> */}
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
                                                <IconButton edge="end" aria-label="delete" onClick={(e) => handleArticleDelete(article.id)} color='secondary'>
                                                    <DeleteIcon className={classes.textColor} color='secondary'/>
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                    )
                                }
                            </List>
                        </div>
                        <div className='pagination d-flex justify-content-center'> 
                            <Pagination 
                                page={selectedPage} 
                                onChange={handlePagination} 
                                count={articles.length % 10 + 1} size='large'/>
                        </div>
                    </div>      
                }          
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        articles: state.articles
    })
}

const mapDispathToProps = dispatch => {
    return ({
        deleteArticle: index => 
            dispatch(deleteArticle(index))
    })
}

export default connect(mapStateToProps,mapDispathToProps)(AllArticles);