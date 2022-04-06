import React, { Component } from 'react';
import { Spinner } from 'reactstrap';
import './LoadingSpinner.scss';

class LoadingSpinner extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="LoadingSpinner">
        <Spinner
          className="LoadingSpinner__spinner"
          color="primary"
          type="border"
        >
          Loading...
        </Spinner>
      </div>
    );
  }
}

export default LoadingSpinner;
