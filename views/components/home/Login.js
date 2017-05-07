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
    TextInput,
    TouchableHighlight,
    AlertIOS
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
    contextTypes: {
        router: React.PropTypes.object,
        client: React.PropTypes.object
    },
    getInitialState() {
        return {
            curText_name: "",
            curText_password: "",
            //disable
            loginBtnDisabled: false
        };
    },
    updateNameText(text) {
        return (
            this.setState({
                    curText_name: text
                }
            ))
    },
    updatePasswordText(text) {
        return (
            this.setState({
                    curText_password: text
                }
            ))
    },
    onLoginBtnDisable(){
        console.log(this.state.loginBtnDisabled);
        return (
            this.setState({
                    loginBtnDisabled: true
                }
            ))
    },
    onLogin(){
        // console.log(this.state.curText_name);
        // console.log(this.state.curText_password);
        console.log(globalSocket.disconnected === undefined);

        this.setState({
            loginBtnDisabled: true
        });
        if ((this.state.curText_name === "") || (this.state.curText_password === "")) {
            AlertIOS.alert(
                '',
                '未填写用户名或者密码'
            );
            this.setState({
                loginBtnDisabled: false
            });
            // 读取
            // globalStorage.load({
            //     key: 'loginState',
            //
            //     // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
            //     autoSync: true,
            //
            //     // syncInBackground(默认为true)意味着如果数据过期，
            //     // 在调用sync方法的同时先返回已经过期的数据。
            //     // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
            //     syncInBackground: true,
            //
            //     // 你还可以给sync方法传递额外的参数
            //     syncParams: {
            //     }
            // }).then(ret => {
            //     // 如果找到数据，则在then方法中返回
            //     // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
            //     // 你只能在then这个方法内继续处理ret数据
            //     // 而不能在then以外处理
            //     // 也没有办法“变成”同步返回
            //     // 你也可以使用“看似”同步的async/await语法
            //
            //     console.log(ret);
            // }).catch(err => {
            //     //如果没有找到数据且没有sync方法，
            //     //或者有其他异常，则在catch中返回
            //     switch (err.name) {
            //         case 'NotFoundError':
            //             // TODO;
            //             console.log("没有数据");
            //             break;
            //         case 'ExpiredError':
            //             // TODO
            //             console.log("数据过期");
            //             break;
            //     }
            // });
            return;
        } else {
            return fetch(globalServerIP, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "query": `query {
                              loginUser(
                                            accountName:"${this.state.curText_name}",
                                            password:"${this.state.curText_password}"
                              ){
                                nickName
                                token
                              }
                            }`
                    }
                ),
                headers: {'Content-Type': 'application/json'}
            })
                .then(function (res) {
                    return res.json();
                }).then(function (json) {
                    console.log(json);
                    if (json.data.loginUser.token === "PermissionFailed") {
                        this.setState({
                            loginBtnDisabled: false
                        });
                        AlertIOS.alert(
                            '登陆错误',
                            '用户名或者密码错误'
                        );
                    } else {
                        console.log("登录成功");
                        //存储
                        globalStorage.save({
                            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
                            rawData: {
                                accountName: this.state.curText_name,
                                token: json.data.loginUser.token,
                                nickName: json.data.loginUser.nickName
                            },
                            // 如果不指定过期时间，则会使用defaultExpires参数
                            // 如果设为null，则永不过期
                            expires: 1000 * 3600 * 24 * 7
                        });
                        //记录登录状态并且跳转
                        global.globalUser.accountName = this.state.curText_name;
                        global.globalUser.token = json.data.loginUser.token;
                        global.globalUser.nickName = json.data.loginUser.nickName;

                        //如果globalSocket不存在
                        if (globalSocket.disconnected === undefined) {
                            // SocketIO初始化
                            // You need to set `window.navigator` to something in order to use the socket.io
                            // client. You have to do it like this in order to use the debugger because the
                            // debugger in React Native runs in a webworker and only has a getter method for
                            // `window.navigator`.
                            window.navigator.userAgent = 'ReactNative';
                            var socket = require('socket.io-client')(globalWsServerIP, {
                                transports: ['websocket'] // you need to explicitly tell it to use websockets
                            });
                            socket.on('connect', function () {
                                // console.log(socket.id); // 'G5p5...'
                                //认证参数
                                socket.emit('authentication', {
                                    accountName: this.state.curText_name,
                                    token: json.data.loginUser.token
                                });
                                socket.on('authenticated', function () {
                                    // use the socket as usual
                                    console.log("authenticated");
                                    //验证后取消首次错误监听
                                    socket.removeListener('connect_error');
                                    Toast.hide();
                                    //接收消息
                                });
                                socket.on('unauthorized', function (err) {
                                    //用户名、口令验证错误
                                    console.log("非法操作:", err.message);
                                });

                                socket.on('disconnect', function () {
                                    //聊天服务器断开
                                    console.log('socket disconnect');
                                    //锁屏
                                    Toast.loading("聊天服务器断开", 0);
                                });
                            }.bind(this));
                            socket.on('connect_error', function (err) {
                                console.log(err);
                                Toast.loading("聊天服务器已经断开连接", 0);
                                socket.removeListener('connect_error');
                            });
                            global.globalSocket = socket;
                            console.log(globalSocket);
                        }
                        //_go_Home
                        this.context.router.transitionTo('/');
                    }
                }.bind(this)).catch((err)=> {
                    console.log(err);
                    this.setState({
                        loginBtnDisabled: false
                    });
                    AlertIOS.alert(
                        '',
                        '网络错误'
                    );
                });
        }


        //存储
        // storage.save({
        //     key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
        //     rawData: {
        //         accountName: 'wangwang1',
        //         token: 'some token'
        //     },
        //     // 如果不指定过期时间，则会使用defaultExpires参数
        //     // 如果设为null，则永不过期
        //     expires: 50000
        // });

        // 读取
        // storage.load({
        //     key: 'loginState',
        //
        //     // autoSync(默认为true)意味着在没有找到数据或数据过期时自动调用相应的sync方法
        //     autoSync: true,
        //
        //     // syncInBackground(默认为true)意味着如果数据过期，
        //     // 在调用sync方法的同时先返回已经过期的数据。
        //     // 设置为false的话，则始终强制返回sync方法提供的最新数据(当然会需要更多等待时间)。
        //     syncInBackground: true,
        //
        //     // 你还可以给sync方法传递额外的参数
        //     syncParams: {
        //     }
        // }).then(ret => {
        //     // 如果找到数据，则在then方法中返回
        //     // 注意：这是异步返回的结果（不了解异步请自行搜索学习）
        //     // 你只能在then这个方法内继续处理ret数据
        //     // 而不能在then以外处理
        //     // 也没有办法“变成”同步返回
        //     // 你也可以使用“看似”同步的async/await语法
        //
        //     console.log(ret);
        // }).catch(err => {
        //     //如果没有找到数据且没有sync方法，
        //     //或者有其他异常，则在catch中返回
        //     switch (err.name) {
        //         case 'NotFoundError':
        //             // TODO;
        //             console.log("没有数据");
        //             break;
        //         case 'ExpiredError':
        //             // TODO
        //             console.log("数据过期");
        //             break;
        //     }
        // })
    },
    render() {
        return (
            <ScrollView>
                <View style={styles.parent}>
                    <View style={{flex:1}}>
                        <Text style={{paddingTop:14,paddingLeft:37,height:40}}>会员登录</Text>
                    </View>
                    <View
                        style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                        <View
                            style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:15,marginLeft:15}}>用户名</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    onChange={
                                    (event) => this.updateNameText(event.nativeEvent.text)
                                    }
                                    style={styles.default}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                        <View
                            style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:15,marginLeft:15}}>密码</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChange={
                                    (event) => this.updatePasswordText(event.nativeEvent.text)
                                    }
                                    style={styles.default}
                                />
                            </View>
                        </View>
                    </View>
                    <View
                        style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'row'}}>
                        <View
                            style={{flex:1,marginRight:0, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                            <Button type={this.state.loginBtnDisabled?"":"primary"}
                                    style={{borderRadius: 7,width:360,height: 32}}
                                    disabled={this.state.loginBtnDisabled}
                                    onClick={this.onLogin}
                            ><Text
                                style={{fontSize:14}}>{this.state.loginBtnDisabled ? "loading" : "登录"}</Text></Button>
                        </View>
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
    },
    default: {
        height: 26,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: '#696969',
        flex: 1,
        fontSize: 13,
        padding: 4
    }
});

let Test1 = graphql(MyQuery)(Test);

let Login = connect()(Test1);

export default Login;