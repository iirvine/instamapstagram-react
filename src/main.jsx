import React from 'react';
import App from './App';
import L from 'leaflet'

require('leaflet/leaflet.css');
require('./main.scss');

React.render(<App/>, document.getElementById('app'));