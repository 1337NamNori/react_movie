import React from 'react';
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

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

Thumb.propTypes = {
    image: PropTypes.string,
    movieId: PropTypes.number,
    clickable: PropTypes.bool,
    movieTitle: PropTypes.string,
}

export default Thumb;
