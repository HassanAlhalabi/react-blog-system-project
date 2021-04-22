import React , {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import PersonAdd from '@material-ui/icons/PersonAdd'
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'

const SignUpForm = () => {
    
    const [inputs , setInputs] = useState({
        f_name:   null,
        l_name:   null,
        email:    null,
        password: null,
    })
    
    const handleFormChange = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const handleSignup = e => {
        e.preventDefault();
        console.log('sign up ....');
    }

    return ( 
        <div className='signup'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-10 col-md-6 m-auto'>
                        <form className='signup-form mt-5'>
                            <Typography variant='h4' align='center'>
                                Sign Up
                            </Typography>
                            <div className='row'>
                                <div className='form-group  col-12 col-sm-6'>
                                    <label htmlFor='f_name'>First Name:</label>
                                    <input
                                        type='f_name' 
                                        className='form-control'
                                        name='f_name'
                                        id='f_name'
                                        onChange={handleFormChange}
                                        value={inputs.f_name}
                                        />
                                </div>        
                                <div className='form-group  col-12 col-sm-6'>        
                                    <label htmlFor='l_name'>Last Name:</label>
                                    <input
                                        type='l_name' 
                                        className='form-control'
                                        name='l_name'
                                        id='l_name'
                                        onChange={handleFormChange}
                                        value={inputs.l_name}
                                        />
                                </div>
                            </div>    
                            <div className='form-group'>
                                <label htmlFor='email'>Email:</label>
                                <input
                                    type='email' 
                                    className='form-control'
                                    name='email'
                                    id='email'
                                    onChange={handleFormChange}
                                    value={inputs.email}
                                    />
                            </div>
                            <div className='form-group'>
                                <label htmlFor='password'>Password:</label>
                                <input
                                    type='password' 
                                    className='form-control'
                                    name='password'
                                    id='password'
                                    onChange={handleFormChange}
                                    value={inputs.password}
                                    />
                            </div>
                            <div className='d-flex justify-content-center'>
                                <Button
                                    variant='contained' 
                                    color='primary'
                                    type='submit'
                                    size='large'
                                    startIcon={<PersonAdd />}
                                    onClick={handleSignup}
                                >
                                    Sign Up
                                </Button>
                            </div>    
                            <div className='divider signin-divider'></div>
                            <Typography variant='h5' align='center'>
                                Continue With
                            </Typography>
                            <div className='d-flex justify-content-center'>
                            <ButtonGroup>
                                <Button
                                    variant='contained'
                                    color='primary' 
                                    size='large'
                                    startIcon={<Facebook />}>
                                        Facebook
                                    </Button>
                                <Button
                                    variant='contained'
                                    color='primary' 
                                    size='large'
                                    startIcon={<Twitter />}>
                                        Twitter
                                    </Button>
                            </ButtonGroup>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpForm;