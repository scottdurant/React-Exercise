import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from "./Article";
import { searchResults } from '../actions/actions';

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
                <div>
                    {this.props.results.map(a => <Article key={a.created_at} title={a.title} url={a.url}/>)}
                </div>
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