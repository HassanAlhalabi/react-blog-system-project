import React from 'react';
import LandingHeaderImage from '../imgs/landing/LandingHeaderImage.png';
import LandingHeaderImageFW from '../imgs/landing/LandingHeaderImageFW.png';

const LandingHeader = () => {
    return ( 
        <div className='landing-header position-relative'>
            <img src={LandingHeaderImage} className="back-header-image"/>
            <img src={LandingHeaderImageFW} className="forward-header-image"/>
            <div className="top-text d-flex justify-content-center flex-column text-center">
                <div>    
                    <span className='top-text-slogan'>lorem Ipsum</span>
                    <a href='#'>        
                        <h1 className="landing-page-logo">
                            Travel
                        </h1>
                    </a>
                    <p>The Inspirational Adventures Across The World</p>
                </div>     
            </div>
        </div>
    );
}
 
export default LandingHeader;