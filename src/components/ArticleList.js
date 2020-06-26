import React from "react";
import { connect } from "react-redux";
import { fetchArticles } from "../actions/actions";

class ArticleList extends React.Component {
    componentDidMount() {
        console.log('fetching articles');
        this.props.dispatch(fetchArticles());
    }



    render() {
        const { error, loading } = this.props;

        // if error

        if (loading) {
            return <div>Loading....</div>
        }

        if (error) {
            return <div>error: {this.props.error}</div>
        }

        return (
            <ul>
                <p>Articles</p>
                
                {this.props.articles.map(article => 
                    <li key={article.created_at}>{article.title}</li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => ({
    articles: state.search.results,
    loading: state.search.loading,
    error: state.search.error
})

export default connect(mapStateToProps)(ArticleList);