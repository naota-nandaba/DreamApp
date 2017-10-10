import React from 'react'
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import DreamForm from './add_dream'
import DreamFeed from './dream_feed'
import Footer from './footer'

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'


const Home = React.createClass({
  render: function() {
    return (

      <div>

        <div className="container app">
          <DreamForm charCount={140}/>
          <DreamFeed/>
        </div>

        <div className="container foot_contain">
          <Footer/>
        </div>

      </div>

    )
  }
})

module.exports = Home;
