/**
 * Created by zhubg on 2017/1/15.
 */

import React, {Component} from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import Register from './Register';


let RegisterNav = React.createClass({
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    }
    ,
    _go_Login(){
        this.context.router.transitionTo('/login');
    },
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                            component: Register,
                            // passProps: props,
                            title: '会员注册',
                            navigationBarHidden: false,
                            leftButtonTitle: '<back',
                            onLeftButtonPress:this._go_Login
                        }}
            />
        )
    }
});

const styles = StyleSheet.create({
    navigator: {
        flex: 1
    }
});

export default RegisterNav;
