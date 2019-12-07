import React from 'react';

import { Toast } from 'react-native-redux-toast';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import store from './store';
import App from './App';

export default function Index() {
  return (
    <Provider store={store}>
      <StatusBar barStyle="light-content" backgroundColor="#7159c1" />
      <App />
      <Toast />
    </Provider>
  );
}
