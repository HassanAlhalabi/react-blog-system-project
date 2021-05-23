import React     from 'react';
import TextField from '@material-ui/core/TextField';
import Button    from '@material-ui/core/Button';
import Alert     from '@material-ui/lab/Alert';

const AddUserFormTemplate = ({formTemplateProps}) => {
    return ( 
        <form className='mt-3'>
            <TextField
                type='text' 
                name='firstName'
                variant='filled' 
                label='First Name' 
                className='w-100 mb-4'
                value={formTemplateProps.inputs.firstName}
                onChange={formTemplateProps.handleChange}
                autoComplete='off'
                required
                error={formTemplateProps.firstNameError} 
            />
            <TextField
                type='text' 
                name='lastName'
                variant='filled' 
                label='Last Name' 
                className='w-100 mb-4'
                value={formTemplateProps.inputs.lastName}
                onChange={formTemplateProps.handleChange}
                autoComplete='off'
                required
                error={formTemplateProps.lastNameError} 
            />
            <TextField
                type='email' 
                name='email'
                variant='filled' 
                label='Email' 
                className='w-100 mb-4'
                value={formTemplateProps.inputs.email}
                onChange={formTemplateProps.handleChange}
                autoComplete='off'
                required
                error={formTemplateProps.emailError} 
            />
            <TextField
                type='password' 
                name='password'
                variant='filled' 
                label='Password' 
                className='w-100 mb-4'
                value={formTemplateProps.inputs.password}
                onChange={formTemplateProps.handleChange}
                autoComplete='off'
                required
                error={formTemplateProps.passwordError} 
            />
            <TextField
                type='password' 
                name='confirmPassword'
                variant='filled' 
                label='Confirm Password' 
                className='w-100 mb-4'
                value={formTemplateProps.inputs.confirmPassword}
                onChange={formTemplateProps.handleChange}
                autoComplete='off'
                required
                error={formTemplateProps.confirmPasswordError} 
            /> 
            <div className='mb-3'>
                {formTemplateProps.errorMessage && 
                    <Alert 
                        variant='filled' 
                        severity='error' 
                        className='shaking-message'>
                            {formTemplateProps.errorMessage}
                    </Alert>}
            </div>
            <div className='text-center mb-5'>
                <Button 
                    type='submit' 
                    variant='contained' 
                    color='primary' 
                    size='large'
                    onClick={ event => formTemplateProps.handleFormSubmit(event) }
                    disabled={
                        (formTemplateProps.inputs.firstName === '' || formTemplateProps.inputs.firstName === undefined) 
                        ||
                        (formTemplateProps.inputs.lastName === '' || formTemplateProps.inputs.lastName === undefined) 
                        ||
                        (formTemplateProps.inputs.email === '' || formTemplateProps.inputs.email === undefined)
                        ||
                        (formTemplateProps.inputs.password === '' || formTemplateProps.inputs.password === undefined)
                        ||
                        (formTemplateProps.inputs.confirmPassword === '' || formTemplateProps.inputs.confirmPassword === undefined) }>
                        Add User
                </Button>   
            </div>
        </form>
     );
}
 
export default AddUserFormTemplate;