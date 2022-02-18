import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../API';

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
    const dataToRender = departments.map(({ id, name }) => <div key={id}><Link to={`/departments/${id}`}>{`${name} department`}</Link></div>);
    const element = error
      ? <h2>404 Not Found</h2>
      : (
        <div>
          <h2>Departments page</h2>
          {departments.length ? dataToRender : null}
        </div>
      );

    return element;
  }
}
