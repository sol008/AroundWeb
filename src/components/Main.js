import React from 'react';
import {Register} from './Register';
import {Link, Route} from 'react-router-dom';
import {Login} from './Login';
import {Home} from './Home';

export class Main extends React.Component{
    render() {
        return(
            <div className="main">
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={Home} />
                <Link to="/register">Register</Link><br />
                <Link to="/login">Login</Link><br />
                <Link to="/home">Home</Link><br />
            </div>
        );
    }
}