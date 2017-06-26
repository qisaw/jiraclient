import React from 'react';
import ReactDOM from 'react-dom';
import App from './application';
import { AppContainer } from 'react-hot-loader';
import { Provider } from "react-redux";

import { isDevelopment } from './environment';
import configureStore from "./createStore/configureStore";

const store = configureStore();

const wrapComponent = Component => {
  if(isDevelopment) {
    return (
      <AppContainer>
        <Provider store={store}>
          <Component/>
        </Provider>
      </AppContainer>
    );
  }
  return <Component />;
}
const renderApp = Component => {
  ReactDOM.render( wrapComponent(Component), document.getElementById('root'));
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./application', () => {
    const NextApp = require('./application').default;
    renderApp(NextApp);
  });
}
