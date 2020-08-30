import React from 'react';

import './bird-question.css';

const BirdQuestion = ({haveCorrectAnswer, bird}) => {
  console.log(bird.name);
  const imgUrl = haveCorrectAnswer ? bird.image : "./unknown-bird.jpg";
  const birdName = haveCorrectAnswer ? bird.name : "******";
  return (
    <div className="jumbotron bird-question-card">
      <div className="imageContainer">
        <img className="questionImage" src={imgUrl} alt="Журавль"></img>
      </div>
      <div className="bird-question-info-container">
        <div className="display-6 Birdname">{birdName}</div>
        <hr className="bird-question-hr"></hr>
        <div className="bird-question-player">
          <audio className="songbird-audioSource" src={bird.audio} controls="controls"></audio>
        </div>
      </div>
    </div>
  );
};

export default BirdQuestion;