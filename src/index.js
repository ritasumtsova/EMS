import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Login from "./components/login/Login";
import Departments from "./components/departments/Departments";
import Department from "./components/department/Department";
import Error from "./components/error/Error";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path="/" component={Login}/>
                    <Route exact path="/departments" component={Departments}></Route>
                    <Route path="/departments/:id" component={Department}></Route>
                    <Route path="*" component={Error}></Route> 
                </Switch>
            </App>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);
