import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import InterpretNavBar from './InterpretHeader'

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

const InterpretApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container nav_contain">
        <InterpretNavBar />
        </div>

        <div>
            {this.props.children}
        </div>

      </div>
    );
  }
})

module.exports = InterpretApp;
