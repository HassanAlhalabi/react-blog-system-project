import { articlesInit } from '../actions/actions';
import * as actionsTypes from '../actions/actionsTypes';

const usersList = [
    {
        id: '1',
        firstName: 'Hassan',
        lastName: 'Alhalabi',
        email: 'hassanalhalabi1997@outlook.com',
        password: '1234',
        role: 'owner',
        inTrash: false
    },
    {
        id: '2',
        firstName: 'Sami',
        lastName: 'Alhalabi',
        email: 'samialhalabi2007@outlook.com',
        password: '1234',
        role: 'editor',
        inTrash: false
    },
    {
        id: '3',
        firstName: 'Gerald',
        lastName: 'Rodolf',
        email: 'geraldrodolf1900@outlook.com',
        password: '1234',
        role: 'admin',
        inTrash: false
    },
    {
        id: '4',
        firstName: 'Khaled',
        lastName: 'Alomari',
        email: 'khaleda;omari@outlook.com',
        password: '1234',
        role: 'client',
        inTrash: false
    },
    {
        id: '5',
        firstName: 'Sami',
        lastName: 'Alhalabi',
        email: 'samialhalabi2007@outlook.com',
        password: '1234',
        role: 'client',
        inTrash: false
    },
    {
        id: '6',
        firstName: 'Sami',
        lastName: 'Alhalabi',
        email: 'samialhalabi2007@outlook.com',
        password: '1234',
        role: 'admin',
        inTrash: true
    },
]

export const usersReducer = (users = usersList , action) => {
    switch (action.type) {
        case actionsTypes.ADD_USER :
            return [
                    ...users,
                    action.user
                ];
        case actionsTypes.REMOVE_USER :
            return users.map(user => {
                if(user.id === action.id) {
                    user.inTrash = true;
                }
                return user;
            });        
        case actionsTypes.DELETE_USER:
            return users.filter(user => user.id !== action.id);
        case actionsTypes.UPDATE_USER :
            return [
                    ...users,
                    action.user
                ];
        case actionsTypes.SUSPEND_USER :
            return [
                    ...users,
                    action.user
                ];
        // Empty Trash    
        case actionsTypes.EMPTY_TRASH:
            console.log('Trash Deleted');
            return users.filter(user => user.inTrash === false);        
        default:
            return users;
    }
}