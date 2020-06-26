import React, { Component } from 'react';
import './App.css';
// import SearchBar from './components/SearchBar';
// import SearchResults from './components/SearchResults';
import ArticleList from './components/ArticleList';
import ArticleSearch from './components/ArticleSearch';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleSearch />
        <ArticleList />
        {/* <SearchResults /> */}
      </div>
    );
  }

}

export default App;
