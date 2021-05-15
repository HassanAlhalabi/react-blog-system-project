import React , {useState} from 'react';
import PageHeader from './layout/PageHeader';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const ContactUs = () => {
    
    const [inputs , setInputs] = useState({
        name:    null,
        email:   null,
        phone:   null,
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
                <form className='contact-us-form mb-5'>
                    <PageHeader title='Contact Us'/>  
                    <div className='row'>   
                        <div className='col-12 col-md-6 d-flex flex-column justify-content-between'>
                            <TextField
                                type='text'
                                label='Your Name'
                                fullWidth 
                                className='mb-4'
                                variant='filled'
                                name='name'
                                id='name'
                                required
                                onChange={handleFormChange}
                                value={inputs.name}
                                autoComplete='off'
                            />
                            <TextField
                                type='email'
                                label='Your Email'
                                fullWidth 
                                className='mb-4'
                                variant='filled'
                                name='email'
                                id='email'
                                required
                                onChange={handleFormChange}
                                value={inputs.email}
                                autoComplete='off'
                            />
                            <TextField
                                type='phone'
                                label='Your Phone Number'
                                fullWidth 
                                className='mb-4'
                                variant='filled'
                                name='phone-number'
                                id='phone-number'
                                onChange={handleFormChange}
                                value={inputs.phone}
                                autoComplete='off'
                            />
                        </div>
                        <div className='col-12 col-md-6'>    
                            <TextField
                                type='text'
                                label='Your Message'
                                fullWidth
                                multiline
                                rows='10' 
                                className='mb-4'
                                variant='filled'
                                name='message'
                                id='message'
                                required
                                onChange={handleFormChange}
                                value={inputs.message}
                                autoComplete='off'
                            />
                        </div>
                    </div>     
                    <div className=''>
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
     );
}
 
export default ContactUs;