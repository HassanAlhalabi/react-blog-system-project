import React from 'react'
import {BrowserRouter ,Route , Switch} from 'react-router-dom'
import Dashboard from './Dashboard';
import MyArticels from './MyArticles';
import NewArticle from './new-article/NewArticle';

const AdminPanel = () => {
    return ( 
        <div className='admin-panel'>
            <div className='row m-0'>
                <div className='col-2'>
sdfsdfsdf
                </div>
                <div className='col-10'>
                    <BrowserRouter>
                        <Switch>
                            <Route exact path='/admin-panel' component={Dashboard} />
                            <Route exact path='/admin-panel/dashboard' component={Dashboard} />
                            <Route path='/admin-panel/new-article' component={NewArticle} />
                            <Route path='/admin-panel/my-articles/:id?' component={MyArticels} />
                        </Switch>
                    </BrowserRouter>    
                </div>
            </div>
        </div>
     );
}
 
export default AdminPanel;