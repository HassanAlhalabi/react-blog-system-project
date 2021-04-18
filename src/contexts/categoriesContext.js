import React , { useState,createContext } from 'react'

export const CategoriesContext = createContext()

export const CategoriesProvider = props => {
    const categories = useState([
        {id: 0, value: 'Uncategorized', isChecked: true},
        {id: 1, value: 'Entertainment', isChecked: false},
        {id: 2, value: 'Sport', isChecked: false},
        {id: 3, value: 'Health', isChecked: false},
        {id: 4, value: 'Politics', isChecked: false},
        {id: 5, value: 'Culture', isChecked: false}
    ])
    return ( 
        <CategoriesContext.Provider value={categories}>
            {props.children}
        </CategoriesContext.Provider>
    )
}
