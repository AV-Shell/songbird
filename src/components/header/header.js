import React from 'react';

import './header.css';

const Header = ({score, gameStep}) => {

  const titles = ['Разминка', 'Воробьиные', 'Лесные птицы', 'Певчие птицы', 'Хищные птицы',' Морские птицы' ];
  const titleElements = titles.map((title, titleNum) => {
    let titleClasses = 'page-item header-round-item '
      titleClasses = `${titleClasses} ${titleNum === gameStep ? 'active' : 'disabled'}`
    return (
      <li key={titleNum} className={titleClasses}>
        <span className="page-link rounded-0">{title}</span>
      </li>
    );
  });
  return (
    <div className="header">
      <div className="d-flex align-items-baseline justify-content-between">
        <div className="logo-container">
          <span className="logo-text">
            <span className="logo-song">Song</span>
            <span className="logo-bird">bird</span>
          </span>
        </div>
        <div className="header-score">
          Score:&nbsp;<span className="header-score-point">{score}</span>
        </div>
      </div>
      <ul className="pagination header-round-container">
        { titleElements }
        {/* <li className="page-item header-round-item active"><span className="page-link rounded-0">Разминка</span></li>
        <li className="page-item header-round-item disabled"><span className="page-link rounded-0">Воробьиные</span></li>
        <li className="page-item header-round-item disabled"><span className="page-link rounded-0">Лесные птицы</span></li>
        <li className="page-item header-round-item disabled"><span className="page-link rounded-0">Певчие птицы</span></li>
        <li className="page-item header-round-item disabled"><span className="page-link rounded-0">Хищные птицы</span></li>
        <li className="page-item header-round-item disabled"><span className="page-link rounded-0">Морские птицы</span></li> */}
      </ul>
    </div>
  );
};

export default Header;