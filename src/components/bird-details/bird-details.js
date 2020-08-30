import React from 'react';

import './bird-details.css';

const BirdDetails = ({ displayNum, birds }) => {

  if (displayNum === null) {
    return (
      <div className="bird-details col-md-6 mb-2">
        <div className="card border-secondary bird-details-card">
          <div className="card-body d-flex flex-wrap justify-content-start align-items-center">
            <p className="card-text">Послушайте плеер. А затем попробуйте угадать птицу, выбрав её из списка.</p>

          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bird-details col-md-6 mb-2">
      <div className="card border-secondary bird-details-card">
        {/* <div className="">Header</div> */}
        <div className="card-body d-flex flex-wrap justify-content-start align-items-center">
          <img className="bird-detail-image" src={birds[displayNum].image} alt={birds[displayNum].name}></img>
          <div className="bird-detail-container">
            <h4 className="card-title">{birds[displayNum].name}</h4>
            <hr className="bird-detail-border"></hr>
            <h4 className="card-title">{birds[displayNum].species}</h4>
            <hr className="bird-detail-border"></hr>
          </div>
          <div className="bird-detail-player">
            <audio className="songbird-audioSource" src={birds[displayNum].audio} controls="controls"></audio>
          </div>
          <p className="card-text">{birds[displayNum].description}</p>
        </div>
      </div>
    </div>

  );
}

export default BirdDetails;