import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import BlogNavBar from './BlogHeader'

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

const BlogApp = React.createClass({
  render: function () {
    return (
      <div>
        <div className="container nav_contain">
        <BlogNavBar />
        </div>

        <div>
            {this.props.children}
        </div>

      </div>
    );
  }
})

module.exports = BlogApp;
