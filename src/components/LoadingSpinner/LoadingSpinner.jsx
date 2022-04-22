import React from 'react';
import { Spinner } from 'reactstrap';

import './LoadingSpinner.scss';

function LoadingSpinner() {
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

export default LoadingSpinner;
