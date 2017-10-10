import React from 'react'
import ReactDOM from 'react-dom';
import {render} from 'react-dom'
import {Router, IndexRoute, Route} from 'react-router'
import {hashHistory} from 'react-router'

import DreamForm from './add_dream'
import DreamFeed from './dream_feed'
import Dream from './a_dream'
import NavBar from './header'
import Footer from './footer'
import Home from './home'
import App from './app'

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

// Wait for the window to load

window.onload = function() {
  const DreamApp = document.querySelector('#App');

  ReactDOM.render(
    <Router history={hashHistory}>

    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
    </Route>

  </Router>, DreamApp);
}
