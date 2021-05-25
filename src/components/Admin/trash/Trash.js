import React from 'react';
import { connect } from 'react-redux';
import TrashCane from './TrashCane';
import Button from '@material-ui/core/Button';
import DeleteForeverRounded from '@material-ui/icons/DeleteForeverRounded'

const Trash = ({articles,users}) => {

    const handleEmptyTrash = () => console.log('Empty Trash')

    return ( 
        <div className='trash'>
            <div className='d-flex flex-wrap'>
                <TrashCane 
                    title='Articles' 
                    link='/admin-panel/trash/articles' 
                    itemsNumber={articles.length}   
                />
                <TrashCane 
                    title='Users' 
                    link='/admin-panel/trash/users' 
                    itemsNumber={users.length} 
                />
            </div>
            <div className='empty-trash'>
                <Button 
                    color='secondary' 
                    variant='contained'
                    size='large' 
                    startIcon={<DeleteForeverRounded />}
                    onClick={handleEmptyTrash} 
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
        users: state.users.filter(user => user.inTrash === true)
    })
}
 
export default connect(mapStateToProps)(Trash);