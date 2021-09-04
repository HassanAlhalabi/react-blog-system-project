import React from 'react';
import {Route,Redirect} from 'react-router-dom';

const PrivateRoute = ({children, ...rest}) => {
    return(
        <Route
            {...rest}
            render={({location}) => {
                return (
                    localStorage.getItem('ACCESS_TOKEN_NAME') 
                    ?
                        (children)
                    :
                        (
                            <Redirect 
                                to={{
                                    pathname:'/login',
                                    state: {from: location}
                                }}
                            />
                        )
                )
            }}
        />
    )
}

export default PrivateRoute;