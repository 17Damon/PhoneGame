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
import {alipayIcon, wechatIcon, unionpayIcon} from './Icon';

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
        console.log(this.props.data.getToken.token);
        // console.log(this);
        Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
    },
    render() {
        return (
            <ScrollView>
                <View style={styles.parent}>
                    <View style={{flex:1}}>
                        <Text style={{paddingTop:14,paddingLeft:37,height:40}}>线上充值</Text>
                    </View>
                    <TouchableHighlight onPress={e=>{alert('1234')}}>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                            <Image
                                style={{height:40,width:40,marginLeft:40,marginTop:2}}
                                source={{uri: alipayIcon}} resizeMode="stretch"
                            />
                            <Text style={{paddingTop:14,paddingLeft:22,height:40}}>支付宝支付</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e=>{alert('1234')}}>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                            <Image
                                style={{height:40,width:40,marginLeft:40,marginTop:2}}
                                source={{uri: wechatIcon}} resizeMode="stretch"
                            />
                            <Text style={{paddingTop:14,paddingLeft:22,height:40}}>微信支付</Text>
                        </View>
                    </TouchableHighlight>
                    <View style={{flex:1}}>
                        <Text style={{paddingTop:14,paddingLeft:37,height:40}}>线下充值</Text>
                    </View>
                    <TouchableHighlight onPress={e=>{alert('1234')}}>

                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                            <Image
                                style={{height:40,width:40,marginLeft:40,marginTop:2}}
                                source={{uri: alipayIcon}} resizeMode="stretch"
                            />
                            <Text style={{paddingTop:14,paddingLeft:22,height:40}}>支付宝转账</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={e=>{alert('1234')}}>

                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                            <Image
                                style={{height:40,width:40,marginLeft:40,marginTop:2}}
                                source={{uri: unionpayIcon}} resizeMode="stretch"
                            />
                            <Text style={{paddingTop:14,paddingLeft:22,height:40}}>银行转账</Text>
                        </View>
                    </TouchableHighlight>
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
        bottom: 49,
    },
    top_container: {
        flex: 4,
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
        flex: 4,
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
        flex: 3,
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

let Payment = connect()(Test1);

export default Payment;


// <View style={{ marginTop: 64 }}>
//
//     <List renderHeader={() => '左侧带图片'}>
//         <List.Item arrow="horizontal" last>省市选择(异步加载)</List.Item>
//     </List>
//
// </View>