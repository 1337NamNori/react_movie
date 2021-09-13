import React from "react";

// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// Components

// Hooks
import {useHomeFetch} from "../hooks/useHomeFetch";

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {state, error, loading} = useHomeFetch();

    console.log(state);

    return (
        <div>
            Home Page
        </div>
    )
}

export default Home;