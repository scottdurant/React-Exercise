import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchArticles, fetchArticlesSuccess, searchResults } from '../actions/actions';

class ArticleSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleChange(event) {
        this.setState({ searchTerm: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onFetchArticles();
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

const mapDispatchToProps = (dispatch => {
    return {
        onFetchArticles: () => dispatch(fetchArticles())
    }
})

export default connect(null, mapDispatchToProps )(ArticleSearch);

//export default connect(null, mapDispatchToProps, { fetchArticleSuccess } )(ArticleSearch);