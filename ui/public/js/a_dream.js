import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const Dream = React.createClass({
  render: function () {
    return (
      <div
        className="dream"
        >
        {/* <p className="dream_content_time"><b>{this.props.createdAt}</b></p> */}
        <p className="dream_content">{this.props.value}</p>
      </div>
    )
  }
})

module.exports = Dream;
