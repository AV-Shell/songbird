import birdsData from './bird-data'

export default class BirdDataService {
  getBirdsStep = (id) => {
    if (id < birdsData.length) {
      return birdsData[id];
    }
    return null;
  }
}
