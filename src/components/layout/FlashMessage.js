import React from 'react';

export const FlashMessage = ({message}) => {
    return ( 
        <div className='flash-message'>
            {message}
        </div>
     );
}

export const showFlashMessage = message => {
    const body = document.querySelector('body');
    const messageBody = document.createElement('div');
    messageBody.className = 'flash-message';
    messageBody.textContent = message;
    console.log(messageBody);
    body.appendChild(messageBody);
    setTimeout(() => {
        messageBody.remove();
    } , 7000)
}

