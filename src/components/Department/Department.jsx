import React, { Component } from 'react';
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
    const getDepartmentInfo = async () => {
      const { match: { params: { id } } } = this.props || null;
      const data = await API.getDepartmentInfo(id);

      if (data.status !== 200) {
        this.setState({ error: data });
      } else {
        this.setState({ departmentInfo: data.data.description });
      }
    };

    getDepartmentInfo();
  }

  render() {
    const { departmentInfo, error } = this.state;
    const element = error
      ? <h2>404 Not Found</h2>
      : (
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

    return element;
  }
}
