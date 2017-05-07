
import React, { Component } from 'react';
import {
    AppRegistry
} from 'react-native';
//global.storage
import {serverIP} from './data/global';

import Route from './views/Route';

export default class App extends Component {
    render() {
        return (
            <Route />
        );
    }
}

AppRegistry.registerComponent('PhoneGame', () => App);

