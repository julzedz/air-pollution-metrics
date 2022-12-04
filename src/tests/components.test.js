import React from 'react';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import store from '../redux/configureStore';
import Detail from '../components/pages/Detail';
import Home from '../components/pages/Home';
import '@testing-library/jest-dom';

describe('Testing Components', () => {
  it('Tests components', () => {
    const home = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Home />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(home).toMatchSnapshot();
  });

  it('Tests Detail component', () => {
    const details = render(
      <React.StrictMode>
        <Router>
          <Provider store={store}>
            <Detail />
          </Provider>
        </Router>
      </React.StrictMode>,
    );
    expect(details).toMatchSnapshot();
  });
});
