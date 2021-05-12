import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ArrowDropDown from '@material-ui/icons/ArrowDropDown';
import Person from '@material-ui/icons/Person';
import LocalPostOfficeRounded from '@material-ui/icons/LocalPostOfficeRounded';
import FavoriteRounded from '@material-ui/icons/FavoriteRounded';
import { makeStyles } from '@material-ui/core';

const useStyle = makeStyles({
    dropdown: {
        transition: '.8s',
        overflow: 'hidden',
        borderTop: '3px solid #e3cdb3',
        zIndex: '1000',
    },

})


const RegisteredLinks = ({user}) => {

    const [dropdownIsOpen , setDropdown] = useState(false)

    const handleDropdown = () => setDropdown(!dropdownIsOpen)

    const classes = useStyle();

    return ( 
        <div className='registered-links position-relative' onClick={handleDropdown} >
                <div className='d-flex align-items-center clickable' >    
                    <div className='user-name'>
                        <Typography variant='h6'>
                            <ArrowDropDown />
                            User Name
                        </Typography>
                    </div>
                    <div className='user-avatar ml-2'>
                        <Avatar />
                    </div>
                </div>    
            <div className={`user-dropdown-menu bg-second position-absolute ${dropdownIsOpen === true ? 'd-block' : 'd-none'} ${classes.dropdown}`}>
                <List component="ul" aria-label="main mailbox folders">
                    <Link to='/profile'>
                        <ListItem button className='color-third'>
                            <ListItemText
                                primary='Profile'
                            />
                            <ListItemIcon className='justify-content-end '>
                                <Person className='color-third'/>
                            </ListItemIcon>
                        </ListItem>
                    </Link>  
                    <Link to='/favorite-articles'>
                        <ListItem button className='color-third'>
                            <ListItemText
                                button 
                                primary='Favorates List'
                            />
                            <ListItemIcon className='justify-content-end'>
                                <FavoriteRounded className='color-third'/>
                            </ListItemIcon>
                        </ListItem>
                    </Link>  
                    {
                        user === 'admin' && (
                            <Link to='/admin-panel'>
                                <ListItem button className='color-third'>
                                    <ListItemText 
                                        primary='Admin Panel'
                                    />
                                    <ListItemIcon className='justify-content-end'>
                                        <LocalPostOfficeRounded className='color-third' />
                                    </ListItemIcon>
                                </ListItem>
                            </Link>     
                        )
                    }
                    <Link to='/profile'>
                        <ListItem button className='color-third'>
                            <ListItemText
                                button 
                                primary='Log Out'
                            />
                            <ListItemIcon className='justify-content-end'>
                                <Person className='color-third'/>
                            </ListItemIcon>
                        </ListItem>
                    </Link>
                    
                </List>
            </div>
        </div>
     );
}
 
export default RegisteredLinks;