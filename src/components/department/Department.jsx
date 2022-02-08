import React, { Component } from 'react';
import API from '../../API';

class Department extends Component {
    constructor (props) {
        super(props)

        this.state = {
            departmentInfo: null, 
            error: null
        }
    }

    componentDidMount () {
        const getDepartmentInfo = async () => {
            const id = this.props.match.params.id || null;
            const data = await API.getDepartmentInfo(id);

            if (data.status === 200) {
                this.setState({departmentInfo: data.data.description});
            } else {
                this.setState({error: data});
            }
        };

        getDepartmentInfo();
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


