import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../API';


class Departments extends Component {
    constructor (props) {
      super(props);
    
      this.state = {
        departments : [],
        error: null
      };
    }

    componentDidMount () {
        const getDepartments = async () => {
            const data = await API.getDepartments();

            if (data.status === 200) {
                this.setState({departments: data.data});
            } else {
                this.setState({error: data});
            }
        };

        getDepartments();
    }
    
    render () {
        const { departments, error } = this.state;
        const dataToRender = departments.map(({id, name}) => {
            return <div key={id}>
                <Link to={`/departments/${id}`}>{`${name} department`}</Link>
            </div> 
        });

        if (error) {
            return <h2>404 Not Found</h2>;
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
