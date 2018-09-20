import axios from 'axios';


export const FETCHING_CHARS = 'FETCHING_CHARS';
export const CHARS_FETCHING_SUCCESS = 'CHARS_FETCHING_SUCCESS';
export const  CHARS_FETCHING_ERROR = 'CHARS_FETCHING_ERROR';

export const fetchChars = () => {
    
    return dispatch => { 
        dispatch({ type: 'FETCHING_CHARS' })

    axios
    .get ('https://swapi.co/api/people/')
    .then(response => {
        dispatch({ type: 'CHARS_FETCHING_SUCCESS', payload: response.data.message });
    })
    .catch(err => {
        console.log(err);
        dispatch({ type: 'CHARS_FETCHING_ERROR'});

    });
    };
};



// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
