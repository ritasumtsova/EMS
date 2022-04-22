import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';

import API from '../../../API';
import withLoader from '../../../HOC/withLoader';
import AddButton from '../../AddButton/AddButton';
import EditButton from '../../EditButton/EditButton';
import EmployeeForm from '../../EmployeeForm/EmployeeForm';
import './Department.scss';

class Department extends Component {
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
    const { toggleLoader } = this.props;

    toggleLoader();

    const id = this.props.match?.params?.id;
    const { error, data } = await API.getDepartmentInfo(id);

    if (error) {
      this.setState({ error: data });
    } else {
      this.setState({ departmentInfo: data.description });
    }

    toggleLoader();
  };

  render() {
    const { departmentInfo, error } = this.state;
    const modalForm = <EmployeeForm />;

    if (error) {
      <Redirect to="/error" />;
    }

    return (
      <>
        <AddButton title="Add employee " modalForm={modalForm} />
        <Row className="Department">
          <h2>{departmentInfo}</h2>
          <Container className="Department__info-wrapper">
            <Col>
              <div>Here will be some information about an employee</div>
            </Col>
            <Col className="Department__info-wrapper-btn">
              <EditButton title="Edit employee " modalForm={modalForm} />
              <Button color="danger" disabled>
                Delete
              </Button>
            </Col>
          </Container>
        </Row>
      </>
    );
  }
}

export default withLoader(Department);
