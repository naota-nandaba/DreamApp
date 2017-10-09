import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import Dream from './a_dream'

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const DreamFeed = React.createClass({
  getInitialState() {
      return {
        posts: [],
      }
  },
  render() {
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
})

module.exports = DreamFeed;
