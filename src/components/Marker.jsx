import React from 'react';
import L from 'leaflet';
import {Map} from 'immutable';
import {entries} from './util';

const LeafletEventMap = Map({
  onDragEnd: 'dragend',
  onClick: 'click',
  onDoubleClick: 'dblclick'
});

export default React.createClass({
  propTypes: {
    map: React.PropTypes.instanceOf(L.Map).isRequired
  },

  componentWillMount() {
    const layer = L.marker(
      this.props.position,
      this.props);
    
    for (let [key, val] of entries(this.props)) {
      let ev = LeafletEventMap.get(key);
      if (ev) {
        layer.on(ev, val);
      }
    }
    
    this.props.map
      .addLayer(layer);
  },

  render() {
    return null;
  }
})