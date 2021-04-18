import React , {Component} from 'react';

import LatestArticels from './LatestArticles';

class Dashboard extends Component {
    
    render() {
        return(
            <div className='dashboard'>
                <div className='dashboard-wrapper'>
                    <div className='container-fluid'>    
                        <LatestArticels />
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;