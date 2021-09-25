import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuOutlined from '@material-ui/icons/MenuOutlined';

const VisitorNavLinks = () => {

    const [menuOpen,setMenuOpen] = useState(false)

    const handleMenuOpen = () => setMenuOpen(!menuOpen);

    return ( 
        <div className='w-100'>
            <ul className="nav-links list-inline m-0 flex-wrap d-none d-md-flex">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/articles'>Articles</Link></li>
                <li><Link to='/gallery'>Gallery</Link></li>
                <li><Link to='/about-us'>About Us</Link></li>
                <li><Link to='/contact-us'>Contact</Link></li>
            </ul>
            <div className='mobile-menu d-flex d-md-none justify-content-center'>
                <span onClick={handleMenuOpen} onFocus={console.log('hide')}>
                    <MenuOutlined fontSize="large"/>
                </span>
                {
                    menuOpen === true ?
                    <ul className="mobile-nav-links list-inline m-0">
                        <li onClick={handleMenuOpen} ><Link to='/'>Home</Link></li>
                        <li onClick={handleMenuOpen} ><Link to='/articles'>Articles</Link></li>
                        <li onClick={handleMenuOpen} ><Link to='/gallery'>Gallery</Link></li>
                        <li onClick={handleMenuOpen} ><Link to='/about-us'>About Us</Link></li>
                        <li onClick={handleMenuOpen} ><Link to='/contact-us'>Contact</Link></li>
                    </ul> : null
                }
            </div>
        </div>
     );
}
 
export default VisitorNavLinks;