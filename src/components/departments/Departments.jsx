import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { PATH, TOKEN } from '../API';
const axios = require('axios');


class Departments extends Component {
    constructor (props) {
      super(props);
    
      this.state = {
        departments : [],
        error: null
      };
    }

    componentDidMount () {
        axios({
            method: 'get',
            url: `${PATH}department`,
            headers: {
                Authorization: TOKEN
            }
        })
        .then(response => this.setState({departments: response.data}))
        .catch(error => this.setState({error: error}))
    }
    
    render () {
        const { departments, error } = this.state;
        const dataToRender = departments.map(({id, name}) => {
            return <div key={id}>
                <Link to={`/departments/${id}`}>{`${name} department`}</Link>
            </div> 
        })

        if (error) {
            return <h2>404 Not Found/</h2>
        } else {
            return (
                <div>
                    <h3>Departments page</h3>
                    {departments.length ? dataToRender : null} 
                </div>
            );
        }
    }
}

export default Departments;
