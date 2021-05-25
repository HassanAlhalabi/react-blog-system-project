import React from 'react';
import { connect } from 'react-redux';
import { deleteUser } from '../../../store/actions/actions';
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
        backgroundColor: '#484e52',
        marginBottom: '20px',
        paddingRight: '96px',
        paddingTop: '25px',
        paddingBottom: '25px'
    },
});

const UsersTrash = ({users,deleteUser}) => {

    const classes = useStyle();
    
    const handleUserDelete = id => {
        const deleteUserConfirm = window.confirm('Are You Sure You Want to Delete User Permenantly?')
        if(deleteUserConfirm) {
            deleteUser(id);
            showFlashMessage('User Has Been Deleted Successfully');
        }
    }

    return ( 
        <div className='articles-trash'>
            <div className='container'>
            {users.length === 0 ?
                <Alert severity='info'>There is No Users</Alert>
                :
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
                                        {
                                            user.role !== 'owner' &&
                                            <IconButton edge="end" aria-label="delete" onClick={() => handleUserDelete(user.id)}>
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
        users: state.users.filter(user => user.inTrash === true)
    })
}

const mapDispatchToProps = dispatch => {
    return({
        deleteUser: id => dispatch(deleteUser(id))
    })
}
 
export default connect(mapStateToProps,mapDispatchToProps)(UsersTrash);