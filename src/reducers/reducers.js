import {
    FETCH_ARTICLES_BEGIN,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from '../actions/actions';

const initialState = {
    searchHistory: [],
    results: [],
    loading: false,
    error: null
}

function search(state = initialState, action) {
    switch(action.type) {
        case FETCH_ARTICLES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                loading: false,
                results: action.payload.articles,
                searchHistory: state.searchHistory.concat(action.payload.searchHistory)
            };
        case FETCH_ARTICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                results: []
            };
        default:
            return state;
    }
}

export default search;