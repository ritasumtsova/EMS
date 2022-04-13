import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ModalWindow from '../ModalWindow/ModalWindow';
import './EditButton.scss';

class EditButton extends Component {
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
        <Button
          className="EditButton__btn"
          color="primary"
          onClick={this.openModalWindow}
        >
          Edit
        </Button>
        <ModalWindow
          className="EditButton__modal"
          title={title}
          isOpen={isOpen}
          body={body}
          toggleModalWindow={this.toggleModalWindow}
        />
      </>
    );
  }
}

export default EditButton;
