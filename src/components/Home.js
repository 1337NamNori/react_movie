import React from "react";

// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// Components
import HeroImage from "./HeroImage";
import Grid from "./Grid";

// Hooks
import {useHomeFetch} from "../hooks/useHomeFetch";

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {state, error, loading} = useHomeFetch();

    console.log(state);

    return (
        <>
            {state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            }
            <Grid header='Popular Movies'>
                {state.results.map(movie => (
                    <div key={movie.id}>{movie.title}</div>
                ))}
            </Grid>
        </>
    )
}

export default Home;