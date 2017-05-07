/**
 * Created by zhubg on 2017/1/7.
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
import {purseIcon, reCashIcon, recordIcon, settingIcon, aboutIcon,myAvatarIcon} from './Icon';

const MyQuery = gql`query {
                        getToken (id:"1234"){ 
                            token
                        } 
                    }`;
const SUBSCRIPTION_QUERY = gql`
                                subscription NewMessageSubscription {
                                     newMessage
                                } 
                                `;
let Test = React.createClass({
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object,
        client: React.PropTypes.object
    },
    getInitialState() {
        return {};
    },
    logout(){
        globalStorage.remove({
            key: 'loginState'
        });
        globalUser={};
        this.context.router.transitionTo('/login');
    },
    test1(){
        globalStorage.load({
            key: 'loginState',
            autoSync: true,
            syncInBackground: true,
            syncParams: {}
        }).then(ret => {
            //global.globalUser {accountName,token}
            console.log("globalStorage.load");
            console.log(ret);
            global.globalUser = ret;
        }).catch(err => {
            console.log(err);
            switch (err.name) {
                case 'NotFoundError':
                    // TODO;
                    console.log("没有数据");
                    // this.setState({
                    //     loginFlag: false
                    // });
                    break;
                case 'ExpiredError':
                    // TODO
                    console.log("数据过期");
                    // this.setState({
                    //     loginFlag: false
                    // });
                    break;
            }
        });
    },
    componentWillUnmount(){
        console.log("Personal_componentWillUnmount");

    },
    componentWillMount(){
        console.log("Personal_componentWillMount");
        if (globalUser.accountName === undefined || globalUser.token === undefined) {
            this.context.router.transitionTo('/login');
        }
    },
    render() {
        return (
            <ScrollView>
                <View style={styles.parent}>
                    <View style={{flex:1,height:100,flexDirection: 'row',backgroundColor:'rgba(100,149,237,0.5)'}}>
                        <TouchableHighlight style={{marginTop:17,height:70,width:70,borderRadius: 35,marginLeft:25}}
                                            onPress={e=>{alert('1234')}}>
                            <View style={{flex:3,justifyContent: 'center'}}>
                                <Image style={{height:70,width:70,borderRadius: 35}}
                                       source={{uri:myAvatarIcon}}
                                       resizeMode="stretch"
                                />
                            </View>
                        </TouchableHighlight>
                        <View style={{flex:7,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                            <Text style={{paddingTop:20,paddingLeft:0,height:40,fontSize:17}}>富龙</Text>
                            <Text
                                style={{height:40,fontSize:12,color:'#696969',paddingTop:5}}>我的个性签名</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, marginLeft: 10,marginRight:10}}>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={e=>{alert('1234')}}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri: purseIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>钱包</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={e=>{alert('1234')}}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:reCashIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>我的回水</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={e=>{alert('1234')}}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:recordIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>账变记录</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={e=>{}}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:settingIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>设置</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={e=>{this.test1()}}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:aboutIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>关于</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={this.logout}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:aboutIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>注销</Text>
                            </View>
                        </TouchableHighlight>
                        <View style={{height:188}}/>
                    </View>
                </View>
            </ScrollView>
        )
    }
});

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        // position: 'absolute',
        flex: 1,
        backgroundColor: '#F5F5F5',
        top: 0,
        left: 0,
        right: 0,
        bottom: 49
    },
    top_container: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    },
    top_img: {
        borderRadius: 7,
        height: 161,
        marginLeft: 10,
        marginRight: 10
    },
    mid_container: {
        flex: 2,
        backgroundColor: 'white',
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 5
    },
    mid_left: {
        flexDirection: 'column',
        flex: 8
    },
    mid_left_top: {
        flexDirection: 'row',
        flex: 1
    },
    mid_left_bot: {
        flexDirection: 'row',
        flex: 1
    },
    mid_right: {
        flex: 2
    },
    mid_right_top: {
        flex: 7
    },
    mid_right_bot: {
        flex: 3
    },
    bot_container: {
        flex: 9,
        flexDirection: 'row',
        marginTop: 5,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10
    },
    bot_container_left: {
        borderRadius: 7,
        flex: 1,
        marginRight: 5
    },
    bot_container_right: {
        borderRadius: 7,
        flex: 1,
        marginLeft: 5
    }
});

let Test1 = graphql(MyQuery)(Test);

let Personal = connect()(Test1);

export default Personal;
