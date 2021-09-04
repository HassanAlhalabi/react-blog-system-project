import React , {Component} from 'react';
import Stats from './Stats';
import WebsiteTraffic from './WebsiteTraffic';
import LatestArticels from './LatestArticles';
import LatestComments from './LatestComments';

class Dashboard extends Component {
    
    render() {
        return(
            <div className='dashboard'>
                <div className='dashboard-wrapper'>
                    <div className='container-fluid'>    
                        <Stats />
                        <WebsiteTraffic />
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <LatestArticels />
                            </div>
                            <div className='col-12 col-md-6'>
                                <LatestComments />
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Dashboard;