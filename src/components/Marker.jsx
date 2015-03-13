import React from 'react';
import L from 'leaflet';

export default React.createClass({
  propTypes: {
    map: React.PropTypes.instanceOf(L.map).isRequired
  },

  componentWillMount() {
    this.props.map
      .addLayer(
        L.marker(
          this.props.position,
          this.props
        )
      );
  },

  render() {
    return null;
  }
})