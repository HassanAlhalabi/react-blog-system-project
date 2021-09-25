import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Pinterest from '@material-ui/icons/Pinterest';

const LandingSocialLinks = () => {
    return ( 
        <div className="landing-social-links">
            <div className="text-center">
                <a href="facebook.com/hassan1997" className="social-button">
                    <Facebook />
                </a>
                <a href="twitter.com" className="social-button">
                    <Twitter />
                </a>
                <a href="instagram.com" className="social-button">
                    <Instagram />
                </a>
                <a href="pinterest.com" className="social-button">
                    <Pinterest />
                </a>
            </div>
        </div>
    );
}
 
export default LandingSocialLinks;