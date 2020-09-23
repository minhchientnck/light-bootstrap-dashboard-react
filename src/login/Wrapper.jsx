import React, { Component } from 'react';
import './css/styles.css';
import './css/util.css';

class Wrapper extends Component {
  render() {
    return (
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <div className="logo">
              <a href="#" className="simple-text logo-mini">
                <div className="logo-img">
                  {/* <img src={logo} alt="logo_image" /> */}
                </div>
              </a>
              <a href="#" className="simple-text logo-normal">
                Vượt Link
              </a>
            </div>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

export default Wrapper;
