import React, { Component } from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import ArticleSearch from './components/ArticleSearch';
import HistoryItemList from './components/HistoryItemList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ArticleSearch />
        <ArticleList />
        <HistoryItemList />
      </div>
    );
  }

}

export default App;