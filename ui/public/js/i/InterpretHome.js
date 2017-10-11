import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import DreamForm from '../add_dream'
import InterpretDreamFeed from './InterpretDream_Feed'
import Footer from '../footer'

import Utils from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'


const InterpretHome = React.createClass({

  getInitialState() {
      return {
        posts: [],
        client: Utils.createClient()
      };
  },

  componentWillMount: function () {
    this.refreshPosts();
  },

  render: function() {
    return (

      <div>

        <div className="container app">
          <InterpretDreamFeed posts= {this.state.posts} />
        </div>

        <div className="container foot_contain">
          <Footer/>
        </div>

      </div>

    )
  },

  refreshPosts: function () {
    this.state.client.posts(this.props.params || {})
      .then((posts) => {
        this.setState({posts: posts})
      });
    },

  addPost(post) {
    this.setState(function (prevState){
      return {posts: prevState.posts.concat(post)}
    })
  }

})

module.exports = InterpretHome;
