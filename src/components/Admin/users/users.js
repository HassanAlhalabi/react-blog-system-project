import React , { useState } from 'react';
import store from '../../../store/store';
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

const useStyle = makeStyles({
    textColor: {
        color: '#EEE !important'
    }
})

const Users = () => {
    const [users , setUsers ] = useState(store.getState().users);
    const classes = useStyle();
    return ( 
        <div className='users'>
            <div className='container'>
                <div className='row'>
                    <List className='w-100'>
                        {
                            users.map(user => 
                                <ListItem key={user.id}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Person />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <Link to={`/admin-panel/users/${user.id}`}>
                                        <ListItemText
                                            className={classes.textColor}
                                            primary={`${user.fName} ${user.lName}`}
                                            secondary={user.status}
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
    );
}
 
export default Users;