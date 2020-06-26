import { combineReducers } from 'redux';
import { SEARCH_RESULTS } from '../actions/index';
import {
    FETCH_ARTICLES_BEGIN,
    FETCH_ARTICLES_SUCCESS,
    FETCH_ARTICLES_FAILURE
} from '../actions/index';

const initialState = {
    searchHistory: [],
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
                articles: action.payload.articles
            };
        case FETCH_ARTICLES_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                articles: []
            };
        default:
            return state;
    }
}




const results = (state = [], action) => {
    switch(action.type) {
        case SEARCH_RESULTS:
            return action.results;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    results,
    search
});

export default rootReducer;