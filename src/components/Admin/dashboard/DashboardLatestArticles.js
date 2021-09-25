import React from 'react';
import LatestArticles from '../../layout/LatestArticles';

const DashboardLatestArticles = ({articles,articlesLoading}) => {

    return(
        <div className='dashboard-latest-articles'>
            <LatestArticles />  
        </div>
    );
}

export default DashboardLatestArticles;