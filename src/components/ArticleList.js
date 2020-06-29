import React from "react";
import { connect } from "react-redux";
import Article from "./Article";

class ArticleList extends React.Component {
    render() {
        const { error, loading } = this.props;

        if (loading) {
            return <div>Loading....</div>
        }

        if (error) {
            return <div>error: {this.props.error}</div>
        }

        return (
            <ul>
                {this.props.articles.map(article =>
                    <Article key={article.objectID} title={article.title} url={article.url}/>
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.results.filter(a => a.url !== null), // filter out articles with null url
    loading: state.loading,
    error: state.error
})

export default connect(mapStateToProps)(ArticleList);