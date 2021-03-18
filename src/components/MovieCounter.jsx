import React from "react";
import {useSelector} from "react-redux";


const MovieCounter = () => {

    const images = useSelector(state => state.data);
    const countOfMovies = `${images.length} movies were found`;
    return (
        <section className="movie_counter">
            <h3>
                {countOfMovies}
            </h3>
        </section>
    )
};

export default MovieCounter;
