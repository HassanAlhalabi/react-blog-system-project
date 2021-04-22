import React, { useState } from 'react';
import store from '../../store/store'
import Article from '../Article'

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';

const MyArticles = () => {
    const articles = useState(store.getState())[0]
    const [secondary, setSecondary] = React.useState(false);
    console.log(articles)
    const useStyle = makeStyles({
        color: '#EEE'
    })
    const classes = useStyle();
    return (
        <div className='my-articles'>
            <div className='container'>
                <div className='row'>

                <List className='w-100'>
                    <ListItem>
                        <ListItemAvatar>
                        <Avatar>
                            <DescriptionRoundedIcon />
                        </Avatar>
                        </ListItemAvatar>
                        <ListItemText
                            primary="Single-line item"
                            secondary={secondary ? 'Secondary text' : null}
                        />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete">
                            <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>,
                </List>
                    
                    {/* {
                        articles.map(article => 
                            <Article key={article.id} articleProps={article} />
                        )
                    } */}
                </div>
            </div>
        </div>
    )
}

export default MyArticles;