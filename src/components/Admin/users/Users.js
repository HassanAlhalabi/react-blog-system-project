import React , { useState } from 'react';
import { connect } from 'react-redux';
import { removeUser } from '../../../store/actions/actions';
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
import Edit from '@material-ui/icons/Edit';
import { makeStyles } from '@material-ui/core/styles';
import { showFlashMessage } from '../../layout/FlashMessage';

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
});

const Users = ({users,removeUser}) => {

    const classes = useStyle();
    
    const handleUserRemove = id => {
        const removeUserConfirm = window.confirm('Are You Sure You Want to Remove This User to The Trash?')
        if(removeUserConfirm) {
            removeUser(id);
            showFlashMessage('User Has Been Removed Successfully');
        }
    }

    return ( 
        <div className='users'>
            <div className='container'>
                <div className='row'>
                    <List className='w-100'>
                        {
                            users.map(user => 
                                <ListItem key={user.id} className={`${classes.listItemStyle} article-item`}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Link to={`/admin-panel/users/${user.id}`}>
                                        <ListItemText
                                            className={classes.textColor}
                                            primary={`${user.firstName} ${user.lastName}`}
                                            secondary={user.role}
                                        />
                                    </Link> 
                                    <ListItemSecondaryAction>  
                                        <IconButton edge="end" aria-label="delete">
                                            <Edit className={classes.textColor} />
                                        </IconButton>
                                        {
                                            user.role !== 'owner' &&
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleUserRemove(user.id)}>
                                                <DeleteIcon className={classes.textColor} />
                                            </IconButton>
                                        } 
                                    </ListItemSecondaryAction>
                                </ListItem>
                            )
                        }
                    </List>
                </div>
            </div>    
        </div>
    );
}

const mapStateToProps = state => {
    return({
        users: state.users.filter(user => user.role !== 'client' && user.inTrash === false)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        removeUser: id => dispatch(removeUser(id))
    })
}
 
export default connect(mapStateToProps,mapDispatchToProps)(Users);