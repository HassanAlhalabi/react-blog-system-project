import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';


const RegisteredLinks = () => {
    return ( 
        <div className='registered-links d-flex align-items-center'>
            <div className='user-name'>
                <Typography
                    variant='h6'
                >
                    User Name
                </Typography>
            </div>
            <div className='user-avatar'>
                <Avatar />
            </div>
        </div>
     );
}
 
export default RegisteredLinks;