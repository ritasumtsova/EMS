import React, { Component } from 'react';
import {
  Form,
  Input,
  Col,
  Button,
} from 'reactstrap';
import './SearchForm.scss';

export default class SearchForm extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <Form className="SearchForm">
        <Col xs="8">
          <Input
            className="SearchForm__input"
            type="text"
            placeholder="This field does not have functionality yet"
          />
        </Col>
        <Col className="SearchForm__btn-wrapper" xs="4">
          <Button
            className="SearchForm__btn-button"
            color="primary"
            disabled
          >
            Search
          </Button>
        </Col>
      </Form>
    );
  }
}
