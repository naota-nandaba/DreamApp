import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import BlogFeed from './BlogFeed'
import Footer from '../footer'

import Utils from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'


const BlogHome = React.createClass({

  render: function() {
    return (

      <div>

        <div className="container app">
          <BlogFeed />
        </div>

        <div className="container foot_contain">
          <Footer/>
        </div>

      </div>

    )
  }

})

module.exports = BlogHome;
