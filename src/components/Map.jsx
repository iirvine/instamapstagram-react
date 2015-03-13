import React from 'react';
import L from 'leaflet';

export default React.createClass({
  componentDidMount() {
    this.leafletInstance = L.map(
      this.getDOMNode(),
      this.props);
  },

  render() {
    return (
      <div className="Map">

      </div>
    );
  }
});