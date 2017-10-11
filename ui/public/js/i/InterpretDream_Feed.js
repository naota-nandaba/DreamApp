import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import Dream from '../a_dream'
import Utils from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

const InterpretDreamFeed = React.createClass({

  render() {

    const dreamList = this.props.posts.map((val) =>(

      <div>
      <Dream value={

        val.body.split(" ").map(function (el){
          var src = "http://localhost:8000/interpret".concat("/" + el);
          var badWords = ['A', 'the', 'and', 'to', 'a', 'on', 'I', 'was', 'an', 'that', 'is'];

          if (badWords.indexOf(el) === -1) {
          return <a href={src}>{ el + " " }</a>
          } else {
          return el + " "
          };
        })
        } />
        <p></p>
      </div>
    ));

    return (
          <div className="col-xs-12 jumbotron row dream_feed">
            {dreamList}
          </div>
    )
  }

});

module.exports = InterpretDreamFeed;
