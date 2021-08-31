import React from 'react';
import Stat from './Stat';
import { connect } from 'react-redux';
import PeopleIcon from '@material-ui/icons/People';
import DescriptionIcon from '@material-ui/icons/Description';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import CommentIcon from '@material-ui/icons/Comment';

const Stats = ({articles}) => {

    return(
        <div className='dashboard-stats'>
            <Stat 
                statTitle='Today Visitors' 
                statNumber={22} 
                link=' '
                icon={<PeopleIcon fontSize='large'/>}
            /> 
            <Stat 
                statTitle='Articles' 
                statNumber={articles.length} 
                link='/all-articles'
                icon={<DescriptionIcon fontSize='large'/>}
            /> 
            <Stat 
                statTitle='Photos' 
                statNumber={178} 
                link=' '
                icon={<PhotoLibraryIcon fontSize='large'/>}    
            />
            <Stat 
                statTitle='Comments' 
                statNumber={47} 
                link=' '
                icon={<CommentIcon fontSize='large'/>}
            />    
        </div>
    )
}

const mapStateToProps = state => {
    return(
        {
            articles: state.articles
        }
    )
}

export default connect(mapStateToProps,null)(Stats);