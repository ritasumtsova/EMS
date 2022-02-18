import React, { Component } from 'react';
import API from '../API';

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
    const element = error ? <h2>404 Not Found</h2> : <div>{departmentInfo}</div>;

    return element;
  }
}
