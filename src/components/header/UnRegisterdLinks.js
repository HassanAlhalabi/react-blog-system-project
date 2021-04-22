import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PersonAdd from '@material-ui/icons/PersonAdd';
import { Link } from 'react-router-dom';

const UnRegisteredLinks = () => {
    return ( 
        <div className='unregistered-links d-inline-block'>
            <ButtonGroup>
                <Button
                    variant='contained'
                    color='primary' 
                    size='medium'
                    startIcon={<ExitToAppIcon />}>
                        <Link to='signin'>Sign In</Link>
                    </Button>
                <Button
                    variant='contained'
                    color='primary' 
                    size='medium'
                    startIcon={<PersonAdd />}>
                        <Link to='signup'>Sign Up</Link>
                    </Button>
            </ButtonGroup>
        </div>
     );
}
 
export default UnRegisteredLinks;