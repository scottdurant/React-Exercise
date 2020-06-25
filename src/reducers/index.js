import { combineReducers } from 'redux';
import { SEARCH_RESULTS } from '../actions/index';
import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
} from '../actions/index';

const initialState = {
    articles: [],
    searchHistory: [],
    loading: false,
    error: null
};



const results = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_DATA_BEGIN:
            // mark state as loading
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                articles: action.payload.results // // // //
            };
        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error
            };
        default:
            return state;
    }
}



// const results = (state = [], action) => {
//     switch(action.type) {
//         case SEARCH_RESULTS:
//             return action.results;
//         default:
//             return state;
//     }
// }

const rootReducer = combineReducers({
    results
});

export default rootReducer;