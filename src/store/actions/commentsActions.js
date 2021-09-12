import * as actionsTypes from './actionsTypes';

// Comments Actions

export const commentsInit = comments => (
    {
        type: actionsTypes.INITIALIZE_COMMENTS,
        comments,
    }
)

export const addComment = comment => (
    {
        type: actionsTypes.ADD_COMMENT,
        comment,
    }
)

export const removeComment = id => (
    {
        type: actionsTypes.REMOVE_COMMENT,
        id,
    }
);

export const deleteComment = id => (
    {
        type: actionsTypes.DELETE_COMMENT,
        id,
    }
);

export const acceptComment = id => ({
    type: actionsTypes.ACCEPT_COMMENT,
    id
});