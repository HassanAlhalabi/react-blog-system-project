import React , {useState} from 'react';
import PageHeader from '../../components/layout/PageHeader';
import TextField from '@material-ui/core/TextField';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import FacebookLogin from 'react-facebook-login';
import {useHistory} from 'react-router-dom';
import {connect} from 'react-redux';
import {addUser as addNewUser} from '../../store/actions/actions'

const SignInForm = ({addNewUser}) => {
    
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
        console.log('sign in ....')
    }

    const history = useHistory();

    const responseFacebook = response => {
        localStorage.setItem("ACCESS_TOKEN_NAME",response.accessToken);
        console.log(response)
        // addNewUser(reponse)
        history.push('/');
    }
    
    return ( 
        <div className='signin pt-5 pb-5'>
            <div className='container mb-5'>
                <PageHeader title='Log In' />
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
 
const mapDispatchToProps = dispatch => {
    return(
        {
            addNewUser: newUser => dispatch(addNewUser(newUser))
        }
    )
}

export default connect(null,mapDispatchToProps)(SignInForm);