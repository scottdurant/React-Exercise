export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const FETCH_ARTICLES_BEGIN = 'FETCH_ARTICLES_BEGIN';
export const FETCH_ARTICLES_SUCCESS = 'FETCH_ARTICLES_SUCCESS';
export const FETCH_ARTICLES_FAILURE = 'FETCH_ARTICLES_FAILURE';

export function searchResults(results) {
    return {
        type: SEARCH_RESULTS,
        results
    }
}

export const fetchArticlesBegin = () => ({
    type: FETCH_ARTICLES_BEGIN
});

export const fetchArticlesSuccess = (articles, searchHistory) => ({
    type: FETCH_ARTICLES_SUCCESS,
    payload: { articles, searchHistory }
});

export const fetchArticlesFailure = error => ({
    type: FETCH_ARTICLES_FAILURE,
    payload: { error }
});

export function fetchArticles(searchTerm) {
    return (dispatch) => {
        dispatch(fetchArticlesBegin());
        return fetch(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`)
            .then(res => res.json())
            .then(json => {
                dispatch(fetchArticlesSuccess(json.hits, searchTerm));
                return json.hits;
            })
            .catch(error => dispatch(fetchArticlesFailure(error)));
    };
}