/**
 * Created by zhubg on 2017/1/16.
 */

import React, {Component} from 'react';
import {Button, Toast, Popup, Switch, InputItem} from 'antd-mobile';
import {BettingPanel} from './BettingPanel';
import {BettingHistoryFunctionPanel} from './BettingHistoryFunctionPanel';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    NavigatorIOS,
    ScrollView,
    Image,
    TouchableHighlight,
    AlertIOS,
    Keyboard,
    Platform,
    Dimensions,
} from 'react-native';
var _scrollView:ScrollView;

//屏幕尺寸
const phoneHeigt = Dimensions.get('window').height;
const phoneWidth = Dimensions.get('window').width;

const isIPhone = new RegExp('\\biPhone\\b|\\biPod\\b', 'i').test(window.navigator.userAgent);
let wrapProps;
if (isIPhone) {
    // Note: the popup content will not scroll.
    wrapProps = {
        // onTouchStart: e => e.preventDefault(),
    };
}

let Betting = React.createClass({
        getInitialState() {
            return {
                messages: [],
                curText: "",
                disabled: false,
                messagesNumber: 0,
                midScrollView: 0.705 * phoneHeigt,
                yOffset: 0,
                keyboardHideFlag: true,
                falseSwitchIsOn: true,
                currentPeriodNum: "loading",
                previousPeriodNum: "loading",
                gainBonusSum: "loading",
                openingState: false,
                goldPoints: "loading",
                num1: 6699,
                num2: 0,
                num3: 0,
                sum: 0
            };
        },
        componentDidMount(){
            let that = this;
            this.keyboardShow = Platform.OS === 'ios' ?
                Keyboard.addListener('keyboardWillShow', this.updateKeyboardSpace) : Keyboard.addListener('keyboardDidShow', this.updateKeyboardSpace);
            this.keyboardHide = Platform.OS === 'ios' ?
                Keyboard.addListener('keyboardWillHide', this.resetKeyboardSpace) : Keyboard.addListener('keyboardDidHide', this.resetKeyboardSpace);
            //
            globalSocket.on('some event', function (msg) {
                console.log('receive messge : ' + msg);
                let temp = that.state.messages;
                temp.push(msg);
                console.log("yOffset-1: " + that.state.yOffset);
                that.setState({
                    messages: temp,
                    messagesNumber: that.state.messagesNumber + 1,
                    yOffset: that.state.yOffset + 110
                });
                console.log("messagesNumber: " + that.state.messagesNumber);
                console.log("yOffset-2: " + that.state.yOffset);
                if ((!that.state.keyboardHideFlag) && (that.state.messagesNumber > 2)) {
                    _scrollView.scrollTo({y: that.state.yOffset - 220, animated: false});
                } else if ((that.state.keyboardHideFlag) && (that.state.messagesNumber > 4)) {
                    _scrollView.scrollTo({y: that.state.yOffset - 440, animated: false});
                }
            });

            globalSocket.on('serverToClientMessage', function (msg) {
                console.log("serverToClientMessage");
                console.log(msg);
                if (msg.command === "getBettingInformation") {
                    that.getBettingInformation();
                }
            });
            // socket.removeListener('some event');
            this.getBettingInformation();

        },
        updateKeyboardSpace(frames){
            let that = this;
            if (!frames.endCoordinates) {
                return;
            }
            let keyboardSpace = frames.endCoordinates.height;//获取键盘高度
            console.log("keyboardWillShow");
            console.log(keyboardSpace);
            that.setState({
                midScrollView: 0.705 * phoneHeigt - keyboardSpace,
                keyboardHideFlag: false
            });
            if (that.state.messagesNumber >= 3) {
                _scrollView.scrollTo({y: that.state.yOffset - 220, animated: false});
            }
        },
        resetKeyboardSpace(frames){
            let that = this;
            if (!frames.endCoordinates) {
                return;
            }
            let keyboardSpace = frames.endCoordinates.height;//获取键盘高度
            console.log("keyboardWillHide");
            console.log(keyboardSpace);
            that.setState({
                midScrollView: 0.705 * phoneHeigt,
                keyboardHideFlag: true
            });
            if (that.state.messagesNumber === 3) {
                console.log("Hide_messagesNumber: " + that.state.messagesNumber);

                _scrollView.scrollTo({y: that.state.yOffset - 330, animated: false});
            } else if (that.state.messagesNumber > 3) {
                _scrollView.scrollTo({y: that.state.yOffset - 440, animated: false});
            }
        },
        componentWillUnmount(){
            console.log("componentWillUnmount");
            // socket.disconnect();
            globalSocket.removeListener('some event');
            globalSocket.removeListener('serverToClientMessage');
            this.keyboardShow.remove();
            this.keyboardHide.remove();
        },
        updateText(text) {
            return (
                this.setState({
                    curText: text
                })
            )
        },
        sendMessage(){
            console.log("高");
            console.log(Dimensions.get('window').height);
            console.log("宽");
            console.log(Dimensions.get('window').width);
            let that = this;
            let content = arguments[0];
            let Test_Query = `query {
                              newMessage(accountName:"${globalUser.accountName}",token:"${globalUser.token}",content:"${content}") {
                                message
                              }
                            }`;
            fetch(globalServerIP, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "query": Test_Query
                    }
                ),
                headers: {'Content-Type': 'application/json'}
            })
                .then(function (res) {
                    return res.json();
                }).then(function (json) {
                console.log(json);
            });
        },
        getBettingInformation(){
            let that = this;
            let Test_Query = `query  getBettingInfor($accountName: String!, $token: String!) {
                              getBettingInformation(accountName:$accountName,token:$token) {
                                currentPeriodNum
                                previousPeriodNum
                                gainBonusSum
                                openingState
                                goldPoints
                                num1
                                num2
                                num3
                                sum                          
                              }
                            }`;
            fetch(globalServerIP, {
                method: 'POST',
                body: JSON.stringify(
                    {
                        "query": Test_Query,
                        "variables": {
                            "accountName": globalUser.accountName,
                            "token": globalUser.token
                        }
                    }
                ),
                headers: {'Content-Type': 'application/json'}
            })
                .then(function (res) {
                    return res.json();
                }).then(function (json) {
                that.setState({
                    currentPeriodNum: json.data.getBettingInformation.currentPeriodNum,
                    previousPeriodNum: json.data.getBettingInformation.previousPeriodNum,
                    gainBonusSum: json.data.getBettingInformation.gainBonusSum,
                    openingState: json.data.getBettingInformation.openingState,
                    goldPoints: json.data.getBettingInformation.goldPoints,
                    num1: json.data.getBettingInformation.num1,
                    num2: json.data.getBettingInformation.num2,
                    num3: json.data.getBettingInformation.num3,
                    sum: json.data.getBettingInformation.sum
                })
            });
        },
        _go_Betting()
        {
            this.context.router.transitionTo('/betting');
        },
        // ask for `router` from context
        contextTypes: {
            router: React.PropTypes.object
        },
        openBettingPanel(){
            Popup.show(<BettingPanel phoneHeigt={phoneHeigt} phoneWidth={phoneWidth} onClose={() => Popup.hide()}/>,
                {animationType: 'slide-up', wrapProps, maskClosable: true}
            );
        },
        openBettingHistoryFunctionPanel(){
            if (this.state.num1 === 6699) {
                Toast.info("请等待loading结束", 0.5);
            } else {
                Popup.show(<BettingHistoryFunctionPanel phoneHeigt={phoneHeigt} phoneWidth={phoneWidth}
                                                        currentPeriodNum={this.state.currentPeriodNum}
                                                        previousPeriodNum={this.state.previousPeriodNum}
                                                        onClose={() => Popup.hide()}/>,
                    {animationType: 'slide-up', wrapProps, maskClosable: true}
                );
            }

        },
        onClose(sel){
            this.setState({sel});
            Popup.hide();
        },
        render()
        {
            console.log("render");
            let jj = 1;
            const avatarIcon = 'data:image/png;base64,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';
            const myAvatarIcon = 'data:image/png;base64,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';
            return (
                <View style={styles.parent}>
                    <View style={styles.bot_container}>
                        <View style={styles.bot_container_top}>
                            <View style={styles.bot_container_top_top}>
                                <View style={styles.bot_container_top_top_left}>
                                    <View
                                        style={{flex:1,borderBottomWidth: 1,borderBottomColor: 'silver',width:0.48*phoneWidth,alignItems: 'center',justifyContent: 'center' }}>
                                        <Text style={{fontSize:13,color:'black'}}>
                                            第&nbsp;
                                            <Text style={{color:'blue'}}>
                                                {this.state.currentPeriodNum}
                                            </Text>
                                            &nbsp;期
                                        </Text>
                                    </View>
                                    <View style={{flex:1,alignItems: 'center',justifyContent: 'center' }}>
                                        {this.state.openingState ?
                                            (<Text style={{fontSize:13,color:'green'}}>
                                                开盘中
                                            </Text>)
                                            :
                                            (<Text style={{fontSize:13,color:'red'}}>
                                                封盘中
                                            </Text>)
                                        }
                                    </View>
                                </View>
                                <View style={styles.bot_container_top_top_right}>
                                    <View
                                        style={{flex:1,borderBottomWidth: 1,borderBottomColor: 'silver',width:0.48*phoneWidth,alignItems: 'center',justifyContent: 'center' }}>
                                        <Text style={{fontSize:13,color:'black'}}>
                                            余额：&nbsp;
                                            <Text style={{color:'rgba(255,165,0,0.9)'}}>
                                                {this.state.goldPoints}
                                            </Text>
                                            &nbsp;元宝
                                        </Text>
                                    </View>
                                    <TouchableHighlight
                                        style={{flex:1,backgroundColor:'rgba(255,165,0,0),',borderRadius:5,top:2}}
                                        onPress={this.openBettingHistoryFunctionPanel}
                                        underlayColor="rgba(255,255,255,0.7)"
                                    >
                                        <View style={{flex:1,alignItems: 'center',justifyContent: 'center' }}>

                                            {this.state.openingState ?
                                                (<Text style={{fontSize:13,color:'black'}}>
                                                    上期赚取：&nbsp;
                                                    {this.state.num1 === 6699 ?
                                                        <Text style={{color:'blue'}}>
                                                            &nbsp;&nbsp;loading
                                                        </Text>
                                                        :
                                                        <Text style={{color:'rgba(255,165,0,0.9)'}}>
                                                            {this.state.gainBonusSum}
                                                        </Text>
                                                    }
                                                    &nbsp;元宝
                                                </Text>)
                                                :
                                                (<Text style={{fontSize:13,color:'black'}}>
                                                    本期投注：&nbsp;
                                                    {this.state.num1 === 6699 ?
                                                        <Text style={{color:'blue'}}>
                                                            &nbsp;&nbsp;loading
                                                        </Text>
                                                        :
                                                        <Text style={{color:'rgba(255,165,0,0.9)'}}>
                                                            {this.state.gainBonusSum}
                                                        </Text>
                                                    }
                                                    &nbsp;元宝
                                                </Text>)
                                            }
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </View>
                            <View style={styles.bot_container_top_bot}>
                                <Text style={{fontSize:13}}>第&nbsp;<Text
                                    style={{color:'blue'}}>{this.state.previousPeriodNum}</Text>
                                    &nbsp;期
                                    {this.state.num1 === 6699 ?
                                        <Text style={{color:'blue'}}>
                                            &nbsp;&nbsp;loading
                                        </Text>
                                        :
                                        <Text style={{color:'blue'}}>
                                            &nbsp;{this.state.num1} + {this.state.num2} + {this.state.num3}
                                            = {this.state.sum}
                                        </Text>
                                    }
                                </Text>
                            </View>
                        </View>

                        <View style={[styles.bot_container_mid,{height: this.state.midScrollView}]}>
                            <ScrollView
                                ref={(scrollView) => { _scrollView = scrollView; }}
                                automaticallyAdjustContentInsets={false}
                                snapToInterval={2}
                            >
                                {this.state.messages.map((ii) => (
                                    <View style={{height:100,marginTop:10}} key={jj++}>
                                        <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                            <View style={{flex:2,marginLeft:10}}>
                                                <Image style={{height:46,width:46,borderRadius: 23}}
                                                       source={{uri:(ii.nickName===globalUser.nickName)?avatarIcon:myAvatarIcon}}
                                                       resizeMode="stretch"
                                                />
                                            </View>

                                            <View
                                                style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                                <Text
                                                    style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>{ii.nickName}</Text>
                                                <View
                                                    style={{height:60,width:200,paddingTop:5,backgroundColor:(ii.nickName===globalUser.nickName)?'rgba(255,140,0,0.8)':'rgba(0,191,255,0.8)',borderRadius: 7}}>
                                                    <Text
                                                        style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                        {ii.content}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                ))}


                            </ScrollView>
                        </View>

                        <View style={styles.bot_container_bot}>
                            <View style={{flex:2,marginRight:3}}>
                                <Button
                                    style={{borderRadius: 7,height: 0.05 * phoneHeigt,backgroundColor:this.state.openingState?'rgba(255,165,0,0.8)':'rgba(255,165,0,0)'}}
                                    disabled={!this.state.openingState}
                                    onClick={ this.openBettingPanel }
                                ><Text
                                    style={{fontSize:12,color:this.state.openingState?'white':'black'}}>{this.state.openingState ? "投注" : "停投"}</Text></Button>

                            </View>

                            <View style={{flex:6,marginRight:3}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    value={this.state.curText}
                                    onChange={



                                    (event) => this.updateText(event.nativeEvent.text)
                                    }
                                    style={styles.default}
                                />
                            </View>

                            <View style={{flex:2}}>
                                <Button type="primary"
                                        style={{borderRadius: 7,height: 0.05 * phoneHeigt}}
                                        disabled={this.state.disabled}
                                        onClick={
                                            // this.test.bind(this.state.curText)
                                            e=>{
                                                if(this.state.curText!==""){
                                                this.sendMessage(this.state.curText);
                                                this.setState({
                                                    curText: ""
                                                });
                                            }else {
                                                alert('聊天内容不能为空');

                                            }}
                                        }
                                ><Text style={{fontSize:12}}>发送</Text></Button>

                            </View>
                        </View>

                    </View>
                </View>
            )
        }
    })
    ;

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F5F5F5',
        top: 64,
        left: 0,
        right: 0
    },
    parent_panel: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: '#F5F5F5',
        top: 0,
        left: 0,
        right: 0
    },
    bot_container: {
        flexDirection: 'column',
        marginTop: 0,
        marginBottom: 0,
        flex: 1
    },
    bot_container_top: {
        flexDirection: 'column',
        marginTop: 0,
        height: 0.14 * phoneHeigt
    },
    bot_container_top_top: {
        flexDirection: 'row',
        marginTop: 0,
        height: 0.09 * phoneHeigt,
        paddingTop: 5,
        paddingBottom: 5
    },
    bot_container_top_top_left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 1,
        borderRightColor: 'silver',
        flexDirection: 'column'
    },
    bot_container_top_top_right: {
        marginLeft: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    bot_container_top_bot: {
        flex: 1,
        height: 0.05 * phoneHeigt,
        backgroundColor: 'white',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10,
        paddingLeft: 15
    },
    bot_container_mid: {
        flexDirection: 'column'
    },
    bot_container_bot: {
        flexDirection: 'row',
        marginTop: 0,
        height: 0.06 * phoneHeigt,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3
    },
    default: {
        height: 26,
        borderWidth: 0.5,
        borderRadius: 7,
        borderColor: '#696969',
        flex: 1,
        fontSize: 13
        // padding: 4
    }
});

export default Betting;
