import React from 'react';
import Map from './components/Map';
import TileLayer from './components/TileLayer'
import Marker from './components/Marker'

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

export default React.createClass({
  render() {
    const center = [40.226194,-111.660796];
    return (
      <Map zoom={15} center={center}>
        <TileLayer url={'http://{s}.tile.stamen.com/toner-labels/{z}/{x}/{y}.jpg'} {...stamenProps}/>
        <TileLayer url={'http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.jpg'} {...stamenProps}/>
        <Marker position={center}/>
      </Map>
    );
  }
});