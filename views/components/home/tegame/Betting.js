/**
 * Created by zhubg on 2017/1/16.
 */

import React, {Component} from 'react';
import {Button, Toast, TabBar} from 'antd-mobile';
import {
    StyleSheet,
    Text,
    TextInput,
    View,
    NavigatorIOS,
    ScrollView,
    Image,
    TouchableHighlight
} from 'react-native';
import {graphql} from 'react-apollo';
import gql from 'graphql-tag';
import {connect} from 'react-redux';
const MyQuery = gql`query {
                        getToken (id:"1234"){ 
                            token
                        } 
                    }`;
let Test = React.createClass({
        getInitialState() {
            return {
                curText: '<No Event>'
            };
        },
        updateText(text) {
            return (
                this.setState({
                        curText: text
                    }
                ))
        },
        test()
        {
            // console.log(this.props.data.getToken.token);
            // console.log(this);
            // Toast.info('token: ' + this.props.data.getToken.token);
            // Toast.info('token: ');
            this.context.router.transitionTo('/bj28');
        }
        ,
        _go_Betting()
        {
            // console.log(this.props.data.getToken.token);
            // console.log(this);
            // Toast.info('token: ' + this.props.data.getToken.token);
            // Toast.info('token: ');
            this.context.router.transitionTo('/betting');
        }
        ,
// ask for `router` from context
        contextTypes: {
            router: React.PropTypes.object
        }
        ,
        render()
        {
            return (
                <View style={styles.parent}>
                    <View style={styles.bot_container}>
                        <View style={styles.bot_container_top}>
                            <View style={styles.bot_container_top_top}>
                                <View style={styles.bot_container_top_top_left}>
                                    <Text style={{fontSize:13,color:'#696969'}}>距离<Text style={{color:'blue'}}> 803356 </Text>期截止</Text>
                                </View>
                                <View style={styles.bot_container_top_top_right}>
                                    <Text style={{fontSize:13,color:'#696969'}}>封盘中</Text>
                                </View>
                            </View>
                            <View style={styles.bot_container_top_bot}>
                                <Text style={{fontSize:13}}>第<Text style={{color:'blue'}}>803356</Text>期<Text style={{color:'blue'}}> 9 + 4 + 3 =16（大,双）</Text></Text>
                            </View>
                        </View>

                        <View style={styles.bot_container_mid}>
                            <ScrollView
                                automaticallyAdjustContentInsets={false}
                                snapToInterval={2}
                                snapToAlignment='end'
                            >
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                                <View style={{height:100,marginTop:10}}>
                                    <View style={{flex:1,height:30,flexDirection: 'row'}}>
                                        <View style={{flex:2,marginLeft:10}}>
                                            <Image style={{height:46,width:46,borderRadius: 23}}
                                                   source={{uri:`https://lh5.googleusercontent.com/-MlnvEdpKY2w/AAAAAAAAAAI/AAAAAAAAAFw/x6wHNLJmtQ0/s0-c-k-no-ns/photo.jpg`}}
                                                   resizeMode="stretch"
                                            />
                                        </View>

                                        <View
                                            style={{flex:14,flexDirection:'column',justifyContent: 'center',marginLeft:10}}>
                                            <Text
                                                style={{paddingTop:3,paddingLeft:0,fontSize:11,height:20,color:'#696969'}}>富龙</Text>
                                            <View
                                                style={{height:60,width:200,paddingTop:5,backgroundColor:'rgba(255,140,0,0.8)',borderRadius: 7}}>
                                                <Text
                                                    style={{fontSize:12,color:'white',paddingLeft:5,paddingTop:5}}>
                                                    金额： 100元宝
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            </ScrollView>
                        </View>
                        <View style={styles.bot_container_bot}>
                            <View style={{flex:2}}>
                                <Button type="primary"
                                        style={{borderRadius: 7,height: 32,marginRight:3}}
                                        onClick={e=>{
                                            console.log(this.state.curText);
                                        if(this.state.curText==='da100'){
                                            console.log(this.state.curText);
                                           alert('下注100元宝');

                                        }else {
                                           alert('下注不合法！');

                                        }
                                        // alert(this.state.curText)



                                        }}
                                ><Text style={{fontSize:12}}>投注</Text></Button>

                            </View>
                            <View style={{flex:8}}>
                                <TextInput
                                    autoCapitalize="none"
                                    placeholder=""
                                    autoCorrect={false}
                                    onChange={



                                    (event) => this.updateText(event.nativeEvent.text)
                                    }
                                    style={styles.default}
                                />
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
        right: 0,
        bottom: 49
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
        height: 100
    },
    bot_container_top_top: {
        flexDirection: 'row',
        marginTop: 0,
        height: 65,
        paddingTop:5,
        paddingBottom:5
    },
    bot_container_top_top_left: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth:1,
        borderRightColor:'silver'
    },
    bot_container_top_top_right: {
        marginLeft: 0,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    bot_container_top_bot: {
        flex: 1,
        height: 35,
        backgroundColor: 'white',
        // alignItems: 'center',
        justifyContent: 'center',
        marginLeft:10,
        marginRight:10,
        paddingLeft:15
    },
    bot_container_mid: {
        flexDirection: 'column',
        height: 463,
    },
    bot_container_bot: {
        flexDirection: 'row',
        marginTop: 0,
        height: 40,
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
        fontSize: 13,
        padding: 4
    }
});


let Test1 = graphql(MyQuery)(Test);

let Betting = connect()(Test1);

export default Betting;

