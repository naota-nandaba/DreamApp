import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const { Link } = require('react-router');

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

const InterpretNavBar = React.createClass({
  render: function () {
    return (

        <nav className="navbar">

            <div className="navbar-header">

            <ul className="nav nav-pills" role="tablist">
              <li role="presentation"> <Link to="/#">My Mu</Link></li>
              <li role="presentation" className="active"> <Link to="/interpret">Interpret</Link></li>
            </ul>

          </div>
        </nav>
    )
  }
})

module.exports = InterpretNavBar;
