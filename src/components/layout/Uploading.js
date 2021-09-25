import React from 'react';
import {ReactComponent as Spinner} from '../imgs/Spinner.svg';

const Uploading = ({text,percent}) => 
    <div className='uploading-spinner'>
        <Spinner />
    </div>

export default Uploading