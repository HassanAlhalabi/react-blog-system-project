import React from 'react';
import { connect } from 'react-redux';
import { deleteComment } from '../../../store/actions/actions';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Person from '@material-ui/icons/Person';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import { showFlashMessage } from '../../layout/FlashMessage';

const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    },
    listItemStyle: {
        backgroundColor: '#26201C',
        marginBottom: '20px',
        paddingRight: '96px',
        paddingTop: '25px',
        paddingBottom: '25px'
    },
});

const CommentsTrash = ({comments,deletecomment}) => {

    const classes = useStyle();
    
    const handleCommentDelete = id => {
        const deleteCommentConfirm = window.confirm('Are You Sure You Want to Delete Comment Permenantly?')
        if(deleteCommentConfirm) {
            deletecomment(id);
            showFlashMessage('Comment Has Been Deleted Successfully');
        }
    }

    return ( 
        <div className='articles-trash'>
            <div className='container'>
            {comments.length === 0 ?
                <Alert severity='info'>There is No Comments</Alert>
                :
                <div className='row'>
                    <List className='w-100'>
                        {
                            comments.map(comment => 
                                <ListItem key={comment.id} className={`${classes.listItemStyle} article-item`}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Link to={`/admin-panel/comments/${comment.id}`}>
                                        <ListItemText
                                            className={classes.textColor}
                                            primary={`${comment.firstName} ${comment.lastName}`}
                                            secondary={comment.role}
                                        />
                                    </Link> 
                                    <ListItemSecondaryAction>  
                                        {
                                            comment.role !== 'owner' &&
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleCommentDelete(comment.id)}>
                                                <DeleteIcon className={classes.textColor} />
                                            </IconButton>
                                        } 
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        }
                    </List>
                </div>
                }
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return({
        comments: state.comments.filter(comment => comment.inTrash === true)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        deleteComment: id => dispatch(deleteComment(id))
    })
}
 
export default connect(mapStateToProps,mapDispatchToProps)(CommentsTrash);