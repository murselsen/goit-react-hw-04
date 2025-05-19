import React from 'react';
import { BiSolidErrorCircle } from 'react-icons/bi';
import Css from './ImageGallery.module.css';

const ImageCard = ({ data, selectCard }) => {
    const handleClick = (photoData) => {
        selectCard(photoData);
    };
    return (
        <li className={`${Css.ImageCard}`} onClick={() => { handleClick(data); }}>
            <div className={Css.ImageCard_Img}>
                <img src={data.urls.small} alt={data.description} />
            </div>
            <div className={Css.ImageCard_Content}>
                <span className={Css.ImageCard_Content_Hash}>
                    {data.id}
                </span>
                <p className={Css.ImageCard_Content_Description}>
                    <BiSolidErrorCircle />
                    <span>{data.description ?
                        data.description :
                        (data.alt_description ?
                            data.alt_description :
                            'No description available'
                        )}</span>
                </p>

            </div>
        </li>
    );

};
export default ImageCard;