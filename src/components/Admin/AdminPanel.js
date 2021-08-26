import React , { useState } from 'react'
import { Route , Switch } from 'react-router-dom'
import Dashboard from './Dashboard';
import AllArticels from './all-articles/AllArticles';
import ArticleOptions from './all-articles/ArticleOptions';
import NewArticle from './new-article/NewArticle';
// import Users from './users/Users';
import UserDetails from './users/UserDetails';
import NewUser from './users/NewUser';
import NotFound404 from '../404/404';
import Drawer from './drawer/Drawer';
import EditArticle from './all-articles/EditArticle';
import Trash from './trash/Trash';
import ArticlesTrash from './trash/ArticlesTrash';
import UsersTrash from './trash/UsersTrash';
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
                                {/* <Route exact path='/admin-panel/users' component={Users} /> */}
                                <Route exact path='/admin-panel/users/:id' component={UserDetails} />
                                <Route exact path='/admin-panel/add-user' component={NewUser} />
                                <Route exact path='/admin-panel/trash' component={Trash} />
                                <Route exact path='/admin-panel/trash/articles' component={ArticlesTrash} />
                                <Route exact path='/admin-panel/trash/users' component={UsersTrash} />
                                <Route path='*' component={NotFound404} />
                            </Switch>   
                        </CategoriesProvider>
                    </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;