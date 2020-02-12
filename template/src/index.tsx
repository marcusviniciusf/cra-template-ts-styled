import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
// RouteController
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// Assets and Styles
import { ThemeProvider } from 'styled-components';
import { MainStyle, theme } from 'assets';
// Store
import StoreProvider from 'store';
// Pages
import { HomePage } from 'containers';

render(
  <ThemeProvider theme={theme}>
    <StoreProvider>
      <Router>
        <MainStyle />
        <Switch>
          <Route exact path="/" component={HomePage} />
        </Switch>
      </Router>
    </StoreProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
