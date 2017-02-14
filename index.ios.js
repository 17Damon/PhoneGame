
import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';

import Route from './views/Route';

export default class App extends Component {
    render() {
        return (
            <Route />
        );
    }
}

AppRegistry.registerComponent('PhoneGame', () => App);

