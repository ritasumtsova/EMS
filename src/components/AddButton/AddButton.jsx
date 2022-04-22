import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

import ModalContext from '../../contexts/ModalContext/ModalContext';
import './AddButton.scss';

class AddButton extends Component {
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
    const { title } = this.props;

    return (
      <Col className="AddButton" xs="4">
        <Button
          className="AddButton__btn"
          color="success"
          size="lg"
          block
          onClick={this.openModalHandler}
        >
          <span>
            {title}
          </span>
          <span className="AddButton__btn-icon">
            <FontAwesomeIcon icon={faPlus} />
          </span>
        </Button>
      </Col>
    );
  }
}

export default AddButton;
AddButton.contextType = ModalContext;
