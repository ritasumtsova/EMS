import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

import ModalContext from '../../contexts/ModalContext/ModalContext';

class ModalWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  closeModalHandler = () => {
    const { closeModal } = this.context;
    closeModal();
  };

  render() {
    const { title, children, isOpen } = this.props;

    return (
      <Modal
        centered
        backdrop
        isOpen={isOpen}
      >
        <ModalHeader>
          {title}
        </ModalHeader>
        <ModalBody>
          {children}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" disabled type="Submit">Save</Button>
          <Button onClick={this.closeModalHandler} color="danger">Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalWindow;
ModalWindow.contextType = ModalContext;
