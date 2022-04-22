import React, { Component } from 'react';
import {
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from 'reactstrap';

class ModalWindow extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const {
      title,
      children,
      isOpen,
      closeModal,
    } = this.props;

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
          <Button onClick={closeModal} color="danger">Cancel</Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default ModalWindow;
