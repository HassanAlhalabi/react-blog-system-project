import React, { useState } from 'react';
import LandingHeaderImage from '../imgs/landing/LandingHeaderImage.png';
import LandingHeaderImageFW from '../imgs/landing/LandingHeaderImageFW.png';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import Home from '@material-ui/icons/Home';
import Info from '@material-ui/icons/Info';
import ContactMail from '@material-ui/icons/ContactMail';
import TransitEnterexit from '@material-ui/icons/TransitEnterexit';
import PersonAdd from '@material-ui/icons/PersonAdd';

const LandingHeader = () => {

    const [landingMenu,setLandingMenu] = useState('closed')
    const handleLandingMenu = () => {
        landingMenu === 'closed' ? setLandingMenu('open') : setLandingMenu('closed');
    }

    return ( 
        <div className='landing-header position-relative'>
            <nav className={`landing-menu d-flex ${landingMenu}`}>
                <ul className="d-flex flex-column list-inline m-0">
                    <li><Link to='/articles'>Articles <Home /></Link></li>
                    <li><Link to='/news'>News <Home /></Link></li>
                    <li><Link to='/about-us'>About Us <Info /></Link></li>
                    <li><Link to='/contact-us'>Contact <ContactMail /></Link></li>
                    <li><Link to='/signin'>Sign In <TransitEnterexit/></Link></li>
                    <li><Link to='/signup'>Sign Up <PersonAdd /></Link></li>
                </ul>
                <div className='landing-menu-button'>
                    <Menu fontSize='large' onClick={()=> handleLandingMenu()}/>
                </div>
            </nav>
            <img src={LandingHeaderImage} className="back-header-image"/>
            <img src={LandingHeaderImageFW} className="forward-header-image"/>
            <div className="top-text d-flex justify-content-center flex-column text-center">
                <div>    
                    <span className='top-text-slogan'>Be Adventurous</span>
                    <Link to='/'>        
                        <h1 className="landing-page-logo">
                            Travel
                        </h1>
                    </Link>
                    <p>The Inspirational Adventures Across The World</p>
                </div>     
            </div>
        </div>
    );
}
 
export default LandingHeader;