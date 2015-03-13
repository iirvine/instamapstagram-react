import React from 'react';
import L from 'leaflet';

export default React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired,
    map: React.PropTypes.instanceOf(L.map).isRequired
  },

  componentWillMount() {
    this.props.map
      .addLayer(
      L.tileLayer(
        this.props.url,
        this.props
      )
    );
  },

  render() {
    return null;
  }
})