import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import Dream from './a_dream'
import Utils from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const DreamFeed = React.createClass({

  render() {

    const dreamList = this.props.posts.map((val) =>(
      <div>
      Oct 31
      <Dream value={val.body} />
        <p></p>
      </div>
    ));

    dreamList.reverse();

    return (
          <div className="col-xs-12 jumbotron row dream_feed">
          {dreamList}
          </div>
    )
  },

  /*
  refreshPosts: function () {
    this.state.client.posts(this.props.params || {})
      .then((posts) => {
        console.log(posts)
        // this.props.router.replace('/posts');
        this.setState({posts: posts})
      });
      */

  // }

});

module.exports = DreamFeed;
