import React from 'react';
import Css from './ErrorMessage.module.css';
import { Toaster } from 'react-hot-toast';

const ErrorMessage = () => {
    return (
        <div className={Css.ErrorMessage}>
            <h2 className={Css.ErrorMessage_Title}>Sorry, we couldn't find any images matching your search.</h2>
            <p className={Css.ErrorMessage_Text}>Please try a different search term.</p>
            {/* <Toaster /> */}
        </div>
    );
};

export default ErrorMessage;