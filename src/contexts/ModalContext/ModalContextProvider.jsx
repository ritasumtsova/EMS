import React, { Component } from 'react';

import ModalContext from './ModalContext';
import ModalWindow from '../../components/ModalWindow/ModalWindow';

class ModalContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modalOpened: false,
      modalContent: null,
    };
  }

  openModal = (modalConfig) => {
    this.setState({
      modalOpened: true,
      modalContent: modalConfig,
    });
  };

  closeModal = () => {
    this.setState({
      modalOpened: false,
    });
  };

  render() {
    const { children } = this.props;
    const { modalOpened, modalContent } = this.state;
    const valueModalProvider = {
      openModal: this.openModal,
      closeModal: this.closeModal,
    };

    return (
      <ModalContext.Provider value={valueModalProvider}>
        {modalOpened
          && (
          <ModalWindow isOpen={modalOpened} title={modalContent.title} closeModal={this.closeModal}>
            {modalContent.children}
          </ModalWindow>
          )}
        {children}
      </ModalContext.Provider>
    );
  }
}

export default ModalContextProvider;
