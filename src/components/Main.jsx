import React, {useEffect} from "react";
import PropTypes from "prop-types";
import ListOfMovies from "./lists/ListOfMovies";
import MovieCounter from "./MovieCounter";
import {fetchPosts} from "../redux/actions/actions";
import {useDispatch, useSelector} from "react-redux";

const Main = ({movieHandler}) => {

    const images = useSelector(state => state.data);
    const isFetching = useSelector(state => state.isFetching);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPosts());
    }, []);

    return (
        <main>
            <MovieCounter/>
            <section className="movies_wrapper">
                <ListOfMovies data={images} isFetching={isFetching} movieHandler={movieHandler}/>
            </section>
        </main>
    )
};
export default Main;

Main.propTypes = {
    movieHandler: PropTypes.func.isRequired,
};
