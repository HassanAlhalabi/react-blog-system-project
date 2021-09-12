import React from 'react';
import PageHeader from '../../layout/PageHeader';
import { connect } from 'react-redux';
import Alert from '@material-ui/lab/Alert';
import Comment from './Comment';
import { useParams , useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { removeComment } from '../../../store/actions/commentsActions';
import { showFlashMessage } from '../../layout/FlashMessage';

const Comments = ({comments, removeComment}) => {
    
    const handleCommentRemove = index => {   
        const deleteConfirmation = window.confirm('Are You Sure You Want to Remove Comment to Trash!!');   
        if(deleteConfirmation){
            removeComment(index);
            showFlashMessage('Comment Has Been Removed to Trash')
        }
    }

    let page = useParams('page').page;
    page = page === undefined ? 1 : page * 1 ;
    
    const pageSize = 10;
   
    const commentsList = comments.slice( (page * pageSize - pageSize) , (pageSize * page) ).filter(comment => comment.inTrash === false);

    const history = useHistory();

    const handlePagination = (event, value) => {
        history.push(`/admin-panel/all-articles/page/${value}`)
    };

    console.log(commentsList)

    return(
        <div className='admin-comments'>
            <div className='container'>
                <PageHeader title='Comments' />

                <div>
                    {
                        commentsList.length === 0 ?
                            <Alert severity='info'>There is no Comments</Alert>
                        : commentsList.map(comment => 
                            <Comment
                                commentProps={comment}
                                handleCommentRemove={(e) => handleCommentRemove(comment.id)}
                            /> )
                    }
                </div>     

                {
                    commentsList.length >= pageSize &&
                    <div className='pagination d-flex justify-content-center'> 
                        <Pagination 
                            page={page} 
                            onChange={handlePagination} 
                            count={Math.ceil(comments.length/10)} 
                            size='large'/>
                    </div>
                }

            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return({
        comments: state.comments
    })
}

const mapDispatchToProps = dispatch => {
    return({
        removeComment: id => dispatch(removeComment(id)) 
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Comments);