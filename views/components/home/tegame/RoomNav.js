/**
 * Created by zhubg on 2017/1/15.
 */

import React, {Component} from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import RoomList from './RoomList';


let RoomNav = React.createClass({
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    }
    ,
    _go_RankListNav(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/bj28');
    },
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                            component: RoomList,
                            // passProps: props,
                            title: '房间列表',
                            navigationBarHidden: false,
                            // rightButtonIcon: this.state.gearIcon,
                            leftButtonTitle: '<back',
                            onLeftButtonPress:this._go_RankListNav
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

export default RoomNav;
