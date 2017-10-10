import React from 'react'
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
        <p className="dream_content">{this.props.value}</p>
      </div>
    )
  }
})

module.exports = Dream;
