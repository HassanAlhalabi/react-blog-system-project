import React from 'react';
import { Link } from 'react-router-dom';

const VisitorNavLinks = () => {
    return ( 
        <ul className="d-flex list-inline m-0 flex-wrap">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/articles'>Articles</Link></li>
            <li><Link to='/news'>News</Link></li>
            <li><Link to='/about-us'>About Us</Link></li>
            <li><Link to='/contact-us'>Contact Us</Link></li>
        </ul>
     );
}
 
export default VisitorNavLinks;