import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import Dream from './a_dream'
import Utils from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const DreamFeed = React.createClass({

  getInitialState() {
      return {
        posts: ["Test dream."],
        client: Utils.createClient()
      };
  },

  componentWillMount: function () {
    this.refreshPosts();
  },

  render() {
    const {query, pathname} = this.props.location;

    if (query.refresh) {
      this.refreshPosts();
      console.log('Refreshing');
    }

    const dreamList = this.state.posts.map((val) =>(
      <div>
      <Dream value={val} />
        <p></p>
      </div>
    ));

    return (
          <div className="col-xs-12 jumbotron row dream_feed">
            {dreamList}
          </div>
    )
  },

  isEditing: function (pathname) {
    return !(/posts\/new/.exec(pathname))
  },

  refreshPosts: function () {
    this.state.client.posts(this.props.params || {})
      .then((posts) => {
        console.log(posts)
        this.props.router.replace('/posts');
        this.setState({posts: posts})
      });
  }

});

module.exports = DreamFeed;
