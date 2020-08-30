import React, { Component } from 'react';

import Header from '../header';
import BirdQuestion from '../bird-question';
import BirdAnswers from '../bird-answers';
import BirdDetails from '../bird-details';
import BirdNext from '../bird-next';

import BirdDataService, { getRandomInt } from '../../services/bird-data-service';
import './app.css';


export default class App extends Component {

  birds = new BirdDataService();

  state = {
    gameStep: 0,
    randomAnserNum: getRandomInt(6),
    haveCorrectAnswer: true,
    displayNum: null,
    answering: [false, false, false, false, false, false],
  }


  render() {
    console.log('Hello World');
    console.log(this.birds.getBirdsStep(4));

    return (
      <div className="songBird-app container">
        Application Songbird
        <Header />

        <BirdQuestion
          gameStep={this.state.gameStep}
          randomAnserNum={this.state.randomAnserNum}
          haveCorrectAnswer={this.state.haveCorrectAnswer}
          bird={(this.birds.getBirdsStep(this.state.gameStep))[this.state.randomAnserNum]}
        />
        <div className="row my-2">
          <BirdAnswers gameStep={this.state.gameStep} />

          <BirdDetails gameStep={this.state.gameStep} />

          <BirdNext active={this.state.haveCorrectAnswer} />
        </div>

      </div>
    );
  }
}





