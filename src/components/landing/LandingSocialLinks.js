import React from 'react';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import Twitter from '@material-ui/icons/Twitter';
import Pinterest from '@material-ui/icons/Pinterest';

const LandingSocialLinks = () => {
    return ( 
        <div class="landing-social-links">
            <div class="text-center">
                <a href="#" class="social-button">
                    <Facebook />
                </a>
                <a href="#" class="social-button">
                    <Twitter />
                </a>
                <a href="#" class="social-button">
                    <Instagram />
                </a>
                <a href="#" class="social-button">
                    <Pinterest />
                </a>
            </div>
        </div>
    );
}
 
export default LandingSocialLinks;