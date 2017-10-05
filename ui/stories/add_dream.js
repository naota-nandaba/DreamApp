const React = require('react');
const storiesOf = require('@storybook/react').storiesOf;
import 'bootstrap/dist/css/bootstrap.css';
import '../public/css/app.css'

// const DreamForm = (props) => {

//STATELESS
function DreamFormStateless(props) {

if (props.value.length > 140) {
      var color = {color: 'red'}
      var btnToggle = "disabled"
  } else {
      var color = {color: 'black'}
      var btnToggle = ""
  }


  return (
      <div className="container">
        <div className="col-xs-6 jumbotron row add_dream">

        <form>
        <input className="form-control add_input"
               type="text"
               placeholder="Your dream"
               value={props.value}
              //  onChange={updateForm}
               maxLength="140"/>
        <button type="button"
                className="btn btn-primary add_btn"
                disabled={ btnToggle }>Post</button>
        <p className="char_count"
          style= { color }>
          {props.charCount - props.value.length}</p>
      </form>
      </div>
    </div>
  );
}

//WITH STATE
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
        <div className="container">
          <div className="col-xs-6 jumbotron row add_dream">
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
          <p
            className="char_count"
            style={this.state.char_color}>
            {this.props.charCount - this.state.value.length}</p>
        </form>
        </div>
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

//STORIES BEGIN HERE
storiesOf('Add', module)
.add('(Stateful) Default', () => (

  <DreamForm charCount={ 140 }/>

))

.add('(Stateless) 141 char', () => (

  <DreamFormStateless charCount={ 140 } value="The quick brown fox jumped over the
    red wolf and then the red wolf said wtf why did you jump over me wtf this
    is so not cool don't jump over!"/>

))
