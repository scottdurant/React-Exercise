import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/index";

class ArticleList extends React.Component {
    componentDidMount() {
        console.log('fetching articles');
        this.props.dispatch(fetchArticles());
    }



    render() {
        const { error, loading, articles } = this.props;

        // if error

        if (loading) {
            return <div>Loading....</div>
        }

        return (
            <ul>
                {/* {articles.map(article => 
                    <li key={article.created_at}>{article.title}</li>
                )} */}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.results,
    loading: state.search.loading,
    error: state.search.error
})

export default connect(mapStateToProps)(ArticleList);