const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/app.css'

const DreamFeed = React.createClass({
  getInitialState() {
      return {
        dreams: [
        "The quick brown fox jumped over the red wolf and then the red wolf said wtf why did you jump over me wtf this is so not cool don't jump over!",
        "This is also a dream",
        "One last dream: I dreamt that I was a dreamer who dreamt the dreamers were dreaming DACA got dreamt."
        ],
      }
  },
  render() {
    const dreamList = this.state.dreams.map((val) =>(
      <Dream value={val}
              createdAt="10/5/17" />
    ));

    return (
        <div className="container">
          <div className="col-xs-6 jumbotron row dream_feed">
            {dreamList}
          </div>
      </div>
    );
  },
})

const Dream = React.createClass({

  render: function () {
    return (
      <div
        className="dream"
        >
        <p className="dream_content_time"><b>{this.props.createdAt}</b>
        </p><p className="dream_content">{this.props.value}</p>
      </div>
    )
  }
})

storiesOf('Display', module)
.add('(Stateful) Default', () => (

  <DreamFeed />

))
