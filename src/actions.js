import { 
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTIES_PENDING,
    REQUEST_KITTIES_SUCCESS,
    REQUEST_KITTIES_FAILED 
} from './constants.js'


export const setSearchField = (text) => ({
    type: CHANGE_SEARCH_FIELD,
    payload: text
})

export const requestKitties = () => (dispatch) => {
    dispatch({ type: REQUEST_KITTIES_PENDING } )
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch({ type: REQUEST_KITTIES_SUCCESS, payload: data }))
        .catch(error => dispatch({ type: REQUEST_KITTIES_FAILED, payload: error }))
}   