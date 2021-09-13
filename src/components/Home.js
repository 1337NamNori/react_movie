import React from "react";

// Config
import {POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL} from "../config";

// Components
import HeroImage from "./HeroImage";
import SearchBar from "./SearchBar";
import Grid from "./Grid";
import Thumb from "./Thumb";
import Spinner from "./Spinner";

// Hooks
import {useHomeFetch} from "../hooks/useHomeFetch";

// Images
import NoImage from '../images/no_image.jpg';

const Home = () => {
    const {state, error, loading, setSearchTerm, searchTerm} = useHomeFetch();

    console.log(state);

    return (
        <>
            {!searchTerm && state.results[0] &&
                <HeroImage
                    image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.results[0].backdrop_path}`}
                    title={state.results[0].original_title}
                    text={state.results[0].overview}
                />
            }
            <SearchBar setSearchTerm={setSearchTerm}/>
            <Grid header={searchTerm ? `Search Results for '${searchTerm}'` : 'Popular Movies'}>
                {state.results.map(movie => (
                    <Thumb key={movie.id} clickable movieId={movie.id}
                           image={
                               movie.poster_path
                                   ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
                                   : NoImage
                           }
                    />
                ))}
            </Grid>
            <Spinner />
        </>
    )
}

export default Home;