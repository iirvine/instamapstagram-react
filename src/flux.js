import {Flux} from 'flummox';
import InstagramApiActions from './actions/InstagramApiActions'

class InstaFlux extends Flux {
  constructor() {
    super();

    this.createActions('media', InstagramApiActions);
    this.createStore('media', require('./stores/MediaStore'), this);
  }
}

export default InstaFlux;