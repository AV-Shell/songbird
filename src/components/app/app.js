import React, { Component } from 'react';

import Header from '../header';
import BirdQuestion from '../bird-question';
import BirdAnswers from '../bird-answers';
import BirdDetails from '../bird-details';
import BirdNext from '../bird-next';

import BirdDataService from '../../services/bird-data-service';
import './app.css';


export default class App extends Component {

  birds = new BirdDataService();

  state = {
    gameStep: 0,
  };

  render() {
    console.log('Hello World');
    console.log(this.birds.getBirdsStep(4));

    return (
          <div className="songBird-app">
            Application Songbird
            <Header />

            <BirdQuestion gameStep={this.state.gameStep} />

            <BirdAnswers gameStep={this.state.gameStep} />

            <BirdDetails  gameStep={this.state.gameStep}/>

            <BirdNext />

          </div>
    );
  }
}





