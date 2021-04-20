import React , {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Facebook from '@material-ui/icons/Facebook'
import Twitter from '@material-ui/icons/Twitter'

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
    console.log(inputs)
    return ( 
        <div className='signin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-10 col-md-6 m-auto'>
                        <form className='signin-form'>
                            <Typography variant='h4' align='center'>
                                Sign In
                            </Typography>
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
                                    startIcon={<ExitToAppIcon/>}
                                >
                                    Sign In
                                </Button>
                            </div>    
                            <div className='divider signin-divider'></div>
                            <Typography variant='h4' align='center'>
                                Sign In With
                            </Typography>
                            <div className='d-flex justify-content-center'>
                                <ButtonGroup>
                                    <Button
                                        className='m-auto d-inline-block'
                                        variant='contained' 
                                        color='primary'
                                        type='submit'
                                        size='large'
                                        startIcon={<Facebook />}
                                    >Facebook</Button>
                                    <Button
                                        className='m-auto d-inline-block'
                                        variant='contained' 
                                        color='primary'
                                        type='submit'
                                        size='large'
                                        startIcon={<Twitter />}
                                    >Twitter</Button>
                                {/* <Button
                                    className='m-auto d-inline-block'
                                    variant='contained' 
                                    color='primary'
                                    type='submit'
                                    size='large'
                                >btn1</Button> */}
                                </ButtonGroup>
                            </div>    
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignInForm;