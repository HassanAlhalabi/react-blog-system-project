import React from 'react';
import LatestArticlesImage1 from '../imgs/landing/latestArticles1.png';
import LatestArticlesImage2 from '../imgs/landing/latestArticles2.png';
import LatestArticlesImage3 from '../imgs/landing/latestArticles3.png';

const LandingLatestArticles = () => {
    return (
        <div className="landing-latest-articles">
            <div className="container">
                <div className="text-center mb-5">
                    <h2 className="d-inline-block">Latest Artilces</h2>
                </div>
                <div className="row justify-content-center justify-content-lg-between">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="landing-article-card mb-5">
                            <div className="landing-article-card-image">
                                <div className="card-image-shadow"></div>
                                <img src={LatestArticlesImage1} />
                            </div>
                            <div className="landing-card-content">
                                <div>
                                    <h5>Lorem Ipsum Dolor sit</h5>
                                </div>
                                <div>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur pisicing elit, sed do t, consectetur pisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.
                                    </p>
                                </div>
                                <div>
                                    <a className="landing-card-read-more">Read More &nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="landing-article-card middle-card mb-5">
                            <div className="landing-article-card-image">
                                <div className="card-image-shadow"></div>
                                <div>
                                    <img src={LatestArticlesImage2} />
                                </div>
                            </div>
                            <div className="landing-card-content">
                                <div>
                                    <h5>Lorem Ipsum Dolor sit</h5>
                                </div>
                                <div>
                                    <p>
                                        Lullamco laboris nisi ut aliquip ex ea commodo consequat. Dui aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.
                                    </p>
                                </div>
                                <div>
                                    <a className="landing-card-read-more">Read More &nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4">
                        <div className="landing-article-card mb-5">
                            <div className="landing-article-card-image">
                                <div className="card-image-shadow"></div>
                                <div>
                                    <img src={LatestArticlesImage3} />
                                </div>
                            </div>
                            <div className="landing-card-content">
                                <div>
                                    <h5>Lorem Ipsum Dolor sit</h5>
                                </div>
                                <div>
                                    <p>
                                        Lin voluptate velit esse cillum dolore eu fugiat nulla pariat cillum dolore eu fugiat nulla pariatur. Excepteur .
                                    </p>
                                </div>
                                <div>
                                    <a className="landing-card-read-more">Read More &nbsp;</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default LandingLatestArticles;