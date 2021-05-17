import React , {useState} from 'react';
import PageHeader from '../../components/layout/PageHeader';
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';

const SignInForm = () => {
    
    const [inputs , setInputs] = useState({
        email: null,
        password: null,
    })
    
    const handleFormChange = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const handleSignin = e => {
        e.preventDefault();
        console.log('sing in ....')
    }
    

    return ( 
        <div className='signin pt-5 pb-5'>
            <div className='container mb-5'>
                <PageHeader title='Sign In' />
                <div className='row'>
                    <div className='col-12 col-sm-10 col-md-6 m-auto'>
                        <form className='signin-form'>
                            <TextField 
                                label='Email:'
                                variant='filled'
                                type='email' 
                                className='w-100 mb-3'
                                name='email'
                                id='email'
                                onChange={handleFormChange}
                                value={inputs.email}
                                autoComplete='off'
                            />
                            <TextField 
                                label='Password:'
                                variant='filled'
                                type='password' 
                                className='w-100 mb-3'
                                name='password'
                                id='password'
                                onChange={handleFormChange}
                                value={inputs.password}
                                autoComplete='off'
                            />
                            <div className='d-flex'>
                                <Button
                                    variant='contained' 
                                    color='primary'
                                    type='submit'
                                    size='large'
                                    startIcon={<ExitToAppIcon/>}
                                    onClick={handleSignin}>
                                    Sign In
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
                                        type='submit'
                                        size='large'
                                        startIcon={<Facebook />}
                                    >
                                        Facebook
                                    </Button>
                                    <Button
                                        variant='contained' 
                                        color='primary'
                                        type='submit'
                                        size='large'
                                        startIcon={<Twitter />}
                                    >
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
 
export default SignInForm;