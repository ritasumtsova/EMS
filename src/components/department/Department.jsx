import React, { Component } from 'react';
import { PATH, TOKEN } from '../API';
const axios = require('axios');

class Department extends Component {
    constructor (props) {
        super(props)

        this.state = {
            departmentInfo: null, 
            error: null
        }
    }

    componentDidMount () {
        const id = this.props.match.params.id || null;

        axios({
            method: 'get',
            url: `${PATH}department/${id}`,
            headers: {
                Authorization: TOKEN
            }
        })
        .then(response => this.setState({departmentInfo: response.data.description}))
        .catch(error => this.setState({error: error}))
    }
    
    render () {
        const { departmentInfo, error } = this.state;

        if (error) {
            return <h2>404 Not Found</h2>
        } else {
            return <div>{departmentInfo}</div>
        }
    }
}

export default Department;


