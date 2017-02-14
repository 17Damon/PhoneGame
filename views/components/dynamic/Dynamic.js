/**
 * Created by zhubg on 2017/1/7.
 */

import React, {Component} from 'react';
import {Button, Toast, TabBar, Icon, Carousel, Tabs} from 'antd-mobile';
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
                    <View style={{flex:1,marginTop:10,height:171}}>
                        <Carousel
                            autoplay
                            infinite
                            dots={false}
                        >
                            {['AiyWuByWklrrUDlFignR', 'TekJlZRVCjLFexlOCuWn', 'AiyWuByWklrrUDlFignR', 'AiyWuByWklrrUDlFignR'].map((ii) => (
                                <Image
                                    style={styles.top_img}
                                    key={ii}
                                    source={{uri:`https://zos.alipayobjects.com/rmsportal/${ii}.png`}}
                                    resizeMode="stretch"
                                />
                            ))}
                        </Carousel>
                    </View>

                    <View style={{ flex: 1, marginLeft: 10,marginRight:10,backgroundColor:'white'}}>
                        <Tabs defaultActiveKey="1">
                            <Tabs.TabPane tab="通知公告" key="1">
                                <View style={{flex:1,flexDirection: 'column'}}>
                                    <TouchableHighlight onPress={e=>{alert('1234')}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </Tabs.TabPane>
                            <Tabs.TabPane tab="我的消息" key="2">
                                <View style={{flex:1,flexDirection: 'column'}}>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                    <TouchableHighlight onPress={e=>{}}>
                                        <View
                                            style={{flexDirection: 'row',alignItems: 'center',justifyContent: 'space-between',borderBottomColor:'#F5F5F5',borderBottomWidth:1}}>
                                            <Text style={{paddingTop:14,paddingLeft:25,height:40}}>维护公告</Text>
                                            <Text
                                                style={{paddingTop:14,height:40,paddingRight:10,fontSize:12,color:'silver'}}>2017-01-08</Text>
                                        </View>
                                    </TouchableHighlight>
                                </View>
                            </Tabs.TabPane>
                        </Tabs>
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

let Dynamic = connect()(Test1);

export default Dynamic;
