import React from 'react';
import { Link } from 'react-router-dom';

const VisitorNavLinks = () => {
    return ( 
        <ul className="d-flex list-inline justify-content-left p-0 m-0 flex-wrap">
            <li><Link to='/home'><i className='fa fa-home'></i> Home</Link></li>
            <li><Link to='/articles'><i className='fa fa-article'></i> Articles</Link></li>
            <li><Link to='/contact-us'><i className='fa fa-contact'></i> Contact Us</Link></li>
        </ul>
     );
}
 
export default VisitorNavLinks;