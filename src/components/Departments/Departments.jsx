import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {
  Button,
  Col,
  Row,
} from 'reactstrap';
import API from '../../API';
import withLoader from '../../HOC/withLoader';
import SearchForm from '../SearchForm/SearchForm';
import DepartmentForm from '../DepartmentForm/DepartmentForm';
import AddButton from '../AddButton/AddButton';
import EditButton from '../EditButton/EditButton';
import './Departments.scss';

class Departments extends Component {
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
    const { toggleLoader } = this.props;

    toggleLoader();

    const { error, data } = await API.getDepartments();

    if (error) {
      this.setState({ error: data });
    } else {
      this.setState({ departments: data });
    }

    toggleLoader();
  };

  render() {
    const { departments, error } = this.state;
    const body = <DepartmentForm />;

    if (error) {
      <Redirect to="/error" />;
    }

    const dataToRender = departments.map(({ id, name }) => (
      <Row key={id} className="Departments">
        <Col>
          <span className="Departments__name">{`${name} department`}</span>
        </Col>
        <Col className="Departments__btn-wrapper">
          <Link to={`/departments/${id}`} className="Departments__btn--link">
            <Button color="success">Employees</Button>
          </Link>
          <EditButton title="Edit the department" body={body} />
          <Button color="danger" disabled>Delete</Button>
        </Col>
      </Row>
    ));

    return (
      <div>
        <SearchForm />
        <AddButton title="Add new department " body={body} />
        {departments.length ? dataToRender : null}
      </div>
    );
  }
}

export default withLoader(Departments);
