import React from 'react';
import Typography from '@material-ui/core/Typography';

const PageHeader = ({title}) => {
    return ( 
        <Typography
            variant='h3' 
            component='h2' 
            align='center' 
            className='page-header'>
            {title}
        </Typography>
    );
}
 
export default PageHeader;