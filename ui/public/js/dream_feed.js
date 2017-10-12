import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import Dream from './a_dream'
import Utils from './utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

var moment = require('moment');

const DreamFeed = React.createClass({
  render() {

    const dreamList = this.props.posts.map((val) =>(
      <div>

      <text className="date"><b>{moment.utc(val.created_at).local().format('MM/DD/YYYY, h:mm a')}</b></text>

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
  }

});

module.exports = DreamFeed;
