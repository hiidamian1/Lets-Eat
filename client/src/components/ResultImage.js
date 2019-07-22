import React from 'react';
import '../App.css';

class ResultImage extends React.Component {
  render() {
      return (
        <div>
          <div className="result-img-container">
            <a href="#" data-toggle="modal" data-target="#exampleModalCenter">
              <img src={this.props.image} className="result-img" alt=""/>
            </a>
          </div>
          
          <div className="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <img src={this.props.image} className="result-img" alt=""/>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default ResultImage;

