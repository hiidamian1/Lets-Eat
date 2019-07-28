import React from 'react';
import '../App.css';

import Filters from "./Filters";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearchLocation } from "@fortawesome/free-solid-svg-icons";

class Search extends React.Component {
  render() {
    return (
      <form className="search-root">
        <div className="col">
          {/*<div className="form-group row">
            <input className="form-control form-control-lg" type="text" name="type" placeholder="Restaurant or category"/>
          </div>*/}
          <div className="form-group d-flex flex-row">
            <input className="form-control form-control-lg" type="text" name="location" placeholder="Location"/>
            <div className="search-location-icon">
              <a href="#" onClick={this.props.handleLocation}><FontAwesomeIcon icon={faSearchLocation}/></a>
            </div>
          </div>
        </div>

        <Filters/>

        <button className="btn btn-outline-light search-button" onClick={this.props.findRestaurant}>
          Find
        </button>
      </form>
    );
  }
}

export default Search;