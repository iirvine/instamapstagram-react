import React from 'react';
import App from './App';
import Flux from './flux';
import FluxComponent from 'flummox/component';
import L from 'leaflet';

require('leaflet/leaflet.css');
require('./main.scss');
require('material-ui-sass');

let flux = new Flux();

React.withContext(
  {flux},
  () => React.render(<FluxComponent><App/></FluxComponent>, document.getElementById('app')));
