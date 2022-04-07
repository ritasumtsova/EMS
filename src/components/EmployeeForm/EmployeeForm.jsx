import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import './EmployeeForm.scss';

export class EmployeeForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Form className="EmployeeForm">
        <Input className="EmployeeForm__input" type="text" placeholder="Name" />
        <Input className="EmployeeForm__input" type="text" placeholder="Lastname" />
        <Input className="EmployeeForm__input" type="text" placeholder="Username" />
        <Input className="EmployeeForm__input" type="email" placeholder="Email" />
        <Button className="EmployeeForm__btn" color="primary" disabled type="Submit">Save</Button>
      </Form>
    );
  }
}

export default EmployeeForm;
