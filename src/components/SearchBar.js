import React, { Component } from 'react';
import { connect } from 'react-redux';
import { searchResults } from '../actions/index';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    fetchData = () => {
        return fetch(`http://hn.algolia.com/api/v1/search?query=${this.state.searchTerm}&tags=story`)
            .then((response) => {
                response.json().then((data) => {
                    //console.log(data)
                    this.props.searchResults(data.hits);
                })
            }).catch((error) => console.log(error));
    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.fetchData();
        this.setState({searchTerm: ""})
    }


    render() {
        return (
            <div>
                <p>
                    Search Hacker News
                </p>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        value={this.state.searchTerm}
                        onChange={this.handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        )
    }
}

export default connect(null, { searchResults })(SearchBar);