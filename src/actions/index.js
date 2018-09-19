import axios from 'axios';

export function fetchPeople() {
    
    const request = 
    axios
    .get ('https://swapi.co/api/people');

    return (dispatch) => {
        request.then(({data}) => {
            dispatch({ type: 'FETCH_PEOPLE', payload: data})
        });
    };
}



// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for fetched and one for errors

// our action creator will be a function that returns a promise
// we'll have to be sure to make our promise resolve within our new "thunk based middlware"
// the url to fetch charicters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based
