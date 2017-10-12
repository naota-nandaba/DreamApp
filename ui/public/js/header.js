import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const { Link } = require('react-router');
const storiesOf = require('@storybook/react').storiesOf;

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const NavBar = React.createClass({
  render: function () {
    return (

        <nav className="navbar">

            <div className="navbar-header">

            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="active" data-toggle="tab"> <Link to="/#">My Mu</Link></li>
              <li role="presentation" className="unactive"> <Link to="/interpret">Interpret</Link></li>
              <li role="presentation" className="unactive"> <Link to="/blog">Why Mu?</Link></li>
            </ul>

          </div>

          <p className="pull-right logo">mu</p>

        </nav>
    )
  }
})

module.exports = NavBar;
  
