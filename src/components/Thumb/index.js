import React from 'react';

// Styles
import {Image} from './Thumb.styles';

const Thumb = ({image, movieId, clickable, movieTitle}) => (
    <div>
        <Image src={image} alt={movieTitle} title={movieTitle}/>
    </div>
);

export default Thumb;
