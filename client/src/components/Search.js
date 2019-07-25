import React from 'react';
import '../App.css';

class Search extends React.Component {
  render() {
    return (
      <form className="search-root">
        <div className="col">
          <div className="form-group row">
            <input className="form-control form-control-lg" type="text" name="type" placeholder="Restaurant or category"/>
          </div>
          <div className="form-group row">
            <input className="form-control form-control-lg" type="text" name="location" placeholder="Location"/>
          </div>
        </div>
        <button className="btn btn-outline-light search-button" onClick={this.props.handleLocation}>
          Test
        </button>
        <button className="btn btn-outline-light search-button" onClick={this.props.findRestaurant}>
          Find
        </button>
      </form>
    );
  }
}

export default Search;