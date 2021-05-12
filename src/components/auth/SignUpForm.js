import React , {useState} from 'react';
import PageHeader from '../../components/layout/PageHeader';
import TextField from '@material-ui/core/TextField';
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
        <div className='signup pt-5 pb-5'>
            <div className='container'>
                <PageHeader title='Sign Up' />
                <div className='row'>
                    <div className='col-12 col-sm-10 col-md-6 m-auto'>
                        <form className='signup-form'>
                            <div className=''>
                                <TextField
                                    label='First Name:'
                                    variant='filled'
                                    type='f_name' 
                                    className='w-100 mb-3'
                                    name='f_name'
                                    id='f_name'
                                    onChange={handleFormChange}
                                    value={inputs.f_name} />     
                                <TextField
                                    label='Last Name:'
                                    variant='filled'
                                    type='l_name' 
                                    className='w-100 mb-3'
                                    name='l_name'
                                    id='l_name'
                                    onChange={handleFormChange}
                                    value={inputs.l_name} /> 
                            </div>    
                            <TextField
                                label='Email:'
                                variant='filled'
                                type='email' 
                                className='w-100 mb-3'
                                name='email'
                                id='email'
                                onChange={handleFormChange}
                                value={inputs.email} />
                            <TextField
                                label='Password:'
                                variant='filled'
                                type='password' 
                                className='w-100 mb-3'
                                name='password'
                                id='password'
                                onChange={handleFormChange}
                                value={inputs.password} />
                            <div className='d-flex'>
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
                            {/* <div className='divider signin-divider'></div>
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
                            </div>     */}
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpForm;