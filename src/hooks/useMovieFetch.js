import {useState, useEffect} from "react";

// API
import API from "../API";

// Helpers
import {getMovieState, setMovieState} from "../helpers";

export const useMovieFetch = movieId => {
    const [state, setState] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchMovie = async () => {
            try {
                setLoading(true);
                setError(false);

                const movie = await API.fetchMovie(movieId);
                const credits = await API.fetchCredits(movieId);
                const directors = credits.crew.filter(member => member.job === 'Director');

                setState({
                    ...movie,
                    directors,
                    actors: credits.cast,
                });

                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }

        const sessionState = getMovieState(movieId);

        if (sessionState) {
            setState(sessionState);
            setLoading(false);

            return;
        }

        fetchMovie();
    }, [movieId]);

    // Session Storage
    useEffect(() => {
        setMovieState(movieId, state);
    }, [state, movieId]);

    return {state, loading, error}
}