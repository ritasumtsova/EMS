import React, { Component } from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';

const withLoader = (WrappedComponent) => {
  class WithLoader extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: false,
      };
    }

    toggleLoader = () => {
      this.setState((prev) => ({ ...prev, isLoading: !prev.isLoading }));
    };

    render() {
      const { isLoading } = this.state;

      return (
        <>
          {isLoading && <LoadingSpinner />}
          <WrappedComponent
            toggleLoader={this.toggleLoader}
            {...this.props}
          />
        </>
      );
    }
  }
  return WithLoader;
};

export default withLoader;
