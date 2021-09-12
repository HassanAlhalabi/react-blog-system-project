import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import CommentRounded from '@material-ui/icons/CommentRounded';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    }
});

const Comment = ({commentProps,handleCommentRemove}) => {

    const classes = useStyle();

    return (
        <div className='admin-comment' key={commentProps.id}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className='overflow-hidden'>
                        <CommentRounded />
                    </Avatar>    
                </ListItemAvatar>
                <Link to={`/admin-panel/comments/${commentProps.id}`}>
                    <ListItemText
                        primary={commentProps.content}
                        secondary={`${commentProps.date}`}
                    />
                </Link>  
                <div className='article-is-published mr-auto mr-md-0 ml-md-auto'>
                    <span className='text-center'>
                        {commentProps.isPublished ? 
                            <Alert severity='success' variant='filled'>Published</Alert> :
                            <Alert severity='warning' variant='filled'>Not Published</Alert> }    
                    </span>   
                </div>  
                <ListItemSecondaryAction>
                    <IconButton edge="end" aria-label="delete" onClick={(e) => handleCommentRemove(commentProps.id)} color='secondary'>
                        <DeleteIcon color='secondary' className={classes.textColor}/>
                    </IconButton>
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    )
}

export default Comment;