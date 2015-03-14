import {Store} from 'flummox';
import {Map} from 'immutable';

export default class MediaStore extends Store {
  constructor(flux) {
    super();

    let actionIds = flux.getActionIds('media');
    this.register(actionIds.queryLocation, this.receiveMedia);

    this.state = {
      media: Map()
    };
  }

  receiveMedia({data}) {
    let newMedia = Map(
      data.map((image) => {
        return [image.id, image];
      })
    );
    
    this.setState({
      media: this.state.media.merge(newMedia)
    });
  }

  getMedia() {
    return this.state.media;
  }
}