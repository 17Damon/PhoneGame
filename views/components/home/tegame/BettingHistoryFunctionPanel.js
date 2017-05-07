/**
 * Created by zhubg on 2017/4/20.
 */
'use strict';
import React, {Component} from 'react';
import {Button, Switch, InputItem, Toast} from 'antd-mobile';
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
import lodashArray from 'lodash/array';
export class BettingHistoryFunctionPanel extends React.Component {
    state = {
        sel: '',
        cancelBettingRecordList: [],
        currentBettingRecordList: [],
        previousBettingRecordList: []
    };
    onSel = (sel) => {
        this.setState({sel});
        this.props.onClose();
    };


    componentDidMount() {
        let that = this;
        let accountName = "ffm";
        let Test_Query = `query getCAndPBettingRecordByPeriodNumAndAccountName($accountName: String!) {
                              getCurrentAndPreviousBettingRecordByPeriodNumAndAccountName(accountName:$accountName) {
                                message
                              }
                            }`;
        fetch('http://localhost:3000/graphql', {
            method: 'POST',
            body: JSON.stringify(
                {
                    "query": Test_Query,
                    "variables": {
                        "accountName": accountName
                    }
                }
            ),
            headers: {'Content-Type': 'application/json'}
        })
            .then(function (res) {
                return res.json();
            }).then(function (json) {
            //处理上一期记录
            let previousBettingRecord = JSON.parse(json.data.getCurrentAndPreviousBettingRecordByPeriodNumAndAccountName.message).previousBettingRecord;
            let winList = [];
            let loseList = [];
            for (let i = 0; i < previousBettingRecord.length; i++) {
                let tempWinList = previousBettingRecord[i].bettingGain;
                let tempLoseList = previousBettingRecord[i].bettingContents;
                for (let j = 0; j < previousBettingRecord[i].bettingContents.length; j++) {
                    if (previousBettingRecord[i].bettingGain.length > 0) {
                        for (let k = 0; k < previousBettingRecord[i].bettingGain.length; k++) {
                            if (
                                previousBettingRecord[i].bettingContents[j].bettingName === "point" &&
                                previousBettingRecord[i].bettingGain[k].bettingName === "point" &&
                                (previousBettingRecord[i].bettingContents[j].pointNum === previousBettingRecord[i].bettingGain[k].pointNum ) &&
                                (previousBettingRecord[i].bettingContents[j].bettingNum === previousBettingRecord[i].bettingGain[k].bettingNum )

                            ) {
                                lodashArray.remove(tempLoseList, function (n) {
                                    return (
                                        n.bettingName === "point" &&
                                        n.bettingNum === previousBettingRecord[i].bettingContents[j].bettingNum &&
                                        n.pointNum === previousBettingRecord[i].bettingContents[j].pointNum
                                    );
                                });
                            } else if (
                                previousBettingRecord[i].bettingContents[j].bettingName !== "point" &&
                                (previousBettingRecord[i].bettingContents[j].bettingName === previousBettingRecord[i].bettingGain[k].bettingName) &&
                                (previousBettingRecord[i].bettingContents[j].bettingNum === previousBettingRecord[i].bettingGain[k].bettingNum )

                            ) {

                                lodashArray.remove(tempLoseList, function (n) {
                                    return (
                                        n.bettingName !== "point" &&
                                        n.bettingName === previousBettingRecord[i].bettingContents[j].bettingName &&
                                        n.bettingNum === previousBettingRecord[i].bettingContents[j].bettingNum
                                    );
                                });
                            }
                        }
                    }
                }
                //累加
                winList = lodashArray.concat(winList, tempWinList);
                loseList = lodashArray.concat(loseList, tempLoseList);
            }

            let preListKey = 1;
            for (let i = 0; i < winList.length; i++) {

                let bettingName = '';
                if (winList[i].bettingName === "big") {
                    bettingName = "大";
                } else if (winList[i].bettingName === "small") {
                    bettingName = "小";
                } else if (winList[i].bettingName === "single") {
                    bettingName = "单";
                } else if (winList[i].bettingName === "double") {
                    bettingName = "双";
                } else if (winList[i].bettingName === "bigSingle") {
                    bettingName = "大单";
                } else if (winList[i].bettingName === "smallSingle") {
                    bettingName = "小单";
                } else if (winList[i].bettingName === "bigDouble") {
                    bettingName = "大双";
                } else if (winList[i].bettingName === "smallDouble") {
                    bettingName = "小双";
                } else if (winList[i].bettingName === "maximum") {
                    bettingName = "极大";
                } else if (winList[i].bettingName === "minimal") {
                    bettingName = "极小";
                } else if (winList[i].bettingName === "leopard") {
                    bettingName = "豹子";
                } else if (winList[i].bettingName === "sequence") {
                    bettingName = "顺子";
                } else if (winList[i].bettingName === "pair") {
                    bettingName = "对子";
                } else if (winList[i].bettingName === "point") {
                    bettingName = "点数字";
                } else {
                    bettingName = "奇怪" + winList[i].bettingName;
                }

                winList[i].winOrLose = true;
                winList[i].bettingName = bettingName;
                winList[i].bettingName = bettingName;
                winList[i].key = preListKey;
                preListKey++;
            }
            for (let i = 0; i < loseList.length; i++) {

                let bettingName = '';
                if (loseList[i].bettingName === "big") {
                    bettingName = "大";
                } else if (loseList[i].bettingName === "small") {
                    bettingName = "小";
                } else if (loseList[i].bettingName === "single") {
                    bettingName = "单";
                } else if (loseList[i].bettingName === "double") {
                    bettingName = "双";
                } else if (loseList[i].bettingName === "bigSingle") {
                    bettingName = "大单";
                } else if (loseList[i].bettingName === "smallSingle") {
                    bettingName = "小单";
                } else if (loseList[i].bettingName === "bigDouble") {
                    bettingName = "大双";
                } else if (loseList[i].bettingName === "smallDouble") {
                    bettingName = "小双";
                } else if (loseList[i].bettingName === "maximum") {
                    bettingName = "极大";
                } else if (loseList[i].bettingName === "minimal") {
                    bettingName = "极小";
                } else if (loseList[i].bettingName === "leopard") {
                    bettingName = "豹子";
                } else if (loseList[i].bettingName === "sequence") {
                    bettingName = "顺子";
                } else if (loseList[i].bettingName === "pair") {
                    bettingName = "对子";
                } else if (loseList[i].bettingName === "point") {
                    bettingName = "点数字";
                } else {
                    bettingName = "奇怪" + loseList[i].bettingName;
                }
                loseList[i].winOrLose = false;
                loseList[i].bettingName = bettingName;
                loseList[i].key = preListKey;
                preListKey++;
            }

            //处理本期记录
            let currentBettingRecord = JSON.parse(json.data.getCurrentAndPreviousBettingRecordByPeriodNumAndAccountName.message).currentBettingRecord;
            let bettingList = [];
            preListKey = 1;

            for (let i = 0; i < currentBettingRecord.length; i++) {
                let tempBettingList = lodashArray.concat([], currentBettingRecord[i].bettingContents);
                for (let j = 0; j < tempBettingList.length; j++) {

                    let bettingName = '';
                    if (tempBettingList[j].bettingName === "big") {
                        bettingName = "大";
                    } else if (tempBettingList[j].bettingName === "small") {
                        bettingName = "小";
                    } else if (tempBettingList[j].bettingName === "single") {
                        bettingName = "单";
                    } else if (tempBettingList[j].bettingName === "double") {
                        bettingName = "双";
                    } else if (tempBettingList[j].bettingName === "bigSingle") {
                        bettingName = "大单";
                    } else if (tempBettingList[j].bettingName === "smallSingle") {
                        bettingName = "小单";
                    } else if (tempBettingList[j].bettingName === "bigDouble") {
                        bettingName = "大双";
                    } else if (tempBettingList[j].bettingName === "smallDouble") {
                        bettingName = "小双";
                    } else if (tempBettingList[j].bettingName === "maximum") {
                        bettingName = "极大";
                    } else if (tempBettingList[j].bettingName === "minimal") {
                        bettingName = "极小";
                    } else if (tempBettingList[j].bettingName === "leopard") {
                        bettingName = "豹子";
                    } else if (tempBettingList[j].bettingName === "sequence") {
                        bettingName = "顺子";
                    } else if (tempBettingList[j].bettingName === "pair") {
                        bettingName = "对子";
                    } else if (tempBettingList[j].bettingName === "point") {
                        bettingName = "点数字";
                    } else {
                        bettingName = "奇怪" + tempBettingList[j].bettingName;
                    }
                    tempBettingList[j].bettingName = bettingName;
                    tempBettingList[j].key = preListKey;
                    preListKey++;
                }
                //累加
                bettingList = lodashArray.concat(bettingList, tempBettingList);
            }

            //设置变量
                that.setState({
                    previousBettingRecordList: lodashArray.concat(winList, loseList),
                    currentBettingRecordList: lodashArray.concat([], bettingList)
                });

        }).catch(err=> {
            console.log(err);
        });
    };

    render() {
        let cancelBettingRecordList = [];
        return (
            <View style={{height:0.5*this.props.phoneHeigt}}>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    snapToInterval={2}
                >
                    <View style={styles.parent_panel}>

                        {/*本期投注详情*/}
                        <View
                            style={{flex:1,flexDirection: 'row',justifyContent:"space-between",alignItems:"center",marginRight:5 }}>
                            <View>
                                <Text style={{paddingTop:14,paddingLeft:37,height:30}}>
                                    第 {this.props.currentPeriodNum} 期下注记录
                                </Text>
                                <Text
                                    style={{paddingTop:7,paddingBottom:14,paddingLeft:37,height:30,color:'red',fontSize:12}}>
                                    提示：点击左侧开关以选中要取消的记录
                                </Text>
                            </View>

                            <Button type="primary"
                                    style={{borderRadius: 7,height: 0.05 * this.props.phoneHeigt}}
                                    onClick={(e)=>{this.props.onClose();}}
                            ><Text style={{fontSize:12}}>关闭</Text></Button>

                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>

                            {this.state.currentBettingRecordList.map(function (ii) {
                                    return (<View
                                            style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3,borderColor: 'silver',borderBottomWidth: 0.5}}
                                            key={ii.key}>
                                            <View style={{flex:2}}>
                                                <Switch
                                                    onChange={(value)=>{
                                                            if (value){
                                                                if(ii.bettingName === "点数字"){
                                                                    cancelBettingRecordList.push({
                                                                    bettingName: ii.bettingName,
                                                                    pointNum: ii.pointNum,
                                                                    bettingNum: ii.bettingNum,
                                                                    key:ii.key
                                                                    });
                                                                }else {
                                                                    cancelBettingRecordList.push({
                                                                        bettingName: ii.bettingName,
                                                                        bettingNum: ii.bettingNum,
                                                                        key:ii.key
                                                                    })
                                                                }
                                                            }else {
                                                                if(ii.bettingName === "点数字"){
                                                                    lodashArray.remove(cancelBettingRecordList, function (n) {
                                                                        return (
                                                                            n.bettingName === ii.bettingName &&
                                                                            n.bettingNum === ii.bettingNum &&
                                                                            n.pointNum === ii.pointNum &&
                                                                            n.key === ii.key
                                                                        );
                                                                    });
                                                                }else {
                                                                    lodashArray.remove(cancelBettingRecordList, function (n) {
                                                                        return (
                                                                            n.bettingName !== "点数字" &&
                                                                            n.bettingName === ii.bettingName &&
                                                                            n.bettingNum === ii.bettingNum &&
                                                                            n.key === ii.key
                                                                        );
                                                                    });
                                                                }
                                                            }
                                            }}
                                                />
                                            </View>
                                            <View style={{flex:4}}>
                                                <Text
                                                    style={{fontSize:15,marginLeft:15}}>{ii.bettingName === "点数字" ? ii.bettingName + "  " + ii.pointNum : ii.bettingName}</Text>
                                            </View>
                                            <View style={{flex:4}}>
                                                <Text style={{fontSize:15}}>{ii.bettingNum}</Text>
                                            </View>
                                        </View>

                                    )
                                }
                            )}


                            <View style={{margin:10}}>
                                <Button type={this.state.currentBettingRecordList<=0?"":"primary"}
                                        style={{borderRadius: 7,height: 0.05 * this.props.phoneHeigt}}
                                        disabled={this.state.currentBettingRecordList<=0}
                                        onClick={e=>{

                                            if (cancelBettingRecordList.length > 0) {
                                            for (let i = 0; i < cancelBettingRecordList.length; i++) {
                                            let bettingName = '';
                                            if (cancelBettingRecordList[i].bettingName === "大") {
                                                bettingName = "big";
                                            } else if (cancelBettingRecordList[i].bettingName === "小") {
                                                bettingName = "small";
                                            } else if (cancelBettingRecordList[i].bettingName === "单") {
                                                bettingName = "single";
                                            } else if (cancelBettingRecordList[i].bettingName === "双") {
                                                bettingName = "double";
                                            } else if (cancelBettingRecordList[i].bettingName === "大单") {
                                                bettingName = "bigSingle";
                                            } else if (cancelBettingRecordList[i].bettingName === "小单") {
                                                bettingName = "smallSingle";
                                            } else if (cancelBettingRecordList[i].bettingName === "大双") {
                                                bettingName = "bigDouble";
                                            } else if (cancelBettingRecordList[i].bettingName === "小双") {
                                                bettingName = "smallDouble";
                                            } else if (cancelBettingRecordList[i].bettingName === "极大") {
                                                bettingName = "maximum";
                                            } else if (cancelBettingRecordList[i].bettingName === "极小") {
                                                bettingName = "minimal";
                                            } else if (cancelBettingRecordList[i].bettingName === "豹子") {
                                                bettingName = "leopard";
                                            } else if (cancelBettingRecordList[i].bettingName === "顺子") {
                                                bettingName = "sequence";
                                            } else if (cancelBettingRecordList[i].bettingName === "对子") {
                                                bettingName = "pair";
                                            } else if (cancelBettingRecordList[i].bettingName === "点数字") {
                                                bettingName = "point";
                                            } else {
                                                bettingName = "奇怪" + cancelBettingRecordList[i].bettingName;
                                            }

                                            cancelBettingRecordList[i].bettingName = bettingName;
                                            delete cancelBettingRecordList[i].key;
                                            }

                                            console.log(cancelBettingRecordList);

                                            this.setState({
                                                cancelBettingBtnDisabled: true
                                            });

                                            // let bettingContents = [
                                            //     {
                                            //         pointNum: "0",
                                            //         bettingName: "point",
                                            //         bettingNum: 300
                                            //     },
                                            //     {
                                            //         pointNum: "0",
                                            //         bettingName: "point",
                                            //         bettingNum: 300
                                            //     }
                                            //     ,
                                            //     {
                                            //         pointNum: "0",
                                            //         bettingName: "point",
                                            //         bettingNum: 300
                                            //     },
                                            //     {
                                            //         pointNum: "1",
                                            //         bettingName: "point",
                                            //         bettingNum: 300
                                            //     },
                                            //     {
                                            //         bettingName: "small",
                                            //         bettingNum: 1000
                                            //     }
                                            // ];

                                            let Test_Query = `mutation submitCancelBettingRecorder($accountName: String!, $token: String!, $bettingContents: [BettingContent]) {
                                                              submitCancelBettingRecord(accountName: $accountName,token: $token,bettingContents: $bettingContents) {
                                                                message
                                                                }
                                                              }`;
                                            fetch(globalServerIP, {
                                                method: 'POST',
                                                body: JSON.stringify(
                                                    {
                                                        "query": Test_Query,
                                                        "variables": {
                                                            "accountName": globalUser.accountName,
                                                            "token": globalUser.token,
                                                            "bettingContents": cancelBettingRecordList

                                                        }
                                                    }
                                                ),
                                                headers: {'Content-Type': 'application/json'}
                                            })
                                                .then(function (res) {
                                                    return res.json();
                                                }).then(function (json) {
                                                console.log(json);
                                                if (json.data.submitCancelBettingRecord.message === "取消成功") {
                                                    Toast.success("取消成功", 0.5);
                                                } else {
                                                    Toast.fail(json.data.submitCancelBettingRecord.message, 0.5);
                                                }
                                            }).catch((err)=> {
                                                console.log(err);
                                                this.setState({
                                                    bettingBtnDisabled: false
                                                });
                                                Toast.fail("网络错误", 0.5);
                                            });

                                                // fetch(globalServerIP, {
                                                //     method: 'POST',
                                                //     body: JSON.stringify({
                                                //         "query": Test_Query,
                                                //         "variables":{
                                                //             "accountName":globalUser.accountName,
                                                //             "token":globalUser.token,
                                                //             "bettingContents":bettingContents
                                                //         }
                                                //     }),
                                                //     headers: {'Content-Type': 'application/json'}
                                                // })
                                                // .then(function (res) {
                                                //     return res.json();
                                                // }).then(function (json) {
                                                //     console.log(json);
                                                //
                                                // }.bind(this)).catch((err)=> {
                                                //         console.log(err);
                                                //         // this.setState({
                                                //         //     bettingBtnDisabled:false
                                                //         // });
                                                //         Toast.fail("网络错误",0.5);
                                                //     });
                                            } else {
                                                this.props.onClose();
                                            }
                                        }}
                                >
                                    <Text style={{fontSize:12}}>
                                        {this.state.bettingBtnDisabled ? "loading" : "取消投注"}
                                    </Text>
                                </Button>
                            </View>
                        </View>

                        {/*上期盈亏记录*/}
                        <View style={{flex:1}}>
                            <Text style={{paddingTop:14,paddingLeft:37,height:40}}>第 {this.props.previousPeriodNum} 期
                                下注记录</Text>
                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>

                            {this.state.previousBettingRecordList.map((ii) => (
                                <View
                                    style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3,borderColor: 'silver',borderBottomWidth: 0.5}}
                                    key={ii.key}>
                                    <View style={{flex:3}}>
                                        <Text
                                            style={{fontSize:15,marginLeft:15}}>{ii.bettingName === "点数字" ? ii.bettingName + "  " + ii.pointNum : ii.bettingName}</Text>
                                    </View>
                                    <View style={{flex:3}}>
                                        <Text style={{fontSize:15}}>{ii.bettingNum}</Text>
                                    </View>
                                    <View style={{flex:2}}>
                                        <Text
                                            style={{fontSize:15,color:ii.winOrLose?"red":"green"}}>{ii.winOrLose ? "赚取" : "花费"}</Text>
                                    </View>
                                    <View style={{flex:2}}>
                                        <Text
                                            style={{fontSize:15}}>{ii.winOrLose ? ii.oddsNum * ii.bettingNum : ii.bettingNum}</Text>
                                    </View>
                                </View>
                            ))}

                        </View>
                        <View style={{margin:10}}>
                            <Button type={"primary"}
                                    style={{borderRadius: 7,height: 0.05 * this.props.phoneHeigt}}
                                    onClick={(e)=>{
                                        this.props.onClose();
                                    }}
                            >
                                <Text style={{fontSize:12}}>
                                    {"关闭"}
                                </Text>
                            </Button>
                        </View>

                    </View>

                    <View style={{}}>
                        <View style={{height:50,flexDirection: 'row'}}>
                            <View styel={{flex:2}}>

                            </View>
                            <View styel={{flex:8}}>

                            </View>
                        </View>
                    </View>

                </ScrollView>

            </View>


        );
    }
}

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
        marginTop: 0
    }
});
