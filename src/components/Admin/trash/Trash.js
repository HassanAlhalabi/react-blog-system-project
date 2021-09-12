import React from 'react';
import { connect } from 'react-redux';
import { emptyTrash } from '../../../store/actions/actions';
import TrashCane from './TrashCane';
import Button from '@material-ui/core/Button';
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded';
import { showFlashMessage } from '../../layout/FlashMessage';

const Trash = ({articles,users,comments,emptyTrash}) => {

    const handleEmptyTrash = () => {
        const emptyTrashConfirm = window.confirm('Are You Sure You Want to Empty Trash!');
        if(emptyTrashConfirm) {
            emptyTrash();
            showFlashMessage('Trash Has Been Emptied Successfully');
        }
    };

    return ( 
        <div className='trash'>
            <div className='d-flex justify-content-center justify-content-sm-start flex-wrap'>
                <TrashCane 
                    title='Articles' 
                    link='/admin-panel/trash/articles' 
                    itemsNumber={articles.length}   
                />
                <TrashCane 
                    title='Comments' 
                    link='/admin-panel/trash/comments' 
                    itemsNumber={comments.length} 
                />
                <TrashCane 
                    title='Users' 
                    link='/admin-panel/trash/users' 
                    itemsNumber={users.length} 
                />
            </div>
            <div className='empty-trash text-center text-sm-left'>
                <Button 
                    className='m-4'
                    color='secondary' 
                    variant='contained'
                    size='large' 
                    startIcon={<DeleteForeverRounded />}
                    onClick={handleEmptyTrash} 
                    disabled={users.length <= 0 && articles.length <= 0}
                >
                    Empty Trash
                </Button>
            </div>
        </div>    
     );
}

const mapStateToProps = state => {
    return({
        articles: state.articles.filter(article => article.inTrash === true),
        users: state.users.filter(user => user.inTrash === true),
        comments: state.comments.filter(comment => comment.inTrash === true),
    })
}
 
const mapDispatchToProps = dispatch => {
    return({
        emptyTrash: () => dispatch(emptyTrash())
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(Trash);