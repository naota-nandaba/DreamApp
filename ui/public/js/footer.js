const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const Footer = React.createClass({
  render: function () {
    return (

      <nav className="navbar navbar-bottom">
          <a className="navbar-brand footer-brand"
             href="#"> © Naota Nandaba 2017 </a>
      </nav>

    )
  }
})

module.exports = Footer;
