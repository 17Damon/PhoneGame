/**
 * Created by zhubg on 2017/1/15.
 */

import React, {Component} from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import Login from './Login';


let LoginNav = React.createClass({
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    }
    ,
    _go_Home(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/');
    },
    _go_Register(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/register');
    },
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                            component: Login,
                            // passProps: props,
                            title: '会员登录',
                            navigationBarHidden: false,
                            // rightButtonIcon: this.state.gearIcon,
                            leftButtonTitle: '<back',
                            onLeftButtonPress:this._go_Home,
                            rightButtonTitle: '注册',
                            onRightButtonPress:this._go_Register
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

export default LoginNav;
