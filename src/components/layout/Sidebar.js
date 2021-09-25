import React from 'react';
import Typography from '@material-ui/core/Typography';
import LatestArticles from './LatestArticles';

const Sidebar = () => 

        <div className='sidebar h-100'>
            <div className='p-2 p-md-4'>
                <div className='sidebar-latest-articles'>
                    <LatestArticles />
                </div>
            </div>
        </div>

export default Sidebar;