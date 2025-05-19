import React from 'react'
import { GrNext } from "react-icons/gr";
import Css from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({
    nextPage
}) => {

    const handleClick = () => {
        nextPage();
    }
    return (
        <div className={Css.LoadMoreBtn_Container}>
            <button className={Css.LoadMoreBtn} onClick={handleClick}>
                <GrNext className={Css.LoadMoreBtn_Icon} /> <span className={Css.LoadMoreBtn_Text}>Load More</span>
            </button>
        </div>
    )
}

export default LoadMoreBtn