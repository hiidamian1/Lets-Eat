import React from 'react';
import '../App.css';

class Search extends React.Component {
  render() {
    return (
      <div className="button-root">
        <button className="btn btn-outline-light search-button" onClick={this.props.findRestaurant}>
          Find
        </button>
      </div>
    );
  }
}

export default Search;