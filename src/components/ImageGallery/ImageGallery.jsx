import React from 'react';
import Css from './ImageGallery.module.css'
import ContentLoader from 'react-content-loader'
import { BiSolidErrorCircle } from "react-icons/bi";
import { ErrorMessage } from '../index'

const ImageGallery = ({ gallery, isLoading, isError, errorMessage }) => {
    return (<>
        {isLoading ? (
            <ContentLoader
                width="100%"
                height={575}
                viewBox="0 0 800 575"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"

            >
                <rect x="537" y="9" rx="2" ry="2" width="140" height="10" />
                <rect x="14" y="30" rx="2" ry="2" width="667" height="11" />
                <rect x="12" y="58" rx="2" ry="2" width="211" height="211" />
                <rect x="240" y="57" rx="2" ry="2" width="211" height="211" />
                <rect x="467" y="56" rx="2" ry="2" width="211" height="211" />
                <rect x="12" y="283" rx="2" ry="2" width="211" height="211" />
                <rect x="240" y="281" rx="2" ry="2" width="211" height="211" />
                <rect x="468" y="279" rx="2" ry="2" width="211" height="211" />
                <circle cx="286" cy="536" r="12" />
                <circle cx="319" cy="535" r="12" />
                <circle cx="353" cy="535" r="12" />
                <rect x="378" y="524" rx="0" ry="0" width="52" height="24" />
                <rect x="210" y="523" rx="0" ry="0" width="52" height="24" />
                <circle cx="210" cy="535" r="12" />
                <circle cx="428" cy="536" r="12" />
            </ContentLoader>
        ) : (!isError ? (
            <ul className={Css.ImageGallery}>
                {gallery.map((item, index) => (
                    <ImageCard key={index} data={item} />
                ))}
            </ul>

        ) : <ErrorMessage errorMessage={errorMessage} />)
        }
    </>)
};

const ImageCard = ({ data }) => {
    return (
        <li className={Css.ImageCard} onClick={() => { }}>
            <div className={Css.ImageCard_Img} >
                <img src={data.urls.small} alt={data.description} />
            </div>
            <div className={Css.ImageCard_Content} >
                <span className={Css.ImageCard_Content_Hash}>
                    {
                        data.id
                    }
                </span>
                <p className={Css.ImageCard_Content_Description}>
                    <BiSolidErrorCircle />
                    <span>{
                        data.description ?
                            data.description :
                            (data.alt_description ?
                                data.alt_description :
                                'No description available'
                            )
                    }</span>
                </p>

            </div>
        </li >
    )

}

export default ImageGallery;