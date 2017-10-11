import React from 'react'
import Utils from './utils';
const storiesOf = require('@storybook/react').storiesOf;

import 'bootstrap/dist/css/bootstrap.css';
import '../css/app.css'

const DreamForm = React.createClass({

  getInitialState() {
      return {
        post: {
          body: '',
        },
        client: Utils.createClient(),
        disabled: '',
        char_color: {color: 'black'},
      }
  },

  render() {

    return (
          <div className="col-xs-12 jumbotron row add_dream">

            <form onSubmit={this.save}>

              <input className="form-control add_input"
                     type="text"
                     placeholder="Your dream"
                     name="body"
                     value={ this.state.post.body }
                     onChange={ this.onChange }
                     />

              <button
                      className="btn btn-primary add_btn"
                      disabled={this.state.disabled}>
                      Post</button>

              <text
                className="char_count"
                style={this.state.char_color}>
                <b>{this.props.charCount - this.state.post.body.length}</b></text>

          </form>

        </div>

    );
  },

  save: function (e) {
    e.preventDefault();
    console.log('submitting')
    this.setState(({post}) => {
      this.state.client
        .createPost(post)
        .then((post) => {
           this.props.onSave(post)
        })
    })
  },

  onChange(e) {

    if (e.target.value.length <= 141){
      this.setState({
        disabled: "",
        char_color: {color: 'black'}
      });
    }
    if (e.target.value.length > 140){
      this.setState({
        disabled: "disabled",
        char_color: {color: 'red'}
      });
    }

    console.log(this.state.post.body);

    const {name, value} = e.target;

    this.setState(({post}) => {
      return { post: Object.assign({}, post, {[name]: value}) };
    });

  }

})

module.exports = DreamForm;
