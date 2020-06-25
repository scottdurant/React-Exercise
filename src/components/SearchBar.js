import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchResults } from '../actions/index';


class SearchBar extends Component {
    fetchData = () => {
        return fetch('http://hn.algolia.com/api/v1/search?query=amazon&tags=story')
            .then(response => response.json())
            .then(response => console.log(response.hits))
            // .then(response => {
            //     response.then((data) => {
            //         this.props.searchResults(data.items);
            //     })
            // }).catch((error) => console.log(error));
    }


    render() {
        return (
            <div>
                <p>
                    Search Here
                </p>
                <form
                    onSubmit={
                        e => {
                            e.preventDefault();
                            this.fetchData();
                        }
                    }
                >
                    <input

                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default connect(null, {searchResults})(SearchBar);