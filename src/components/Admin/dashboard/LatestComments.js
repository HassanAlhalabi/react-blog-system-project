import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert'; 

const LatestComments = ({comments}) => {

    const latestComments = comments.slice(-4).reverse();

    return(
        <div className='dashboard-latest-comments'>
            <h3 className='flag mb-0'>Latest Comments</h3>
            <div className='p-2'>    
                {
                    latestComments.length === 0 ?
                        <Alert severity='info'>There is no Comments</Alert>
                    : latestComments.map(comment => {
                        return(
                            <Link to={`comments/${comment.id}`}>
                                <p className='latest-comment m-0 pt-2 pb-2'>
                                    <span className='comment-title pr-2 pr-sm-5'>{comment.content}</span>
                                    <span className='comment-date'>{comment.date}</span>
                                </p>
                            </Link>     
                        );
                    })
                }
            </div>   
        </div>
    );
}

const mapStateToProps = state => {
    return({
        comments: state.comments
    });
}

export default connect(mapStateToProps,null)(LatestComments);