import React, { Component } from 'react';
import { Modal, ModalHeader, ModalBody } from 'reactstrap';
import './ModalWindow.scss';

class ModalWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      isOpen,
      title,
      body,
      toggleModalWindow,
    } = this.props;

    return (
      <div className="ModalWindow">
        <Modal
          isOpen={isOpen}
          centered
          backdrop
          toggle={toggleModalWindow}
        >
          <ModalHeader toggle={toggleModalWindow}>
            {title}
          </ModalHeader>
          <ModalBody>
            {body}
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalWindow;
