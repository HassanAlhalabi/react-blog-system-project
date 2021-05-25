import React, { useState }  from 'react';
import AddUserFormTemplate  from './AddUserFormTemplate';
import Typography           from '@material-ui/core/Typography';
import { connect }          from 'react-redux';
import { addUser }          from '../../../store/actions/actions';
import { process }          from 'uniqid';
import { useHistory }       from 'react-router-dom';
import { showFlashMessage } from '../../layout/FlashMessage';

const AddUserForm = ({addNewUser}) => {
    
    const [inputs,setInputs] = useState({
        firstName:       '',
        lastName:        '',
        email:           '',
        password:        '',
        confirmPassword: '',
        role:            ''
    });
    const [firstNameError,setFirstNameError] = useState('');
    const [lastNameError,setLastNameError]   = useState('');
    const [emailError,setEmailError]         = useState('');
    const [passwordError,setPasswordError]   = useState('');
    const [confirmPasswordError,setConfirmPasswordError] = useState('');
    const [roleError,setRoleError] = useState('');
    const [errorMessage,setErrorMessage]     = useState(''); 
    const history = useHistory();
    const handleChange = e => setInputs({
        ...inputs,
        [e.target.name]: e.target.value
    });

    const handleFormSubmit = e => {
        e.preventDefault();
        // Check for Errors:
        if(inputs.firstName === '' || inputs.firstName === undefined) {
            setFirstNameError('First Name is Required!');
            setErrorMessage('First Name is Required!');
        } else if (inputs.lastName === '' || inputs.lastName === undefined) {
            setLastNameError('Last Name is Required!');
            setErrorMessage('Last Name is Required!');
        } else if (inputs.email === '' || inputs.email === undefined) {
            setEmailError('Email is Required!');
            setErrorMessage('Email Name is Required!');
        } else if (inputs.email.indexOf('@') === -1) {
            setEmailError('Email Must Contains @');
            setErrorMessage('Email Must Contains @');
        } else if (inputs.password === '' || inputs.password === undefined) {
            setPasswordError('Password is Required!');
            setErrorMessage('Password is Required!');
        } else if (inputs.confirmPassword === '' || inputs.confirmPassword === undefined) {
            setConfirmPasswordError('Please Confirm Your Password!');
            setErrorMessage('Please Confirm Your Password!');
        } else if (inputs.password !== inputs.confirmPassword) {
            setPasswordError('Passwords Not Matched!');
            setConfirmPasswordError('Passwords Not Matched!');
            setErrorMessage('Passwords Not Matched!');
        } else if (inputs.role === '' || inputs.role === undefined) {
            setRoleError('Please !');
            setErrorMessage('User Role is Required!');
        } else {
            setErrorMessage('');
            setFirstNameError('');
            setLastNameError('');
            setEmailError('');
            setPasswordError('');
            setConfirmPasswordError('');
            // Create User Object
            const user = {
                id:        process(),
                firstName: inputs.firstName,
                lastName:  inputs.lastName,
                email:     inputs.email,
                password:  inputs.password,
                role:      inputs.role,
                inTrash:   false
            }
            // Add user with redux
            addNewUser(user);
            showFlashMessage('New User Has Been Added Successfully!');
            history.push('/admin-panel/users');
        }
    }

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
                            confirmPasswordError,
                            errorMessage,
                            handleFormSubmit
                        }} />
                    </div>
                </div>     
            </div>    
        </div>
    );
}
 
const mapDispatchToProps = dispatch => {
    return({
        addNewUser: user => dispatch(addUser(user))
    })
}

export default connect(null,mapDispatchToProps)(AddUserForm);