import { combineReducers } from 'redux';
import { SEARCH_RESULTS } from '../actions/actions';
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
            console.log('article successs!')
            return {
                ...state,
                loading: false,
                results: action.payload.articles
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




// const results = (state = [], action) => {
//     switch(action.type) {
//         case SEARCH_RESULTS:
//             return {
//                 ...state,
//                 results: action.results
//             }
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
    //results,
    search
});

export default rootReducer;