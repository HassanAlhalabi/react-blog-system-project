import React , {useState} from 'react';
import PageHeader from '../../components/layout/PageHeader';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PersonAdd from '@material-ui/icons/PersonAdd';
import FacebookLogin from 'react-facebook-login';
import { useHistory } from 'react-router-dom';

const SignUpForm = () => {
    
    const [inputs , setInputs] = useState({
        f_name:   null,
        l_name:   null,
        email:    null,
        password: null,
    })

    const history = useHistory();
    
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

    const responseFacebook = response => {
        localStorage.setItem("ACCESS_TOKEN_NAME",response.accessToken);
        history.push('/');
    }

    return ( 
        <div className='signup pt-5 pb-5'>
            <div className='container mb-5'>
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
                                    value={inputs.f_name}
                                    autoComplete='off'
                                />     
                                <TextField
                                    label='Last Name:'
                                    variant='filled'
                                    type='l_name' 
                                    className='w-100 mb-3'
                                    name='l_name'
                                    id='l_name'
                                    onChange={handleFormChange}
                                    value={inputs.l_name}
                                    autoComplete='off'
                                /> 
                            </div>    
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
                                    startIcon={<PersonAdd />}
                                    onClick={handleSignup}>
                                    Sign Up
                                </Button>
                            </div>    
                        </form>
                        <FacebookLogin
                            appId="1022504948484944"
                            autoLoad={true}
                            fields="name,email,picture"
                            callback={responseFacebook} 
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignUpForm;