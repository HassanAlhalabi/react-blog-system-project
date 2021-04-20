import React from 'react';

const SignInForm = () => {
    return ( 
        <div className='signin'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-sm-10 col-md-6 m-auto'>
                        <form className='signin-form'>
                            <div className='form-group'>
                                <input type='email' className='form-control' />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignInForm;