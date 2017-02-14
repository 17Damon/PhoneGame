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
import {moneyIcon, peopleIcon} from '../Icon';
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
        this.context.router.transitionTo('/');
    },
    _go_RoomNav(){
        // console.log(this.props.data.getToken.token);
        // console.log(this);
        // Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
        this.context.router.transitionTo('/room');
    },
    // renderContent(pageIndex, num) {
    //     switch (pageIndex) {
    //         case 'bj28':
    //             this.context.router.transitionTo('/bj28');break;
    //         case 'ca28':
    //             this.context.router.transitionTo('/ca28');break;
    //     }
    // },
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.bot_container}>
                    <View style={styles.bot_container_top}>
                        <TouchableHighlight
                            style={{borderRadius: 7}}
                            onPress={this._go_RoomNav}
                        >
                            <Image style={{height:160,borderRadius: 7}}
                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                   resizeMode="stretch"
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bot_container_mid}>
                        <TouchableHighlight
                            style={{borderRadius: 7}}
                            onPress={e=>{alert('1234')}}
                        >
                            <Image style={{height:160,borderRadius: 7}}
                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                   resizeMode="stretch"
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bot_container_bot}>
                        <TouchableHighlight
                            style={{borderRadius: 7}}
                            onPress={this.test}
                        >
                            <Image style={{height:160,borderRadius: 7}}
                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                   resizeMode="stretch"
                            />
                        </TouchableHighlight>
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
        borderRadius: 7,
        marginTop: 0
    },
    bot_container_mid: {
        borderRadius: 7,
        marginTop: 25
    },
    bot_container_bot: {
        borderRadius: 7,
        marginTop: 25
    }
});


let Test1 = graphql(MyQuery)(Test);

let RankList = connect()(Test1);

export default RankList;

