import React, { Component } from 'react';
import { Button } from 'reactstrap';
import ModalWindow from '../ModalWindow/ModalWindow';
import DepartmentForm from '../DepartmentForm/DepartmentForm';
import EmployeeForm from '../EmployeeForm/EmployeeForm';
import './EditButton.scss';

class EditButton extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      isOpen: false,
      body: '',
    };

    this.toggleModalWindow = this.toggleModalWindow.bind(this);
    this.openModalWindow = this.openModalWindow.bind(this);
  }

  toggleModalWindow = () => {
    this.setState((prev) => ({ ...prev, isOpen: !prev.isOpen }));
  };

  openModalWindow() {
    const { location } = this.props;

    if (location === '/departments') {
      this.setState({
        title: 'Edit department',
        isOpen: true,
        body: <DepartmentForm />,
      });
    } else {
      this.setState({
        title: 'Edit employee',
        isOpen: true,
        body: <EmployeeForm />,
      });
    }
  }

  render() {
    const { title, isOpen, body } = this.state;

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
