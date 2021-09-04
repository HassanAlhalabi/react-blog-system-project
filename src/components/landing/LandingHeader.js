import React, { useState } from 'react';
import LandingHeaderImage from '../imgs/landing/LandingHeaderImage.png';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/icons/Menu';
import DescriptionOutlined from '@material-ui/icons/DescriptionOutlined';
import PhotoAlbumOutlined from '@material-ui/icons/PhotoAlbumOutlined';
import InfoOutlined from '@material-ui/icons/InfoOutlined';
import ContactMailOutlined from '@material-ui/icons/ContactMailOutlined';
import TransitEnterexitOutlined from '@material-ui/icons/TransitEnterexitOutlined';
import PersonAddOutlined from '@material-ui/icons/PersonAddOutlined';

const LandingHeader = () => {

    const [landingMenu,setLandingMenu] = useState('closed')
    const handleLandingMenu = () => {
        landingMenu === 'closed' ? setLandingMenu('open') : setLandingMenu('closed');
    }

    return ( 
        <div className='landing-header position-relative'>
            <nav className={`landing-menu d-flex ${landingMenu}`} onBlur={() => console.log('blured')}>
                <ul className="d-flex flex-column list-inline m-0">
                    <li><Link to='/articles'>Articles <DescriptionOutlined /></Link></li>
                    <li><Link to='/gallery'>Gallery <PhotoAlbumOutlined /></Link></li>
                    <li><Link to='/about-us'>About Us <InfoOutlined /></Link></li>
                    <li><Link to='/contact-us'>Contact <ContactMailOutlined /></Link></li>
                    <li><Link to='/login'>Log In <TransitEnterexitOutlined/></Link></li>
                    <li><Link to='/sign-up'>Sign Up <PersonAddOutlined /></Link></li>
                </ul>
                <div className='landing-menu-button'>
                    <Menu fontSize='large' onClick={() => handleLandingMenu()}/>
                </div>
            </nav>
            <img src={LandingHeaderImage} className="back-header-image"/>
            <div className="top-text d-flex justify-content-center flex-column text-center">
                <div>    
                    <span className='top-text-slogan'>Be Adventurous</span>
                    <Link to='/'>        
                        <h1 className="landing-page-logo">
                            Travelers
                        </h1>
                    </Link>
                    <p>The Inspirational Adventures Across The World</p>
                </div>     
            </div>
        </div>
    );
}
 
export default LandingHeader;