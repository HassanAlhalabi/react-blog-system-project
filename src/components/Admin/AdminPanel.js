import React , {useState} from 'react'
import { Route , Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import MyArticels from './MyArticles';
import NewArticle from './new-article/NewArticle';
import NotFound404 from '../404/404';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import ViewListRoundedIcon from '@material-ui/icons/ViewListRounded';
import DashboardRounded from '@material-ui/icons/DashboardRounded';
import DescriptionRoundedIcon from '@material-ui/icons/DescriptionRounded';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import GroupRoundedIcon from '@material-ui/icons/GroupRounded';


const AdminPanel = () => {

    const [drawerIsClosed, setDrawerClosed] = useState(false); 
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleDrawerClose = () => setDrawerClosed(!drawerIsClosed);

    const handleListItemClick = index => {
        setSelectedIndex(index);
    };

    return ( 
        <div className='admin-panel'>
            <div className='admin-panel-holder d-flex position-relative'>
                <div className={drawerIsClosed === true ?
                        'drawer d-flex justify-content-between drawer-closed'
                    :
                        'drawer d-flex justify-content-between drawer-open'
                    }>
                    <div className='drawer-links pt-5'>
                        <Divider />  
                        <List component="ul" aria-label="main mailbox folders">
                            <Link to='/admin-panel/dashboard'>
                                <ListItem
                                    button
                                    selected={selectedIndex === 0}
                                    onClick={() => handleListItemClick(0)}
                                >
                                    <ListItemIcon>
                                        <DashboardRounded />
                                    </ListItemIcon>
                                    <ListItemText primary="Dashboard" />
                                </ListItem>
                            </Link>  
                            <Link to='/admin-panel/my-articles'> 
                                <ListItem
                                    button
                                    selected={selectedIndex === 1}
                                    onClick={() => handleListItemClick(1)}
                                >
                                    <ListItemIcon>
                                        <DescriptionRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="My Articles" />
                                </ListItem>
                            </Link>  
                            <Link to='/admin-panel/new-article'>   
                                <ListItem
                                    button
                                    selected={selectedIndex === 2}
                                    onClick={() => handleListItemClick(2)}
                                >
                                    <ListItemIcon>
                                        <AddCircleRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="New Article" />
                                </ListItem>
                            </Link>
                            <Link to='/admin-panel/users'>   
                                <ListItem
                                    button
                                    selected={selectedIndex === 3}
                                    onClick={() => handleListItemClick(3)}
                                >
                                    <ListItemIcon>
                                        <GroupRoundedIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Users" />
                                </ListItem>
                            </Link>    
                        </List>
                    </div>
                    <div className='upper-drawer d-flex justify-content-end'>   
                        <Button onClick={handleDrawerClose}>     
                            <ViewListRoundedIcon fontSize='large' />
                        </Button>
                    </div>
                </div>
                {drawerIsClosed && <div className='drawer-replace'></div> }
                <div className='admin-panel-content pt-5 pb-5 col'>
                    <Switch>
                        <Route exact path='/admin-panel' component={Dashboard} />
                        <Route exact path='/admin-panel/dashboard' component={Dashboard} />
                        <Route exact path='/admin-panel/new-article' component={NewArticle} />
                        <Route exact path='/admin-panel/my-articles/:id?' component={MyArticels} />
                        <Route path='*' component={NotFound404} />
                    </Switch>   
                </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;