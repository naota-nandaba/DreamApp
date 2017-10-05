const React = require('react');
const ReactDOM = require('react-dom');
const style = require('../css/app.css');

const App = React.createClass({
  render: function () {
    return (
      <h1>Hello world</h1>
    );
  }
})

// Wait for the window to load
window.onload = function () {
  const exampleApp = document.querySelector('#example-app');

  ReactDOM.render(
    <App/>,
    exampleApp
  );
}
