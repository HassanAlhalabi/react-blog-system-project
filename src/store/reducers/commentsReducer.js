import * as actionsTypes from '../actions/actionsTypes';

const comments = [
    {
        id: 1,
        userId: '124323434',
        content: 'Amazing Great Journey',
        date: '1/2/2020',
        isPublished: true,
        inTrash: false
    }
];

const commentsReducer = (state = comments , action) => {
    switch (action.type) {
        case actionsTypes.ADD_COMMENT:
            return([
                ...state,
                action.comment
            ]);
        case actionsTypes.REMOVE_COMMENT:
            return state.map(comment => {
                if(comment.id === action.id){
                    comment.inTrash = true;
                }
                return comment;
            });
        case actionsTypes.DELETE_COMMENT:
            return([
                ...state,
                action.comment
            ]);
        case actionsTypes.ACCEPT_COMMENT:
            return([
                ...state,
                action.comment
            ]);
        default:
            return state;             
    }
}

export default commentsReducer;