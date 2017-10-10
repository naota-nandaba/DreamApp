import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import NavBar from './header'

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const App = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container nav_contain">
        <NavBar />
        </div>

        <div className="row">
            {this.props.children}
        </div>

      </div>
    );
  }
})

module.exports = App;
