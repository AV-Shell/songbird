import React from 'react';

import './bird-next.css';

const BirdNext = ({ active, onNextLevel }) => {
  const buttonClassNames = `${"list-group-item d-flex justify-content-center align-items-center"} ${active ? "next-level-button" : ""}`;
  const clickFunc = () => onNextLevel();
  return (
    <div className="bird-next col-12 mt-4">
      <ul className="list-group">
        <li
          className={buttonClassNames}
          onClick={active ? clickFunc : null}
        >
          <span>Next Level</span>
        </li>
      </ul>
    </div>
  );
};

export default BirdNext;