import React from 'react';

import './game-over-screen.css';

const GameOverScreen = ({ score, onGameRestart}) => {
  if (score < 30) {
    return (
      <div className="jumbotron game-over-container">
        <h1 className="display-3">Поздравляем!</h1>
        <p className="lead">
          <span>{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</span>
        </p>
        <hr className="my-4"></hr>
        <div
          className="restart-game-button"
          onClick={onGameRestart}
        >
          <span>Попробовать еще раз?</span>
        </div>
      </div>
    );
  }
  return (
    <div className="jumbotron game-over-container">
      <h1 className="display-3">Поздравляем!</h1>
      <p className="lead">
        <span>{`Вы прошли викторину и набрали ${score} из 30 возможных баллов`}</span>
      </p>
      <hr className="my-1"></hr>
      <h1 className="display-3">Aбсолютная победа!</h1>
      <div
        className="restart-game-button"
        onClick={onGameRestart}
      >
        <span>Попробовать еще раз?</span>
      </div>
    </div>
  );


};

export default GameOverScreen;