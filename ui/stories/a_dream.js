const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/app.css'

const Dream = React.createClass({
  render: function () {
    return (
      <div
        className="dream"
        >
        <p className="dream_content">{this.props.value}</p>
      </div>
    )
  }
})


storiesOf('a Dream', module)
.add('(Stateless) Default', () => (
  <div className="container">
    <div className="col-xs-12 jumbotron row dream_feed">
  <Dream value="A hard-coded dream." />
    </div>
  </div>
))
