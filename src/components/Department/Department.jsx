import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from 'reactstrap';
import API from '../../API';
import './Department.css';

export default class Department extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departmentInfo: null,
      error: null,
    };
  }

  componentDidMount() {
    this.getDepartmentInfo();
  }

  getDepartmentInfo = async () => {
    const { match: { params: { id } } } = this.props || null;
    const { error, data } = await API.getDepartmentInfo(id);

    if (error) {
      this.setState({ error: data });
    } else {
      this.setState({ departmentInfo: data.description });
    }
  };

  render() {
    const { departmentInfo, error } = this.state;

    if (error) {
      <Redirect to="/error" />;
    }

    return (
      <Row className="Department">
        <h2>{departmentInfo}</h2>
        <Container className="Department__infowrapper">
          <Col>
            <div>Here will be some information about an employee</div>
          </Col>
          <Col>
            <ButtonGroup>
              <Button color="danger" disabled>
                Delete
              </Button>
              <Button color="primary" disabled>
                Edit
              </Button>
            </ButtonGroup>
          </Col>
        </Container>
      </Row>
    );
  }
}
