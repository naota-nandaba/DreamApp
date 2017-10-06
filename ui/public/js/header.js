const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const NavBar = React.createClass({
  render: function () {
    return (


        <nav className="navbar">

            <div className="navbar-header">

            <ul className="nav nav-pills" role="tablist">
              <li role="presentation" className="active"> <a className="myMu" href="#">My Mu</a></li>
              <li role="presentation" className="unactive"> <a className="interpret" href="#">Interpret</a></li>
              <li role="presentation"> <a className="whyMu" href="#">Why Mu?</a></li>
            </ul>

            </div>

        </nav>


    )
  }
})

module.exports = NavBar;
