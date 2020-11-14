import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import store from './stores/index';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
// import HomeComponent from './pages/home/home.component';
import Counter from './features/counter/counter.component';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Counter />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
