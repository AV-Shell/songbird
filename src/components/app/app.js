import React, { Component } from 'react';

import Header from '../header';
import BirdQuestion from '../bird-question';
import BirdAnswers from '../bird-answers';
import BirdDetails from '../bird-details';
import BirdNext from '../bird-next';
import GameOverScreen from '../game-over-screen';
import BirdDataService, { getRandomInt } from '../../services/bird-data-service';
import './app.css';


export default class App extends Component {

  birds = new BirdDataService();

  state = {
    gameStep: 0,
    randomAnserNum: getRandomInt(6),
    haveCorrectAnswer: false,
    displayNum: null,
    answering: [false, false, false, false, false, false],
    score: 0,
    gameOver: false,
  }

  allSoundStop = () => {
    document.querySelectorAll('.songbird-audioSource').forEach((e) => {
      const el = e;
      el.pause();
      el.currentTime = 0;
    });
  }

  winloseSoundStop = () => {
    document.querySelectorAll('.audio-win-error').forEach((e) => {
      const el = e;
      el.pause();
      el.currentTime = 0;
    });
  }


  onAnswer = (id) => {
    this.setState((currentState) => {
      if (currentState.haveCorrectAnswer) {
        return {
          displayNum: (id - 1),
        }
      }
      else {
        let isAnswering = id === (currentState.randomAnserNum + 1) ? true : false;
        let tmpScore = 0;

        let arrr = currentState.answering.map((item) => item);
        arrr[id - 1] = true;
        if (isAnswering) {
          this.allSoundStop();
          document.querySelector('.audioWin').play();
          arrr.forEach(element => {
            if (!element) {
              tmpScore++;
            }
          });
        } else {
          this.winloseSoundStop();
          document.querySelector('.audioError').play();
        }
        return {
          displayNum: (id - 1),
          answering: arrr,
          haveCorrectAnswer: isAnswering,
          score: currentState.score + tmpScore,

        }
      }
    });
  };

  onNextLevel = () => {
    this.setState((currentState) => {
      if (currentState.gameStep >= 5) {
        return {
          gameOver: true,
        }
      }
      else {
        return {
          gameStep: (currentState.gameStep + 1),
          randomAnserNum: getRandomInt(6),
          haveCorrectAnswer: false,
          displayNum: null,
          answering: [false, false, false, false, false, false],
        }
      }
    });
  }

  onGameRestart = () => {
    this.setState(() => {
      return {
        gameStep: 0,
        randomAnserNum: getRandomInt(6),
        haveCorrectAnswer: false,
        displayNum: null,
        answering: [false, false, false, false, false, false],
        score: 0,
        gameOver: false,
      }
    });
  }


  render() {
    if (this.state.gameOver) {
      return (
        <div className="songBird-app container">
          <Header
            score={this.state.score}
            gameStep={this.state.gameStep}
          />
          <GameOverScreen
            score={this.state.score}
            onGameRestart={this.onGameRestart}
          />
        </div>
      )
    }
    return (
      <div className="songBird-app container">
        <Header
          score={this.state.score}
          gameStep={this.state.gameStep}
        />

        <BirdQuestion
          gameStep={this.state.gameStep}
          randomAnserNum={this.state.randomAnserNum}
          haveCorrectAnswer={this.state.haveCorrectAnswer}
          bird={(this.birds.getBirdsStep(this.state.gameStep))[this.state.randomAnserNum]}

        />
        <div className="row my-2">
          <BirdAnswers
            gameStep={this.state.gameStep}
            randomAnserNum={this.state.randomAnserNum}
            haveCorrectAnswer={this.state.haveCorrectAnswer}
            answering={this.state.answering}
            birds={(this.birds.getBirdsStep(this.state.gameStep))}
            onAnswer={this.onAnswer}
          />

          <BirdDetails
            birds={(this.birds.getBirdsStep(this.state.gameStep))}
            displayNum={this.state.displayNum}
          />

          <BirdNext active={this.state.haveCorrectAnswer}
            onNextLevel={this.onNextLevel}
          />
        </div>
        <audio className="audioError  audio-win-error songbird-audioSource" src="./error.mp3"></audio>
        <audio className="audioWin  audio-win-error songbird-audioSource" src="./win.mp3"></audio>
      </div>
    );
  }
}





