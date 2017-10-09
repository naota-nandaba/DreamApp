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
        dreams: [
          "The quick brown fox jumped over the red wolf and then the red wolf said wtf why did you jump over me wtf this is so not cool don't jump over!",
          "This is also a dream",
          "One last dream: I dreamt that I was a dreamer who dreamt the dreamers were dreaming DACA got dreamt.",
          "Sometimes a dreamer dreams a dream that dreamt a dream of a dream.",
          "Dreaming dreams of a dreams, I dreamt a dreamer dreams a dream.",
          "When I dream, I dream some dreams but then I dream.",
          "Dreaming a dream so do I dream when I dream a dream...",
          "People sometimes say they dream when I dream or dream",
          "Dreaming can dream"
        ],
      }
  },
  render() {
    const dreamList = this.state.dreams.map((val) =>(
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
