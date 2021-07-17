import React,{ useState } from 'react';
import LandingContactUsImage from '../imgs/landing/contactUsImage.png';
import TextField from '@material-ui/core/TextField';

const LandingContactUs = () => {
    
    const [inputs,setInputs] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleFormChange = e => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault();
        console.log('Form Submit ...');
    }

    return ( 
        <div className="landing-contact-us">
            <div className="container">
                <div className="contact-us">
                    <div className="row">
                        <div className='col-12 col-md-7'>
                            <div className="contact-us-image">
                                <img src={LandingContactUsImage} className="img-fluid" alt=''/>
                            </div>
                        </div>
                        <div className='col-12 col-md-5'>
                            <div className='contact-us-form'>
                                <h2>Contact</h2>
                                <form onSubmit={e => handleFormSubmit(e)}> 
                                    <div className='d-flex justify-content-between flex-wrap flex-lg-nowrap'>
                                        <TextField
                                            type='text'
                                            label='Your Name'
                                            fullWidth 
                                            className='mr-lg-2'
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
                                            className='ml-lg-2'
                                            variant='filled'
                                            name='email'
                                            id='email'
                                            required
                                            onChange={handleFormChange}
                                            value={inputs.email}
                                            autoComplete='off'
                                        />
                                    </div>
                                    <div>    
                                        <TextField
                                            type='text'
                                            label='Your Message'
                                            fullWidth
                                            multiline
                                            rows='2' 
                                            className=''
                                            variant='filled'
                                            name='message'
                                            id='message'
                                            required
                                            onChange={handleFormChange}
                                            value={inputs.message}
                                            autoComplete='off'
                                        />
                                    </div>   
                                    <button className="landing-button mt-5">
                                        Send Message
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>
    );
}

export default LandingContactUs;