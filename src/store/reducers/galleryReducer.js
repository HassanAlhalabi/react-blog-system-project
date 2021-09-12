import * as actionsTypes from '../actions/actionsTypes'

const photos = [];

export const galleryReducer = (state = photos , action) => {
    switch (action.type) {
        case actionsTypes.ADD_PHOTO:  
            console.log(state)
            return [
                ...state,
                action.url
            ]
        default:
            return state;  
    }
}