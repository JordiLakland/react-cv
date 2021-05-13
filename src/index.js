import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { library } from '@fortawesome/fontawesome-svg-core'
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    faMapMarkerAlt,
    faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';

import {
    faCalendarAlt as faCalendarAltRegular,
    faEnvelope as faEnvelopeRegular,
} from '@fortawesome/free-regular-svg-icons';

import {
    faLinkedin,
    faGithub,
} from '@fortawesome/free-brands-svg-icons';

library.add(
    // Solid
    faMapMarkerAlt,
    faPhoneAlt,
    // Regular
    faCalendarAltRegular,
    faEnvelopeRegular,
    // Brands
    faLinkedin,
    faGithub,

);

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
