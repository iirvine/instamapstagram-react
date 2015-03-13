import React from 'react';
import L from 'leaflet';

export default React.createClass({
  getInitialState() {
    return {map: null};
  },

  componentDidMount() {
    const map = L.map(
      this.getDOMNode(),
      this.props);

    this.setState({map});
  },

  cloneChildWithMap(child) {
    return React.cloneElement(child, {map: this.state.map});
  },

  render() {
    const children = this.state.map ?
      React.Children.map(this.props.children, this.cloneChildWithMap) : null;

    return (
      <div className="Map">
        {children}
      </div>
    );
  }
});