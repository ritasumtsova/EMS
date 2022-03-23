import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
    const getDepartments = async () => {
      const data = await API.getDepartments();

      if (data.status !== 200) {
        this.setState({ error: data });
      } else {
        this.setState({ departments: data.data });
      }
    };

    getDepartments();
  }

  render() {
    const { departments, error } = this.state;
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

    const element = error
      ? <h2>404 Not Found</h2>
      : (
        <div>{departments.length ? dataToRender : null}</div>
      );

    return element;
  }
}
