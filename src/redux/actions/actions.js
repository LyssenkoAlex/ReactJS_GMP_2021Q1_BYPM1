import { FETCH_POSTS, SET_POSTS, API } from './types';

export function fetchPosts() {
    return apiAction({
        url: 'http://localhost:4000/movies?offset=20', // Mocked Backend Data.
        onSuccess: setPosts,
        onFailure: () => console.log('Error while loading posts'), // Dummy error handler.
        label: FETCH_POSTS
    });
}

export function setPosts(data) {
    return {
        type: SET_POSTS,
        payload: data
    };
}

function apiAction({
                       url,
                       method = 'GET', // Default method
                       data = null,
                       onSuccess = () => {},
                       onFailure = () => {},
                       label
                   }) {
    return {
        type: API,
        payload: {
            url,
            method,
            data,
            onSuccess,
            onFailure,
            label
        }
    };
}
