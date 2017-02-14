/**
 * Created by zhubg on 2017/1/15.
 */

import React, {Component} from 'react';
import {
    NavigatorIOS,
    StyleSheet
} from 'react-native';

import RankList from './RankList';


let BjrankNav = React.createClass({
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
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{
                            component: RankList,
                            // passProps: props,
                            title: '北京28',
                            navigationBarHidden: false,
                            // rightButtonIcon: this.state.gearIcon,
                            leftButtonTitle: '<back',
                            onLeftButtonPress:this._go_Home
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

export default BjrankNav;
