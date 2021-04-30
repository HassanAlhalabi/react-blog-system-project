import React , { useState } from 'react'
import { Route , Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllArticels from './all-articles/AllArticles';
import ArticleOptions from './all-articles/ArticleOptions';
import NewArticle from './new-article/NewArticle';
import Users from './users/users';
import NotFound404 from '../404/404';
import Drawer from './drawer/Drawer';
import EditArticle from './all-articles/EditArticle';
import { CategoriesProvider } from '../../contexts/categoriesContext';

const AdminPanel = () => {

    const [drawerIsClosed, setDrawerClosed] = useState(false); 

    const handleDrawerClose = () => setDrawerClosed(!drawerIsClosed);

    return ( 
        <div className='admin-panel'>
            <div className='admin-panel-holder d-flex flex-column flex-lg-row position-relative'>
                <Drawer 
                    drawerIsClosed={drawerIsClosed}
                    handleDrawerClose={handleDrawerClose}
                />
                {drawerIsClosed && <div className='drawer-replace'></div> }
                    <div className='admin-panel-content pt-5 pb-5 col'>
                        <CategoriesProvider>        
                            <Switch>
                                <Route exact path='/admin-panel' component={Dashboard} />
                                <Route exact path='/admin-panel/dashboard' component={Dashboard} />
                                <Route exact path='/admin-panel/new-article' component={NewArticle} />
                                <Route exact path='/admin-panel/all-articles/' component={AllArticels} />
                                <Route exact path='/admin-panel/all-articles/page/:page?' component={AllArticels} />
                                <Route exact path='/admin-panel/all-articles/:id' component={ArticleOptions} />
                                <Route exact path='/admin-panel/edit-article/:id' component={EditArticle} />
                                <Route exact path='/admin-panel/users' component={Users} />
                                <Route path='*' component={NotFound404} />
                            </Switch>   
                        </CategoriesProvider>
                    </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;