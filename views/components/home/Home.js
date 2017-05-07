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
import {moneyIcon,peopleIcon,treasureIcon} from './Icon';
const MyQuery = gql`query {
                        getToken (id:"1234"){ 
                            token
                        } 
                    }`;
let Test = React.createClass({
    // ask for `router` from context
    contextTypes: {
        router: React.PropTypes.object
    },
    getInitialState() {
        return {};
    },
    test(){
        if(globalUser.accountName===undefined || globalUser.token === undefined){
            this.context.router.transitionTo('/login');
        }else {
            this.context.router.transitionTo('/bj28');
        }
    },
    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.top_container}>
                    <Carousel
                        autoplay
                        infinite
                        dots={false}
                    >
                        {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR', 'AiyWuByWklrrUDlFignR'].map((ii) => (
                            <Image
                                style={styles.top_img}
                                key={ii}
                                source={{uri:`https://zos.alipayobjects.com/rmsportal/${ii}.png`}} resizeMode="stretch"
                            />
                        ))}
                    </Carousel>
                </View>
                <View style={styles.mid_container}>
                    <View style={styles.mid_left}>
                        <View style={styles.mid_left_top}>
                            <View style={{flex:3,backgroundColor:'white'}}>
                                <Image
                                    style={{height:26,width:26,marginLeft:10,marginTop:2}}
                                    source={{uri: moneyIcon}} resizeMode="stretch"
                                />
                            </View>
                            <View style={{flex:17}}>
                                <Text style={{paddingTop:10,fontSize:12}}>
                                    <Text style={{color:'#A9A9A9'}}>用户已赚 </Text>
                                    <Text style={{color:'black'}}>9999999999元宝</Text>
                                </Text>
                            </View>
                        </View>
                        <View style={styles.mid_left_bot}>
                            <View style={{flex:3,backgroundColor:'white'}}>
                                <Image
                                    style={{height:26,width:26,marginLeft:10,marginTop:2}}
                                    source={{uri: peopleIcon}} resizeMode="stretch"
                                />
                            </View>
                            <View style={{flex:17}}>
                                <Text style={{paddingTop:10,fontSize:12}}>
                                    <Text style={{color:'#A9A9A9'}}>注册人数 </Text>
                                    <Text style={{color:'black'}}>99999999人</Text>
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.mid_right}>
                        <View style={styles.mid_right_top}>
                            <Text style={{paddingTop:7}}>
                                <Text style={{color:'#4169E1',fontSize:32}}>98</Text>
                                <Text style={{color:'#A9A9A9'}}>%</Text>
                            </Text>
                        </View>
                        <View style={styles.mid_right_bot}>
                            <Text style={{color:'#A9A9A9',fontSize:10}}> 赚钱率</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.bot_container}>
                    <View style={styles.bot_container_left}>
                        <TouchableHighlight
                            style={{borderRadius: 7}}
                            onPress={e=>{}}
                        >
                            <Image style={{height:289,borderRadius: 7}}
                                   source={{uri:treasureIcon}}
                                   resizeMode="stretch"
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={styles.bot_container_right}>
                        <TouchableHighlight
                            style={{borderRadius: 7}}
                            onPress={this.test}
                        >
                            <Image style={{height:289,borderRadius: 7}}
                                   source={{uri:treasureIcon}}
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
        position: 'absolute',
        backgroundColor: '#F5F5F5',
        top: 64,
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
        marginRight:5
    },
    bot_container_right: {
        borderRadius: 7,
        flex: 1,
        marginLeft:5
    }
});


let Test1 = graphql(MyQuery)(Test);

let Home = connect()(Test1);

export default Home;