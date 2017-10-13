import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;  

import request from 'request-promise';

import Dream from '../a_dream'
import Utils from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

import Anime from 'react-anime';

var moment = require('moment');

const InterpretDreamFeed = React.createClass({

  getInitialState() {
      return {
        display: "",
        interpretId: "",
        iHeader: "Click a word to interpret"
      }
  },


  render() {

    const dreamList = this.props.posts.map((val) =>(
      <div>

      <text className="date"><b>{moment.utc(val.created_at).local().format('MM/DD/YYYY, h:mm a')}</b></text>

      <Dream value={

        val.body.split(" ").map((el) => {
          var src = "http://localhost:8000/interpret".concat("/" + el);
          var badWords = ['A', 'the', 'and', 'to', 'a', 'on', 'I', 'was', 'an', 'that', 'is'];

          if (badWords.indexOf(el) === -1) {
          return <a className="ilink"
                    onClick={this.showInterpretation}
                    href={src} id={val.id}><b>{ el + " " }</b></a>
          } else {
          return el + " "
          };
        })
      } id={val.id}
         />

        <p/>

        <div>

        <text
          className="interpretText"
          id={val.id}
          >{ val.id != this.state.interpretId ? "" : this.state.display}</text>

        </div>
        <p/>

      </div>
    ));


    dreamList.reverse()

    return (
          <div>

          <div className="col-xs-12 jumbotron row dream_feed">
            <Anime delay={(e, i) => i * 100}
          scale={[.1, .9]}>
            <div>
              <h4>{this.state.iHeader}</h4>
            </div>
            </Anime>
            <p/>
            {dreamList}
          </div>

          </div>
    )
  },

  showInterpretation(e) {

      var targetId = e.currentTarget.id;

      e.preventDefault()

        console.log("New Request to " + e.currentTarget.href)

        request(e.currentTarget.href, {timeout: 2000})

        .then((response) => {

            this.setState({
              display: response,
              interpretId: targetId,
              iHeader: ""
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
