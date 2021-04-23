import React, { useState } from 'react';
import store from '../../../store/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    }
})

const MyArticles = ({articles}) => {
    const classes = useStyle();
    return (
        <div className='my-articles'>
            <div className='container'>
                <div className='row'>
                    <List className='w-100'>
                        {
                            articles.map(article => 
                                <ListItem key={article.id} articleProps={article}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <DescriptionRoundedIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Link to={`/admin-panel/my-articles/${article.id}`}>
                                        <ListItemText
                                            className={classes.textColor}
                                            primary={article.title}
                                            secondary={article.author}
                                        />
                                    </Link>    
                                    <ListItemSecondaryAction>
                                        <IconButton edge="end" aria-label="delete">
                                            <DeleteIcon className={classes.textColor} />
                                        </IconButton>
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        }
                    </List>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        articles: state.articles
    })
}

const mapDispatchToProps = dispatch => {
    return (
        {
            addArticle: dispatch.addArticle()
        }
    )
}

console.log(mapDispatchToProps)

export default connect(mapStateToProps)(MyArticles);