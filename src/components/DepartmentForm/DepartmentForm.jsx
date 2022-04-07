import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import './DepartmentForm.scss';

class DepartmentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Form className="DepartmentForm">
        <Input className="DepartmentForm__input" type="text" placeholder="Name" />
        <Input className="DepartmentForm__input" type="text" placeholder="Description" />
        <Button className="DepartmentForm__btn" color="primary" disabled type="Submit">Save</Button>
      </Form>
    );
  }
}

export default DepartmentForm;
