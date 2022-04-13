import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import ModalWindow from '../ModalWindow/ModalWindow';
import './AddButton.scss';

export default class AddButon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.openModalWindow = this.openModalWindow.bind(this);
  }

  toggleModalWindow = () => {
    this.setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  openModalWindow() {
    this.setState({
      isOpen: true,
    });
  }

  render() {
    const { title, body } = this.props;
    const { isOpen } = this.state;

    return (
      <>
        <Col className="AddButton" xs="4">
          <Button
            className="AddButton__btn"
            color="success"
            size="lg"
            block
            onClick={this.openModalWindow}
          >
            <span>
              {title}
            </span>
            <span className="AddButton__btn-icon">
              <FontAwesomeIcon icon={faPlus} />
            </span>
          </Button>
        </Col>
        <ModalWindow
          title={title}
          isOpen={isOpen}
          body={body}
          toggleModalWindow={this.toggleModalWindow}
        />
      </>
    );
  }
}
