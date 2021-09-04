import React from 'react';
import PageHeader from './layout/PageHeader';
import AboutUsImg from './imgs/who we are travelers.png';
import {Link} from 'react-router-dom';

const AboutUs = () => {
    return (
        <div className='container'> 
            <div className='about-us pt-5 pb-5'>
                <PageHeader title='Who We Are?' />
                <div className='row'>
                    <div className='col-12 col-md-6 d-flex justify-content-between flex-column mb-3'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
                        <button className='landing-button m-0'>
                            <Link to='/contact-us'>Contact US</Link>
                        </button>    
                    </div>
                    <div className='col-12 col-md-6 mb-3'>
                        <img src={AboutUsImg} alt='travel who we are' className='img-fluid'/>
                    </div>
                </div>
            </div>
        </div>     
    );
}
 
export default AboutUs;