import {useState, useEffect} from "react";

// API
import API from "../API";

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

        fetchMovie();
    }, [movieId]);

    return {state, loading, error}
}