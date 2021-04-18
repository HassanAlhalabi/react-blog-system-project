import React from 'react'
import {Link} from 'react-router-dom';

const AdminNavLinks = () => {
    return ( 
        <ul className="d-flex list-inline justify-content-left p-0 m-0 flex-wrap">
            <li><Link to='/dashboard'><i className='fa fa-home'></i> Dashboard</Link></li>
            <li><Link to='/new-article'><i className='fa fa-plus'></i> New Article</Link></li>
            <li><Link to='/my-articles'><i className='fa fa-list'></i> My Articles</Link></li>
            <li><Link to='/comments'><i className='fa fa-comments'></i> Comments</Link></li>
        </ul>
);
}
 
export default AdminNavLinks;