import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchResults } from '../actions';

class SearchResults extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    Search Results
                </p>
                <ul>
                    {this.props.results.map((result, key) => 
                        <li key={key}>{result.title}</li>
                    )}
                </ul>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        results: state.results
    };
}

export default connect(mapStateToProps, null)(SearchResults);