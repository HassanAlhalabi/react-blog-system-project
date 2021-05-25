import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Alert from '@material-ui/lab/Alert';

const UserDetails = ({users}) => {

    const id = useParams('id').id;
    const user = users.filter(user => user.id === id && user.role !== 'client' )[0]

    return (
        <div className='user-details'>
            {user !== undefined ?
                <div>
                    <Typography variant='h3'>
                        {user.firstName} {user.lastName} <span className={`user-role user-${user.role}`}>{user.role}</span>
                    </Typography>
                    <Typography variant='h4'>{user.email}</Typography>
                </div>    
                :
                <Alert severity='info'>No Such User!</Alert>
            }
        </div>
    );
}

const mapStateToProps = state => {
    return({
        users: state.users
    })
}
 
export default connect(mapStateToProps)(UserDetails);