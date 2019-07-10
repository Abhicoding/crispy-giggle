import React from 'react';
import {Provider} from 'react-redux';

import App from './App'
import configureStore from './store.js'

export default class Root extends React.Component {
    render() {
        return (<Provider store={configureStore()}>
        <App />
       </Provider>)
    }
}