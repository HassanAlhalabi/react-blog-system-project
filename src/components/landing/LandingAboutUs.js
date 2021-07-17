import React from 'react';
import LandingAboutUsImage from '../imgs/landing/LandingAboutUsImage.png';
import { Link } from 'react-router-dom';

const LandingAboutUs = () => {
    return ( 
        <div className="landing-about-us">
            <div className="container">
                <div className="about-us">
                    <div className="row">
                        <div className='col-12 col-lg-5'>
                            <div className='about-us-text'>
                                <h2>About Us</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                                    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                </p>
                                <Link to='/about-us' className="landing-button">
                                    Read More
                                </Link>
                            </div>
                        </div>
                        <div className='col-12 col-lg-7'>
                            <div className="about-us-image">
                                <img src={LandingAboutUsImage} className="img-fluid" alt=''/>
                            </div>
                        </div>
                    </div>    
                </div>
            </div>     
        </div>
    );
}
 
export default LandingAboutUs;