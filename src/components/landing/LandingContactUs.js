import React from 'react';
import LandingContactUsImage from '../imgs/landing/contactUsImage.png';

const LandingContactUs = () => {
    return ( 
        <div className="landing-contact-us">
            <div className="container">
                <div className="contact-us">
                    <div className="row">
                        <div className='col-12 col-md-7'>
                            <div className="contact-us-image">
                                <img src={LandingContactUsImage} className="img-fluid" />
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='contact-us-form'>
                                <h2>Contact</h2>
                                <form></form>
                                <a href="#" className="landing-button">
                                    send message
                                </a>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}
 
export default LandingContactUs;