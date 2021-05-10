import React , {useState} from 'react';
import Typography from '@material-ui/core/Typography';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const ContactUs = () => {
    
    const [inputs , setInputs] = useState({
        name:    null,
        email:   null,
        message: null
    })
    
    const handleFormChange = e => {
        setInputs({
            ...inputs,
            [e.target.name] : e.target.value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log('sending form ....')
    }
    

    return ( 
        <div className='contact-us pt-5 pb-5'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-10 col-md-5 m-auto'>
                        <form className='contact-us-form'>
                            <Typography variant='h4' align='center'>
                                Contact Us
                            </Typography>
                            <TextField
                                type='text'
                                label='Your Name'
                                fullWidth 
                                className='mb-4'
                                variant='filled'
                                name='name'
                                id='name'
                                onChange={handleFormChange}
                                value={inputs.name}
                            />
                            <TextField
                                type='email'
                                label='Your Email'
                                fullWidth 
                                className='mb-4'
                                variant='filled'
                                name='email'
                                id='email'
                                onChange={handleFormChange}
                                value={inputs.email}
                            />
                            <TextField
                                type='text'
                                label='Your Message'
                                fullWidth
                                multiline
                                rows='5' 
                                className='mb-4'
                                variant='filled'
                                name='message'
                                id='message'
                                onChange={handleFormChange}
                                value={inputs.message}
                            />
                            <div className='d-flex justify-content-center'>
                                <Button
                                    variant='contained' 
                                    color='primary'
                                    type='submit'
                                    size='large'
                                    startIcon={<ExitToAppIcon/>}
                                    onClick={handleFormSubmit}
                                >
                                    Submit
                                </Button>
                            </div>      
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default ContactUs;