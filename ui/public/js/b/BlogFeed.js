import React from 'react'
import { Router, IndexRoute, Route, hashHistory } from 'react-router'
const storiesOf = require('@storybook/react').storiesOf;

import request from 'request-promise';

import Utils from '../utils';

import 'bootstrap/dist/css/bootstrap.css';
import '../../css/app.css'

import Anime from 'react-anime';

const BlogFeed = React.createClass({

  render() {

    return (
          <div>

          <div className="col-xs-12 jumbotron row dream_feed">

              <div className="row">
              <img className="jung pull-right" src={require("../../images/jung35.png")} />

              <p/>

              <ul className="benefits"><h4>Benefits of Dream Journaling</h4>
                <li className="benefit">understand self/mind
                <ul>
                  <li className="benefit">patterns</li>
                </ul></li>
                <li className="benefit">lucid dreaming
                  <ul>
                    <li className="benefit">dream control</li>
                  </ul></li>
                <li className="benefit">psychic abilities?</li>
                <li className="benefit">enhanced creativity</li>
              </ul>
              </div>

              <p/><p/>

             <div className="row">
             <img className="freud" src={require("../../images/freud60.png")} />

             <ul className='pull-right history-ul'><h4>History</h4>
              <li className="history">Sigmund Freud
                <ul>
                  <li className="history">subconcious</li>
                  <li className="history">repression</li>
                </ul>
              </li>
              <br/>
              <li className="history">Carl Jung</li>
              <ul>
                <li className="history">collective <br/>unconcious</li>
              </ul>
            </ul>
            </div>

            <p/><p/>

            <div className="row">
            <img className="murakami pull-right" src={require("../../images/murakami30.png")} />

            <p/>

            <ul className="further-reading"><h4>Further Reading</h4>
              <li className="reading"><a href="http://nymag.com/scienceofus/2016/10/keeping-a-dream-journal-helps-you-understand-yourself.html"><u>NYMag.com</u></a> (2016)</li>

              <li className="reading"><a href="http://mentalfloss.com/article/51228/5-actual-facts-about-science-dreams"><u>Mental Floss</u></a> (2013)</li>

              <li className="reading"><a href="https://www.scientificamerican.com/article/the-science-behind-dreaming/"><u>Sci. American</u></a> (2011)</li>

              <li className="reading"><a href="https://www.reddit.com/r/LucidDreaming/"><u>r/luciddreaming</u></a></li>

              <li className="reading"><a href="https://www.reddit.com/r/murakami/"><u>r/murakami</u></a></li>
            </ul>

            </div>
            </div>

            </div>
        )

      }
});

module.exports = BlogFeed;
