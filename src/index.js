import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './scenes/App/App'
import registerServiceWorker from './services/serviceWorker/registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
