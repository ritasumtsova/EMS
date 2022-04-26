import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import {
  Button,
  Col,
  Container,
  Row,
} from 'reactstrap';

import DepartmentsAPI from '../../../API/Departments';
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
      employees: [],
    };
  }

  componentDidMount() {
    this.getDepartmentInfo();
  }

  getDepartmentInfo = async () => {
    const { toggleLoader } = this.props;

    toggleLoader();

    const id = this.props.match?.params?.id;
    const { error, data } = await DepartmentsAPI.getDepartmentInfo(id);

    if (error) {
      this.setState({ error: data });
    } else {
      this.setState({
        departmentInfo: data.description,
        employees: data.employees,
      });
    }

    toggleLoader();
  };

  render() {
    const { departmentInfo, employees, error } = this.state;
    const modalForm = <EmployeeForm />;
    const employeesToRender = employees.map((employee) => (
      <Container key={employee._id} className="Department__info-wrapper">
        <Col className="Department__info-wrapper-info">
          <div>
            <span className="Department__info-wrapper-info-title">Name</span>
            <span>{`${employee.firstName} ${employee.lastName}`}</span>
          </div>
          <div>
            <span className="Department__info-wrapper-info-title">Email</span>
            <span>{employee.email}</span>
          </div>
        </Col>
        <Col className="Department__info-wrapper-btn">
          <EditButton title="Edit employee " modalForm={modalForm} />
          <Button color="danger" disabled>
            Delete
          </Button>
        </Col>
      </Container>
    ));

    if (error) {
      <Redirect to="/error" />;
    }

    return (
      <>
        <AddButton title="Add employee " modalForm={modalForm} />
        <Row className="Department">
          <h2>{departmentInfo}</h2>
          {employeesToRender.length ? employeesToRender : <div>Has no employees yet</div>}
        </Row>
      </>
    );
  }
}

export default withLoader(Department);
