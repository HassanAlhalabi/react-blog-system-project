import React , {useState} from 'react'
import { Route , Switch } from 'react-router-dom'
import store from '../../store/store';
import { addUser } from '../../store/actions/actions';
import Dashboard from './Dashboard';
import MyArticels from './my-articles/MyArticles';
import ArticleModify from './my-articles/ArticleModify';
import NewArticle from './new-article/NewArticle';
import Users from './users/users';
import NotFound404 from '../404/404';
import Drawer from './drawer/Drawer';

const AdminPanel = () => {

    const [drawerIsClosed, setDrawerClosed] = useState(false); 

    const handleDrawerClose = () => setDrawerClosed(!drawerIsClosed);

    return ( 
        <div className='admin-panel'>
            <div className='admin-panel-holder d-flex position-relative'>
                <Drawer 
                    drawerIsClosed={drawerIsClosed}
                    handleDrawerClose={handleDrawerClose}
                />
                {drawerIsClosed && <div className='drawer-replace'></div> }
                <div className='admin-panel-content pt-5 pb-5 col'>
                    <Switch>
                        <Route exact path='/admin-panel' component={Dashboard} />
                        <Route exact path='/admin-panel/dashboard' component={Dashboard} />
                        <Route exact path='/admin-panel/new-article' component={NewArticle} />
                        <Route exact path='/admin-panel/my-articles/' component={MyArticels} />
                        <Route exact path='/admin-panel/my-articles/:id' component={ArticleModify} />
                        <Route exact path='/admin-panel/users' component={Users} />
                        <Route path='*' component={NotFound404} />
                    </Switch>   
                </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;