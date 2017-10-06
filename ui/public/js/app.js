const React = require('react');
const ReactDOM = require('react-dom');

const DreamForm = require('./add_dream')
const DreamFeed = require('./dream_feed')
const Dream = require('./a_dream')
const NavBar = require('./header')
const Footer = require('./footer')

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

//App

const App = React.createClass({
  render: function () {
    return (
      <div>

      <div className="container nav_contain">
      <NavBar />
      </div>

      <div className="container app">
      <DreamForm charCount={ 140 } />
      <DreamFeed />
      </div>

      <div className="container foot_contain">
      <Footer />
      </div>

      </div>

    );
  }
})

// Wait for the window to load
window.onload = function () {
  const DreamApp = document.querySelector('#App');

  ReactDOM.render(
    <App/>,
    DreamApp
  );
}
