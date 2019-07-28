import React from "react";
import "../App.css";

class Filters extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-light" data-toggle="modal" data-target="#filtersModal">
          Filters
        </button>
        <div className="modal fade" id="filtersModal" tabindex="-1" role="dialog" aria-labelledby="filtersModalTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div class="form-group">
                      <label for="searchTerm">Restaurant or category</label>
                      <input type="email" class="form-control" id="searchTerm" aria-describedby="Help" placeholder="Starbucks, Mexican, sushi"/>
                    </div>
                    <div class="form-group">
                      <label for="radius">Radius</label>
                      <div class="dropdown">
                        <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Action {/*no default*/}
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">5 miles</a>
                          <a class="dropdown-item" href="#">15 miles</a>
                          <a class="dropdown-item" href="#">25 miles</a>
                        </div>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="price">Price</label>
                      <div class="dropdown">
                        <button type="button" class="btn btn-outline-dark dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Price {/*no default*/}
                        </button>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">$</a>
                          <a class="dropdown-item" href="#">$$</a>
                          <a class="dropdown-item" href="#">$$$</a>
                          <a class="dropdown-item" href="#">$$$$</a>
                        </div>
                      </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
  }
}

export default Filters;