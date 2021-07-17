import React from 'react';
import { Link } from 'react-router-dom';


const LandingNav = () => {
    return ( 
        <nav className='landing-nav pt-5 pb-5'>
            <div className='container'>
                <div className='d-flex justyfy-content-between'>
                    <div className='m-auto'>
                        <ul className="d-flex list-inline m-0 flex-wrap">
                            <li><Link to='/articles'>Articles</Link></li>
                            <li><Link to='/news'>News</Link></li>
                            <li><Link to='/about-us'>About Us</Link></li>
                            <li><Link to='/contact-us'>Contact</Link></li>
                        </ul>
                    </div>
                    <div className=''>

                    </div>
                </div>
            </div>
        </nav>
    );
}
 
export default LandingNav;