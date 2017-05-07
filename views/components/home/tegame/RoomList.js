/**
 * Created by zhubg on 2017/1/16.
 */

import React, {Component} from 'react';
import {Button, Toast, TabBar, Icon, Carousel} from 'antd-mobile';
import {
    StyleSheet,
    Text,
    View,
    NavigatorIOS,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {connect} from 'react-redux';
import {treasureIcon} from '../Icon';
const MyQuery = gql`query {
                        getToken (id:"1234"){ 
                            token
                        } 
                    }`;
let Test = React.createClass({
    getInitialState() {
        return {};
    },
    test(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/bj28');
    },
    _go_Betting(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/betting');
    },
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.bot_container}>
                    <View style={styles.bot_container_top}>
                        <View style={styles.bot_container_top_left}>
                            <TouchableHighlight
                                style={{borderRadius: 7}}
                                onPress={this._go_Betting}
                            >
                                <Image style={{height:240,borderRadius: 7}}
                                       source={{uri:treasureIcon}}
                                       resizeMode="stretch"
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.bot_container_top_right}>
                            <TouchableHighlight
                                style={{borderRadius: 7}}
                                onPress={e=>{}}
                            >
                                <Image style={{height:240,borderRadius: 7}}
                                       source={{uri:treasureIcon}}
                                       resizeMode="stretch"
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                    <View style={styles.bot_container_bot}>
                        <View style={styles.bot_container_top_left}>
                            <TouchableHighlight
                                style={{borderRadius: 7}}
                                onPress={e=>{}}
                            >
                                <Image style={{height:240,borderRadius: 7}}
                                       source={{uri:treasureIcon}}
                                       resizeMode="stretch"
                                />
                            </TouchableHighlight>
                        </View>
                        <View style={styles.bot_container_top_right}>
                            <TouchableHighlight
                                style={{borderRadius: 7}}
                                onPress={this.test}
                            >
                                <Image style={{height:240,borderRadius: 7}}
                                       source={{uri:treasureIcon}}
                                       resizeMode="stretch"
                                />
                            </TouchableHighlight>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
});

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F5F5F5',
        top: 64,
        left: 0,
        right: 0,
        bottom: 49
    },
    bot_container: {
        flexDirection: 'column',
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        flex: 1
    },
    bot_container_top: {
        flexDirection: 'row',
        borderRadius: 7,
        marginTop: 0,
    },
    bot_container_top_left: {
        borderRadius: 7,
        flex:1
    },
    bot_container_top_right: {
        borderRadius: 7,
        marginLeft: 10,
        flex:1
    },
    bot_container_bot: {
        flexDirection: 'row',
        borderRadius: 7,
        marginTop: 25
    }
});


let Test1 = graphql(MyQuery)(Test);

let RankList = connect()(Test1);

export default RankList;

