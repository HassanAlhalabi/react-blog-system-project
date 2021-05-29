import React from 'react';
import LandingHeader from './LandingHeader';
import LandingAboutUs from './LandingAboutUs';
import LandingLatestArticles from './LandingLatestArticles';
import LandingGallery from './LandingGallery';
import LandingContactUs from './LandingContactUs';
import LandingSocialLinks from './LandingSocialLinks';

const Landing = () =>

    <div className='home'>
        <LandingHeader />
        <div className='landing-page-content'>
            <LandingAboutUs />
            <LandingLatestArticles />
            <LandingGallery />
            <LandingContactUs />
            <LandingSocialLinks />
        </div>
    </div>

export default Landing;    