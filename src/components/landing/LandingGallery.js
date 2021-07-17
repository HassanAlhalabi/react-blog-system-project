import React from 'react';
import GalleryImage1 from '../imgs/landing/gallery1.png';
import GalleryImage2 from '../imgs/landing/gallery2.png';
import GalleryImage3 from '../imgs/landing/gallery3.png';
import GalleryImage4 from '../imgs/landing/gallery4.png';
import GalleryImage5 from '../imgs/landing/gallery5.png';
import GalleryImage6 from '../imgs/landing/gallery6.png';
import GalleryImage7 from '../imgs/landing/gallery7.png';
import { Link } from 'react-router-dom';

const LandingGallery = () => {  
    return ( 
        <div className="landing-gallery">
            <div className="container">
                <div className="mb-5">
                    <h2>Gallery</h2>
                </div>
                <div className="gallery-areas">
                    <div className="row">
                        <div className="col-12 col-md-6 col-lg-4 pt-5 text-center text-md-right">
                            <Link to='/gallery'><img src={GalleryImage1} className="gallery-image-1 pb-4" alt=''/></Link>
                            <Link to='/gallery'><img src={GalleryImage2} className="gallery-image-2 mb-4" alt=''/></Link>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 text-left">
                            <div className='d-flex flex-wrap justify-content-center justify-content-md-start'>
                                <Link to='/gallery'><img src={GalleryImage3} className="mr-4 mb-4 gallery-image-3" alt=''/></Link>
                                <Link to='/gallery' className="mb-4 mt-auto"><img src={GalleryImage4} className="gallery-image-4" alt=''/></Link>
                            </div>
                            <div className="mb-4">
                                <Link to='/gallery'><img src={GalleryImage5} className="gallery-image-5" alt=''/></Link>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                <Link to='/gallery'><img src={GalleryImage6} className="mr-md-4 mb-4 gallery-image-6" alt=''/></Link>
                                <Link to='/gallery'><img src={GalleryImage7} className="gallery-image-7" alt=''/></Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-5 pb-5">
                        <Link to='/gallery' className="landing-button">Read More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LandingGallery;