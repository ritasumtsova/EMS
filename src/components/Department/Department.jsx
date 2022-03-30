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
import AddButton from '../AddButton/AddButton';
import './Department.scss';

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
    // eslint-disable-next-line react/destructuring-assignment
    const id = this.props.match?.params?.id;
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
      <>
        <AddButton />
        <Row className="Department">
          <h2>{departmentInfo}</h2>
          <Container className="Department__info-wrapper">
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
      </>
    );
  }
}
