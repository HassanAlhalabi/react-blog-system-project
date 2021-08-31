import React from 'react';
import { Link } from 'react-router-dom';

const Stat = ({statTitle,statNumber,link,icon}) => {
    return(
        <div>
            <Link to={`/admin-panel${link}`}>
                <div className='dashboard-stat'>
                    <div>
                        {icon}
                        <div className='stat-title'>
                            <span>{statTitle}</span>
                        </div>
                    </div>
                    <div className='stat-number'>
                        <span>
                            {statNumber}
                        </span>
                    </div>
                </div>
            </Link> 
        </div>       
    )
}

export default Stat;