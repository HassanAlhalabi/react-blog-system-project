import React, { useState } from 'react';
import AddUserFormTemplate from './AddUserFormTemplate';
import Typography from '@material-ui/core/Typography';

const AddUserForm = () => {
    
    const [inputs,setInputs] = useState({
        firstName:       '',
        lastName:        '',
        email:           '',
        password:        '',
        confirmPassword: ''
    })
    const [firstNameError,setFirstNameError] = useState('');
    const [lastNameError,setLastNameError]   = useState('');
    const [emailError,setEmailError]         = useState('');
    const [passwordError,setpasswordError]   = useState('');
    const [confirmPasswordError,setConfirmPasswordError] = useState('');

    const handleChange = e => setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    }) 

    return ( 
        <div className='add-form pt-4 pb-4'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-12 col-sm-6 m-auto'>
                        <Typography variant='h4'>
                            Add a new user
                        </Typography>
                        <AddUserFormTemplate formTemplateProps={{
                            inputs,
                            handleChange,
                            firstNameError,
                            lastNameError,
                            emailError,
                            passwordError,
                            confirmPasswordError
                        }} />
                    </div>
                </div>     
            </div>    
        </div>
    );
}
 
export default AddUserForm;