import React from 'react';
import {Link} from "react-router-dom";

// Styles
import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable, movieTitle}) => (
    <div>
        {clickable ? (
            <Link to={`/${movieId}`}>
                <Image src={image} alt={movieTitle} title={movieTitle}/>
            </Link>
        ) : (
            <Image src={image} alt={movieTitle} title={movieTitle}/>
        )}
    </div>
);

export default Thumb;
