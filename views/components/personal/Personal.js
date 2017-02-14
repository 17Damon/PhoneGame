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
import {purseIcon, reCashIcon, recordIcon, settingIcon, aboutIcon} from './Icon';
import {wsClient} from '../../../data/apolloClient';

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
    getInitialState() {
        return {};
    },
    test(){
        // console.log(this.props.data.getToken.token);
        console.log(this);
        console.log(this.props.data.updateQuery);
        Toast.info('token: ' + this.props.data.getToken.token);
        this.props.data.subscribeToMore({
            document: SUBSCRIPTION_QUERY,
            variables: {},
            updateQuery: (prev, {subscriptionData}) => {
                console.log(prev);
                console.log(subscriptionData);
                return; // Modify your store and return new state with the new arrived data
            }
        });
        // Toast.info('token: ');
        // let id = client.networkInterface.subscribe({
        //     query: SUBSCRIPTION_QUERY,
        //     variables: {repoName:"test"}
        // },function (errors,result) {
        //     console.log(errors);
        //     console.log(result);
        // });
        // let id1 = this.context.client.networkInterface.subscribe({
        //     query: SUBSCRIPTION_QUERY,
        //     variables: {repoName:"test1"}
        // },function (errors,result) {
        //     console.log(errors);
        //     console.log(result);
        // });
        // client.networkInterface.subscribe({
        //     query: SUBSCRIPTION_QUERY,
        //     variables: {
        //         repoName: 'test',
        //     },
        //     context: {},
        //     callback: (err, data) => console.log(data),
        // });
        // console.log(id);
        // console.log(id1);
    },
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object,
        client: React.PropTypes.object
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
                                       source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
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
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={e=>{alert('1234')}}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:settingIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>设置</Text>
                            </View>
                        </TouchableHighlight>
                        <TouchableHighlight style={{marginTop:10,borderRadius: 7}} onPress={this.test}>
                            <View
                                style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row',borderRadius: 7}}>
                                <Image
                                    style={{height:40,width:40,marginLeft:20,marginTop:2}}
                                    source={{uri:aboutIcon}} resizeMode="stretch"
                                />
                                <Text style={{paddingTop:14,paddingLeft:22,height:40}}>关于</Text>
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

let Home = connect()(Test1);

export default Home;
