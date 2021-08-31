import React , {Component} from 'react';
import Stats from './Stats';
import WebsiteActivity from './WebsiteActivity';
import LatestArticels from './LatestArticles';

class Dashboard extends Component {
    
    render() {
        return(
            <div className='dashboard'>
                <div className='dashboard-wrapper'>
                    <div className='container-fluid'>    
                        <Stats />
                        <WebsiteActivity />
                        <div>
                            <LatestArticels />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;