const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const DreamForm = React.createClass({
  getInitialState() {
      return {
        value: '',
        disabled: '',
        char_color: {color: 'black'},
      }
  },
  render() {
    return (
          <div className="col-xs-12 jumbotron row add_dream">
          <form>
          <input className="form-control add_input"
                 type="text"
                 placeholder="Your dream"
                 value={ this.state.value || this.props.value }
                 onChange={ this.updateForm }
                 />
          <button type="button"
                  className="btn btn-primary add_btn"
                  disabled={this.state.disabled}>
                  Post</button>
          <text
            className="char_count"
            style={this.state.char_color}>
            {this.props.charCount - this.state.value.length}</text>
        </form>
        </div>
    );
  },
  updateForm(e) {
    this.setState({value: e.target.value, disabled: "", char_color: {color: 'black'}});
    if (e.target.value.length > 140){
      this.setState({value: e.target.value, disabled: "disabled", char_color: {color: 'red'}})
    }
  },
})

module.exports = DreamForm;
