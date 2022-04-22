import React, { Component } from 'react';
import { Button } from 'reactstrap';

import ModalContext from '../../contexts/ModalContext/ModalContext';
import './EditButton.scss';

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  openModalHandler = () => {
    const { openModal } = this.context;
    const { title, modalForm } = this.props;

    openModal({
      title,
      children: modalForm,
    });
  };

  render() {
    return (
      <Button
        className="EditButton__btn"
        color="primary"
        onClick={this.openModalHandler}
      >
        Edit
      </Button>
    );
  }
}

export default EditButton;
EditButton.contextType = ModalContext;
