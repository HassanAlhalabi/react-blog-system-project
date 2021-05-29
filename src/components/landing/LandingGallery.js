import React from 'react';
import GalleryImage1 from '../imgs/landing/gallery1.png';
import GalleryImage2 from '../imgs/landing/gallery2.png';
import GalleryImage3 from '../imgs/landing/gallery3.png';
import GalleryImage4 from '../imgs/landing/gallery4.png';
import GalleryImage5 from '../imgs/landing/gallery5.png';
import GalleryImage6 from '../imgs/landing/gallery6.png';
import GalleryImage7 from '../imgs/landing/gallery7.png';

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
                            <a href='#'><img src={GalleryImage1} className="gallery-image-1 pb-4"/></a>
                            <a href='#'><img src={GalleryImage2} className="gallery-image-2 mb-4"/></a>
                        </div>
                        <div className="col-12 col-md-6 col-lg-8 text-left">
                            <div className='d-flex flex-wrap justify-content-center justify-content-md-start'>
                                <a href='#'><img src={GalleryImage3} className="mr-4 mb-4 gallery-image-3"/></a>
                                <a href='#' className="mb-4 mt-auto"><img src={GalleryImage4} className="gallery-image-4"/></a>
                            </div>
                            <div className="mb-4">
                                <a href='#'><img src={GalleryImage5} className="gallery-image-5"/></a>
                            </div>
                            <div className="d-flex flex-wrap justify-content-center justify-content-md-start">
                                <a href='#'><img src={GalleryImage6} className="mr-md-4 mb-4 gallery-image-6"/></a>
                                <a href='#'><img src={GalleryImage7} className="gallery-image-7"/></a>
                            </div>
                        </div>
                    </div>
                    <div className="text-center pt-5 pb-5">
                        <a href="#" className="landing-button">Read More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LandingGallery;