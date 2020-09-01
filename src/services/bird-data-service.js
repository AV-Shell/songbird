import birdsData from './bird-data'

export default class BirdDataService {
  getBirdsStep = (id) => {
    if (id < birdsData.length) {
      return birdsData[id];
    }
    return null;
  }
}


function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

export {
  getRandomInt,
}