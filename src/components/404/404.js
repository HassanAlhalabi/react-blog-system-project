import React from 'react';
import ErrorSharp from '@material-ui/icons/ErrorSharp';

const NotFound404 = () => {
    return ( 
        <div className='page-not-found'>
            <div className='container'>
                <p>Ooops!!! Page not Found</p>
                <p>Please Check the URL of the Required Page</p>
                <p><ErrorSharp /></p>
            </div>
        </div>
     );
}
 
export default NotFound404;