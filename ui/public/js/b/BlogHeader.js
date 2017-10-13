import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const { Link } = require('react-router');

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

import Anime from 'react-anime';

const BlogNavBar = React.createClass({
  render: function () {
    return (

        <nav className="navbar">

            <div className="navbar-header">

            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="unactive"> <Link to="/#">My Mu</Link></li>
              <li role="presentation" className="unactive"> <Link to="/interpret">Interpret</Link></li>
              <li role="presentation" className="active"> <Link to="/blog">Why Mu?</Link></li>
            </ul>

          </div>

          <Anime delay={(e, i) => i * 100}
        scale={[.1, .9]}>
          <p className="pull-right logo">mu</p>
          </Anime>

        </nav>
    )
  }
})

module.exports = BlogNavBar;
