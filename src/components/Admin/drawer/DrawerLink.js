import React , { useState } from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

const DrawerLink = ({index ,text ,icon ,selectedIndex ,to ,handleListItemClick}) => {
    
    return ( 
        <Link to={to}>
            <ListItem
                button
                selected={selectedIndex === index}
                onClick={() => handleListItemClick(index)}
            >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <ListItemText primary={text} />
            </ListItem>
        </Link>
     );
}
 
export default DrawerLink;