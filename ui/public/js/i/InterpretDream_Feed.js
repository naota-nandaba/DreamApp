import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'

import request from 'request-promise';

const storiesOf = require('@storybook/react').storiesOf;

import Dream from '../a_dream'
import Utils from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

const InterpretDreamFeed = React.createClass({

  getInitialState() {
      return {
        display: "",
        visibility: 'hidden'
      }
  },


  render() {

    console.log("Console logging state: " + this.state.display)
    const dreamList = this.props.posts.map((val) =>(

      <div>

      <Dream value={

        val.body.split(" ").map((el) => {
          var src = "http://localhost:8000/interpret".concat("/" + el);
          var badWords = ['A', 'the', 'and', 'to', 'a', 'on', 'I', 'was', 'an', 'that', 'is'];

          if (badWords.indexOf(el) === -1) {
          return <a className="ilink"
                    onClick={this.showInterpretation}
                    href={src} el={el}><b>{ el + " " }</b></a>
          } else {
          return el + " "
          };
        })
        } />
        <p></p>

      </div>
    ));

    dreamList.reverse()

    return (
          <div>

          <div className="col-xs-12 jumbotron row dream_feed">

            <div>
              <h4>Interpretation:</h4>
              <text
                className="interpretText"
                style={{visibility: this.state.visibility}}> {this.state.display} </text>
            </div>
            <p/>

            {dreamList}
          </div>

          </div>
    )
  },

  showInterpretation(e) {

      e.preventDefault()

        console.log("New Request to " + e.currentTarget.href)

        request(e.currentTarget.href, {timeout: 2000})



        .then((response) => {
            this.setState({
              display: response,
              visibility: "visible"
            })
          })


        .catch((err) => {
          console.log('showInterpretation Broken');
          console.log("Logging request errors:")
          console.log(err.code === 'ETIMEDOUT'); //Is it a timeout error?
          console.log(err.connect === true); //Is it a connect timeout error?

        })


  },

});

module.exports = InterpretDreamFeed;
