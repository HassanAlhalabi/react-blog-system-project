import * as actionsTypes from '../actions/actionsTypes';

const usersList = [
    {
        id: 1,
        fName: 'Hassan',
        lName: 'Alhalabi',
        email: 'hassanalhalabi1997@outlook.com',
        password: '1234',
        status: 'admin'
    },
    {
        id: 2,
        fName: 'Sami',
        lName: 'Alhalabi',
        email: 'samialhalabi2007@outlook.com',
        password: '1234',
        status: 'editor'
    },
    {
        id: 3,
        fName: 'Khaled',
        lName: 'Alomari',
        email: 'khaleda;omari@outlook.com',
        password: '1234',
        status: 'client'
    },
    {
        id: 4,
        fName: 'Sami',
        lName: 'Alhalabi',
        email: 'samialhalabi2007@outlook.com',
        password: '1234',
        status: 'client'
    },
]

export const usersReducer = (users = usersList , action) => {
    switch (action.type) {
        case actionsTypes.ADD_USER :
            console.log('new User tobe added')
            return [
                    ...users,
                    action.user
                ]
        case actionsTypes.DELETE_USER :
            return users.filter(user => user.id !== action.id)
        case actionsTypes.UPDATE_USER :
            return [
                    ...users,
                    action.user
                ]
        case actionsTypes.SUSPEND_USER :
            return [
                    ...users,
                    action.user
                ]
        default:
            return users
    }
}