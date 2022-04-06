import React, { Component } from 'react';
import { Col, Button } from 'reactstrap';
import './AddButton.scss';

export default class AddButon extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const { text } = this.props;
    return (
      <Col className="AddButton" xs="4">
        <Button
          className="AddButton__btn"
          color="success"
          size="lg"
          block
          disabled
        >
          {text}
        </Button>
      </Col>
    );
  }
}
