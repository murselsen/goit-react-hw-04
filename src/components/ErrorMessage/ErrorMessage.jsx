import React from 'react';
import Css from './ErrorMessage.module.css';
import { BiSolidErrorCircle } from "react-icons/bi";


const ErrorMessage = () => {
    return (
        <div className={Css.ErrorMessage}>
            <div className={Css.ErrorMessage_Header}>
                <BiSolidErrorCircle className={Css.ErrorMessage_Icon} />
                <h2 className={Css.ErrorMessage_Title}>Sorry, we couldn't find any images matching your search.</h2>
            </div>
            <p className={Css.ErrorMessage_Text}>Please try a different search term.</p>
        </div>
    );
};

export default ErrorMessage;