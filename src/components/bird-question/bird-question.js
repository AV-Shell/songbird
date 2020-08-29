import React from 'react';

import './bird-question.css';

const BirdQuestion = () => {
  return (
    <div className="jumbotron bird-question-card">
      <div className="imageContainer">
        <img className="questionImage" src="https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg" alt="Журавль"></img>
      </div>
      <div className="bird-question-info-container">
        <div className="display-6 Birdname">Журавль</div>
        <hr className="my-6"></hr>
        <div className="bird-question-player">
          <audio src="URL" controls="controls"></audio>
        </div>
      </div>
    </div>
  );
};

export default BirdQuestion;