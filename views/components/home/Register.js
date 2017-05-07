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
            curText_password_confirm:"",
            curText_nickname:"",
            curText_phone:"",
            curText_qqNumber:"",
            curText_invitationCode:"",
            loginBtnDisabled: false
        };
    },
    //accountName
    updateNameText(accountName) {
        return (
            this.setState({
                    curText_name: accountName
                }
            ))
    },
    //password
    updatePasswordText(password) {
        return (
            this.setState({
                    curText_password: password
                }
            ))
    },
    //password_confirm
    updatePasswordConfirmText(password_confirm) {
        return (
            this.setState({
                    curText_password_confirm: password_confirm
                }
            ))
    },
    //nickname
    updateNicknameText(nickname) {
        return (
            this.setState({
                    curText_nickname: nickname
                }
            ))
    },
    //phone
    updatePhoneText(phone) {
        return (
            this.setState({
                    curText_phone: phone
                }
            ))
    },
    //qqNumber
    updateQQNumberText(qqNumber) {
        return (
            this.setState({
                    curText_qqNumber: qqNumber
                }
            ))
    },
    //invitationCode
    updateInvitationCodeText(invitationCode) {
        return (
            this.setState({
                    curText_invitationCode: invitationCode
                }
            ))
    },
    onRegister(){
        this.setState({
            loginBtnDisabled: true
        });
        if (
            (this.state.curText_name === "") ||
            (this.state.curText_password === "") ||
            (this.state.curText_password_confirm === "") ||
            (this.state.curText_nickname === "") ||
            (this.state.curText_phone === "") ||
            (this.state.curText_qqNumber === "") ||
            (this.state.curText_invitationCode === "")
        ) {
            AlertIOS.alert(
                '',
                '未填写全部信息'
            );
            this.setState({
                loginBtnDisabled: false
            });
            return;
        } else if(this.state.curText_password!==this.state.curText_password_confirm){
            AlertIOS.alert(
                '',
                '两次密码输入不一致'
            );
            this.setState({
                loginBtnDisabled: false
            });
            return;
        }
        else {
            return fetch(globalServerIP, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "query": `mutation {
                              submitUser(
                                            accountName:"${this.state.curText_name}",
                                            password:"${this.state.curText_password}",
                                            nickName:"${this.state.curText_nickname}",
                                            phone:"${this.state.curText_phone}",
                                            qqNumber:"${this.state.curText_qqNumber}",
                                            invitationCode:"${this.state.curText_invitationCode}"
                              ){
                                message
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
                    if (json.data.submitUser.message !== "注册成功") {
                        this.setState({
                            loginBtnDisabled: false
                        });
                        AlertIOS.alert(
                            '注册错误',
                            json.data.submitUser.message
                        );
                    } else {
                        console.log("注册成功");
                        //_go_Login
                        this.context.router.transitionTo('/login');
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
    },
    render() {
        return (
            <ScrollView>
                <View style={styles.parent}>
                    <View style={{flex:1}}>
                        <Text style={{paddingTop:14,paddingLeft:37,height:40}}>会员注册</Text>
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
                            style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                            <View style={{flex:3}}>
                                <Text style={{fontSize:15,marginLeft:15}}>密码确认</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    secureTextEntry={true}
                                    onChange={
                                    (event) => this.updatePasswordConfirmText(event.nativeEvent.text)
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
                                <Text style={{fontSize:15,marginLeft:15}}>昵称</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    onChange={
                                    (event) => this.updateNicknameText(event.nativeEvent.text)
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
                                <Text style={{fontSize:15,marginLeft:15}}>电话号码</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    onChange={
                                    (event) => this.updatePhoneText(event.nativeEvent.text)
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
                                <Text style={{fontSize:15,marginLeft:15}}>QQ</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    onChange={
                                    (event) => this.updateQQNumberText(event.nativeEvent.text)
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
                                <Text style={{fontSize:15,marginLeft:15}}>邀请码</Text>
                            </View>
                            <View style={{flex:7,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    onChange={
                                    (event) => this.updateInvitationCodeText(event.nativeEvent.text)
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
                                    onClick={this.onRegister}
                            ><Text
                                style={{fontSize:14}}>{this.state.loginBtnDisabled ? "loading" : "注册"}</Text></Button>
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

let Register = connect()(Test1);

export default Register;