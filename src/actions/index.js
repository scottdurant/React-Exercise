export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const FETCH_DATA_BEGIN = 'FETCH_DATA_BEGIN';
export const FETCH_DATA_SUCCESS = 'FETCH_DATA_SUCCESS';
export const FETCH_DATA_FAILURE = 'FETCH_DATA_FAILURE';

export function searchResults(results) {
    return {
        type: SEARCH_RESULTS,
        results
    }
}

export const fetchDataBegin = () => ({
    type: FETCH_DATA_BEGIN
});

export const fetchDataSuccess = data => ({
    type: FETCH_DATA_BEGIN,
    payload: { data }
});

export const fetchDataFailure = error => ({
    type: FETCH_DATA_FAILURE,
    payload: { error }
});


export function fetchData() {
    return dispatch => {
        dispatch(fetchDataBegin());
        return fetch(`http://hn.algolia.com/api/v1/search?query=amazon&tags=story`)
            .then(response => response.json())
            .then(json => {
                dispatch(fetchDataSuccess(json.data));
                return json.data;
            })
            .catch(error => dispatch(fetchDataFailure(error)));
    }
}




// return fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=story`)
//             .then((response) => {
//                 response.json().then((data) => {
//                     //console.log(data)
//                     this.props.searchResults(data.hits);
//                 })
//             }).catch((error) => console.log(error));