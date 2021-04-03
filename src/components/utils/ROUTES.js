import Welcome from "../Welcome";
import SearchResult from "../SearchResult";
import MovieDetails from "../MovieDetails";

export const WELCOME_PAGE = { path: "/", key: "ROOT", exact: true, component: Welcome };
export const SEARCH_PAGE = { path: "/search_result", key: "SEARCH", exact: true, component: SearchResult };
export const MOVIE_DETAILS_PAGE = { path: "/movie_details", key: "SEARCH", exact: true, component: MovieDetails };
