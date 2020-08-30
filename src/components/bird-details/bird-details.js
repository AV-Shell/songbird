import React from 'react';

import './bird-details.css';

const BirdDetails = () => {
  return (
    <div className="bird-details col-md-6 mb-2">
      <div className="card border-secondary">
        {/* <div className="">Header</div> */}
        <div className="card-body d-flex flex-wrap justify-content-start align-items-center">
          <img className="bird-detail-image" src="https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg" alt="Журавль"></img>
          <div className="bird-detail-container">
            <h4 className="card-title">Журавль</h4>
            <hr className="bird-detail-border"></hr>
            <h4 className="card-title">Grus grus</h4>
            <hr className="bird-detail-border"></hr>
          </div>
          <div className="bird-detail-player">
              <audio src="URL" controls="controls"></audio>
            </div>
          <p className="card-text">Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».</p>
        </div>
      </div>
    </div>

  );
}

export default BirdDetails;