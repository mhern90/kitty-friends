import {
    CHANGE_SEARCH_FIELD,
    REQUEST_KITTIES_PENDING,
    REQUEST_KITTIES_SUCCESS,
    REQUEST_KITTIES_FAILED
} from './constants.js'

const initialStateSearch  = {
    searchField : ''
}

export const searchKitties = (state=initialStateSearch, action={}) => {
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}

const initialStateKitties = {
    isPending: false,
    kitties: [],
    error: ''
}

export const requestKitties = (state=initialStateKitties, action={}) => {
    switch (action.type) {
        case REQUEST_KITTIES_PENDING:
            return Object.assign({}, state, { isPending : true});
        case REQUEST_KITTIES_SUCCESS:
            return Object.assign({}, state, { kitties: action.payload, isPending : false});
        case REQUEST_KITTIES_FAILED:
            return Object.assign({}, state, { error: action.payload, isPending: false });
        default:
            return state;
    }
}