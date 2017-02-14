/**
 * Created by zhubg on 2017/1/15.
 */

import React, {Component} from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import Betting from './Betting';


let BettingNav = React.createClass({
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    }
    ,
    _go_RoomNav(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/room');
    },
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                            component: Betting,
                            // passProps: props,
                            title: '北京28初级房',
                            navigationBarHidden: false,
                            // rightButtonIcon: this.state.gearIcon,
                            leftButtonTitle: '<back',
                            onLeftButtonPress:this._go_RoomNav
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

export default BettingNav;
