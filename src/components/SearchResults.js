import React, { Component } from 'react';
import { connect } from 'react-redux';
import Article from "./Article";
import { fetchData } from "../actions/index";
import { searchResults } from '../actions';

class SearchResults extends Component {
    componentDidMount() {
        this.props.dispatch(fetchData());
    }
    // constructor(props) {
    //     super(props);
    // }

    render() {
        const { error, loading, data } = this.props;

        if (error) {
            return <div>Error! {error.message}</div>
        }

        if (loading) {
            return <div>loading...</div>
        }

        return (
            <ul>
                {data.map(a => {
                    // <Article key={a.created_at} title={a.title} url={a.url}/>
                })}
            </ul>
        )
    }



    // render() {
    //     return (
    //         <div>
    //             <p>
    //                 Search Results
    //             </p>
    //             <div>
    //                 {/* {this.props.results.map(a => <Article key={a.created_at} title={a.title} url={a.url}/>)} */}
    //             </div>
    //         </div>

    //     )
    // }
}

function mapStateToProps(state) {
    return {
        data: state.data.articles,
        loading: state.data.loading,
        error: state.data.error


        //results: state.results
    };
}

export default connect(mapStateToProps)(SearchResults);