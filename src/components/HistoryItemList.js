import React from 'react';
import { connect } from "react-redux";
import HistoryItem from './HistoryItem';

class HistoryItemList extends React.Component {
    id = 0;
    render() {
        return (
            <div>
                <h3>Search History</h3>
                <ul>
                    {this.props.historyItems.map(item =>
                        <HistoryItem key={this.id++} searchValue={item} />
                    )}
                </ul>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    historyItems: state.search.searchHistory,
})

export default connect(mapStateToProps)(HistoryItemList);