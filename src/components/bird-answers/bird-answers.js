import React from 'react';

import './bird-answers.css';

const BirdAnswers = () => {
  return (
    <div className="bird-answers col-md-6 mb-2">
      <ul className="list-group bird-answers-container">
        <li className="bird-answer-container list-group-item d-flex justify-content-start align-items-center">
          <span className="bird-answer-incorrect bande-point badge badge-primary badge-pill">.</span>
          <span>Ворон</span>
        </li>
        <li className="bird-answer-container list-group-item d-flex justify-content-start align-items-center">
          <span className="bird-answer-correct bande-point badge badge-primary badge-pill">.</span>
          <span>Журавль</span>
        </li>
        <li className="bird-answer-container list-group-item d-flex justify-content-start align-items-center">
          <span className="bande-point badge badge-primary badge-pill">.</span>
          <span>Ласточка</span>
        </li>
        <li className="bird-answer-container list-group-item d-flex justify-content-start align-items-center">
          <span className="bande-point badge badge-primary badge-pill">.</span>
          <span>Козодой</span>
        </li>
        <li className="bird-answer-container list-group-item d-flex justify-content-start align-items-center">
          <span className="bande-point badge badge-primary badge-pill">.</span>
          <span>Кукушка</span>
        </li>
        <li className="bird-answer-container list-group-item d-flex justify-content-start align-items-center">
          <span className="bande-point badge badge-primary badge-pill">.</span>
          <span>Синица</span>
        </li>
      </ul>
    </div>
  );
};

export default BirdAnswers;