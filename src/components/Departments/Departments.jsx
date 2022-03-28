import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Button,
  ButtonGroup,
  Col,
  Row,
} from 'reactstrap';
import API from '../../API';
import './Departments.css';

export default class Departments extends Component {
  constructor(props) {
    super(props);

    this.state = {
      departments: [],
      error: null,
    };
  }

  componentDidMount() {
    this.getDepartments();
  }

  getDepartments = async () => {
    const { error, data } = await API.getDepartments();

    if (error) {
      this.setState({ error: data });
    } else {
      this.setState({ departments: data });
    }
  };

  render() {
    const { departments, error } = this.state;

    if (error) {
      <Redirect to="/error" />;
    }

    const dataToRender = departments.map(({ id, name }) => (
      <Row key={id} className="Departments">
        <Col>
          <p className="Departments__name">{`${name} department`}</p>
        </Col>
        <Col>
          <ButtonGroup>
            <Button color="danger" disabled>Delete</Button>
            <Button color="primary" disabled>Edit</Button>
            <Button color="success">
              <Link to={`/departments/${id}`} className="Departments__btn--link">Employees</Link>
            </Button>
          </ButtonGroup>
        </Col>
      </Row>
    ));

    return <div>{departments.length ? dataToRender : null}</div>;
  }
}
