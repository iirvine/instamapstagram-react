import React from 'react';
import Map from './components/Map';
import TileLayer from './components/TileLayer'
import Marker from './components/Marker'
import L from 'leaflet';
import {RaisedButton, Dialog} from 'material-ui';
import {isAuthorized, getAuthUrl} from './api/instagram';

const stamenProps = {
  minZoom: 1,
  maxZoom: 18,
  subdomains: ['a','b','c','d'],
  scheme: 'xyz',
  attribution:
    `Map tiles by <a href="http://stamen.com/">Stamen Design</a>,
    under <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a>.
    Data by <a href="http://openstreetmap.org/">OpenStreetMap</a>,
    under <a href="http://creativecommons.org/licenses/by-sa/3.0">CC BY SA</a>.`
};

function makeImageMarker(media) {
  if (!media.location) { return null; }
  let {latitude, longitude} = media.location;
  let {url} = media.images.low_resolution;

  return <Marker
    key={media.id}
    draggable
    position={[latitude, longitude]}
    icon={new L.Icon({
      className: 'Media',
      iconUrl: url,
      iconAnchor: new L.Point(),
      iconSize: new L.Point(90,90)
    })} />;
}

export default React.createClass({
  getInitialState() {
    this.mediaStore = this.props.flux.getStore('media');

    return {
      media: this.mediaStore.getMedia()
    };
  },

  componentWillMount() {
    this.mediaStore.addListener('change', this.onMediaChange);
  },

  onMediaChange() {
    this.setState({media: this.mediaStore.getMedia()});
  },
  
  onSearchMarkerDragEnd(e) {
    let apiActions = this.props.flux.getActions('media');
    apiActions.queryLocation(e.target.getLatLng());
  },

  render() {
    const center = [40.226194,-111.660796];

    let images = this.state.media.toArray().map(makeImageMarker);
    let dialog = isAuthorized() ? 
      null :
      (
        <Dialog title="Instamapstagram" openImmediately
          actions={[
            <RaisedButton linkButton label="Authenticate on instagram" href={getAuthUrl()}/>
          ]}>
          <h1>Drag the pin to search Instagram!</h1>
        </Dialog>
      );

    return (
      <div className="map-surface">
        <Map zoom={15} center={center}>
          <TileLayer url={'http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.jpg'} {...stamenProps}/>
          <TileLayer url={'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg'} {...stamenProps}/>
          <Marker position={center} draggable onDragEnd={this.onSearchMarkerDragEnd}/>
          {dialog}
          {images}
        </Map>
      </div>
    );
  }
});