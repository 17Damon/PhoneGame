/**
 * Created by zhubg on 2017/3/13.
 */
import React, {Component} from 'react';
import {Button, Switch, InputItem,Toast} from 'antd-mobile';
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
export class BettingPanel extends React.Component {
    state = {
        sel: '',
        bettingBtnDisabled:false,
        //大小单双
        bigSwitchStatus: false,
        bigBettingNum: '',
        smallSwitchStatus: false,
        smallBettingNum: '',
        singleSwitchStatus: false,
        singleBettingNum: '',
        doubleSwitchStatus: false,
        doubleBettingNum: '',
        //组合
        bigSingleSwitchStatus: false,
        bigSingleBettingNum: '',
        smallSingleSwitchStatus: false,
        smallSingleBettingNum: '',
        bigDoubleSwitchStatus: false,
        bigDoubleBettingNum: '',
        smallDoubleSwitchStatus: false,
        smallDoubleBettingNum: '',
        //极值
        maximumSwitchStatus: false,
        maximumBettingNum: '',
        minimalSwitchStatus: false,
        minimalBettingNum: '',
        //点数字
        firstPointSwitchStatus: false,
        firstPoint: '',
        firstPointBettingNum: '',
        secondPointSwitchStatus: false,
        secondPoint: '',
        secondPointBettingNum: '',
        thirdPointSwitchStatus: false,
        thirdPoint: '',
        thirdPointBettingNum: '',
        fourthPointSwitchStatus: false,
        fourthPoint: '',
        fourthPointBettingNum: '',
        //豹顺对
        leopardSwitchStatus: false,
        leopardBettingNum: '',
        sequenceSwitchStatus: false,
        sequenceBettingNum: '',
        pairSwitchStatus: false,
        pairBettingNum: ''
    };
    onSel = (sel) => {
        this.setState({sel});
        this.props.onClose();
    };

    //大小单双
    //大
    updateBigBettingNum(bigBettingNum) {
        if (parseInt(bigBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    bigBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    bigBettingNum: parseInt(bigBettingNum, 10).toString()
                })
            )
        }
    };

    //小
    updateSmallBettingNum(smallBettingNum) {
        if (parseInt(smallBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    smallBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    smallBettingNum: parseInt(smallBettingNum, 10).toString()
                })
            )
        }
    };

    //单
    updateSingleBettingNum(singleBettingNum) {
        if (parseInt(singleBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    singleBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    singleBettingNum: parseInt(singleBettingNum, 10).toString()
                })
            )
        }
    };

    //双
    updateDoubleBettingNum(doubleBettingNum) {
        if (parseInt(doubleBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    doubleBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    doubleBettingNum: parseInt(doubleBettingNum, 10).toString()
                })
            )
        }
    };

    //组合
    //大单
    updateBigSingleBettingNum(bigSingleBettingNum) {
        if (parseInt(bigSingleBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    bigSingleBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    bigSingleBettingNum: parseInt(bigSingleBettingNum, 10).toString()
                })
            )
        }
    };

    //小单
    updateSmallSingleBettingNum(smallSingleBettingNum) {
        if (parseInt(smallSingleBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    smallSingleBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    smallSingleBettingNum: parseInt(smallSingleBettingNum, 10).toString()
                })
            )
        }
    };

    //大双
    updateBigDoubleBettingNum(bigDoubleBettingNum) {
        if (parseInt(bigDoubleBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    bigDoubleBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    bigDoubleBettingNum: parseInt(bigDoubleBettingNum, 10).toString()
                })
            )
        }
    };

    //小双
    updateSmallDoubleBettingNum(smallDoubleBettingNum) {
        if (parseInt(smallDoubleBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    smallDoubleBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    smallDoubleBettingNum: parseInt(smallDoubleBettingNum, 10).toString()
                })
            )
        }
    };

    //极值
    //极大
    updateMaximumBettingNum(maximumBettingNum) {
        if (parseInt(maximumBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    maximumBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    maximumBettingNum: parseInt(maximumBettingNum, 10).toString()
                })
            )
        }
    };

    //极小
    updateMinimalBettingNum(minimalBettingNum) {
        if (parseInt(minimalBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    minimalBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    minimalBettingNum: parseInt(minimalBettingNum, 10).toString()
                })
            )
        }
    };

    //点数字
    //点数字1
    updateFirstPoint(firstPoint) {
        if (parseInt(firstPoint, 10).toString() === "NaN") {
            return (
                this.setState({
                    firstPoint: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    firstPoint: parseInt(firstPoint, 10).toString()
                })
            )
        }
    };

    updateFirstPointBettingNum(firstPointBettingNum) {
        if (parseInt(firstPointBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    firstPointBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    firstPointBettingNum: parseInt(firstPointBettingNum, 10).toString()
                })
            )
        }
    };

    //点数字2
    updateSecondPoint(secondPoint) {
        if (parseInt(secondPoint, 10).toString() === "NaN") {
            return (
                this.setState({
                    secondPoint: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    secondPoint: parseInt(secondPoint, 10).toString()
                })
            )
        }
    };

    updateSecondPointBettingNum(secondPointBettingNum) {
        if (parseInt(secondPointBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    secondPointBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    secondPointBettingNum: parseInt(secondPointBettingNum, 10).toString()
                })
            )
        }
    };

    //点数字3
    updateThirdPoint(thirdPoint) {
        if (parseInt(thirdPoint, 10).toString() === "NaN") {
            return (
                this.setState({
                    thirdPoint: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    thirdPoint: parseInt(thirdPoint, 10).toString()
                })
            )
        }
    };

    updateThirdPointBettingNum(thirdPointBettingNum) {
        if (parseInt(thirdPointBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    thirdPointBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    thirdPointBettingNum: parseInt(thirdPointBettingNum, 10).toString()
                })
            )
        }
    };

    //点数字4
    updateFourthPoint(fourthPoint) {
        if (parseInt(fourthPoint, 10).toString() === "NaN") {
            return (
                this.setState({
                    fourthPoint: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    fourthPoint: parseInt(fourthPoint, 10).toString()
                })
            )
        }
    };

    updateFourthPointBettingNum(fourthPointBettingNum) {
        if (parseInt(fourthPointBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    fourthPointBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    fourthPointBettingNum: parseInt(fourthPointBettingNum, 10).toString()
                })
            )
        }
    };

    //豹顺对
    //豹子
    updateLeopardBettingNum(leopardBettingNum) {
        if (parseInt(leopardBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    leopardBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    leopardBettingNum: parseInt(leopardBettingNum, 10).toString()
                })
            )
        }
    };

    //顺子
    updateSequenceBettingNum(sequenceBettingNum) {
        if (parseInt(sequenceBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    sequenceBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    sequenceBettingNum: parseInt(sequenceBettingNum, 10).toString()
                })
            )
        }
    };

    //对子
    updatePairBettingNum(pairBettingNum) {
        if (parseInt(pairBettingNum, 10).toString() === "NaN") {
            return (
                this.setState({
                    pairBettingNum: parseInt(0, 10).toString()
                })
            )
        } else {
            return (
                this.setState({
                    pairBettingNum: parseInt(pairBettingNum, 10).toString()
                })
            )
        }
    };

    render() {
        return (
            <View style={{height:0.5*this.props.phoneHeigt}}>
                <ScrollView
                    automaticallyAdjustContentInsets={false}
                    snapToInterval={2}
                >
                    <View style={styles.parent_panel}>

                        {/*大小单双*/}
                        <View style={{flex:1,flexDirection: 'row',justifyContent:"space-between",alignItems:"center",marginRight:5 }}>
                            <Text style={{paddingTop:14,paddingLeft:37,height:40}}>大小单双</Text>
                            <Button type="primary"
                                    style={{borderRadius: 7,height: 0.05 * this.props.phoneHeigt}}
                                    onClick={(e)=>{this.props.onClose();}}
                            ><Text style={{fontSize:12}}>关闭</Text></Button>

                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>
                            {/*大*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                bigSwitchStatus: value,
                                                                bigBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>大</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.bigSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.bigSwitchStatus}
                                        onChange={
                                                (event) => this.updateBigBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.bigBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*小*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                smallSwitchStatus: value,
                                                                smallBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>小</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.smallSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.smallSwitchStatus}
                                        onChange={
                                                (event) => this.updateSmallBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.smallBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*单*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                singleSwitchStatus: value,
                                                                singleBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>单</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.singleSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.singleSwitchStatus}
                                        onChange={
                                                (event) => this.updateSingleBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.singleBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*双*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                doubleSwitchStatus: value,
                                                                doubleBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>双</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.doubleSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.doubleSwitchStatus}
                                        onChange={
                                                (event) => this.updateDoubleBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.doubleBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

                        </View>

                        {/*组合*/}
                        <View style={{flex:1}}>
                            <Text style={{paddingTop:14,paddingLeft:37,height:40}}>组合</Text>
                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>
                            {/*大单*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                bigSingleSwitchStatus: value,
                                                                bigSingleBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>大单</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.bigSingleSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.bigSingleSwitchStatus}
                                        onChange={
                                                (event) => this.updateBigSingleBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.bigSingleBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*小单*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                smallSingleSwitchStatus: value,
                                                                smallSingleBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>小单</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.smallSingleSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.smallSingleSwitchStatus}
                                        onChange={
                                                (event) => this.updateSmallSingleBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.smallSingleBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*大双*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                bigDoubleSwitchStatus: value,
                                                                bigDoubleBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>大双</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.bigDoubleSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.bigDoubleSwitchStatus}
                                        onChange={
                                                (event) => this.updateBigDoubleBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.bigDoubleBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*小双*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                smallDoubleSwitchStatus: value,
                                                                smallDoubleBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>小双</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.smallDoubleSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.smallDoubleSwitchStatus}
                                        onChange={
                                                (event) => this.updateSmallDoubleBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.smallDoubleBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

                        </View>

                        {/*极值*/}
                        <View style={{flex:1}}>
                            <Text style={{paddingTop:14,paddingLeft:37,height:40}}>极值</Text>
                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>
                            {/*极大*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                maximumSwitchStatus: value,
                                                                maximumBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>极大</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.maximumSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.maximumSwitchStatus}
                                        onChange={
                                                (event) => this.updateMaximumBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.maximumBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*极小*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                minimalSwitchStatus: value,
                                                                minimalBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>极小</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.minimalSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.minimalSwitchStatus}
                                        onChange={
                                                (event) => this.updateMinimalBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.minimalBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>


                        </View>

                        {/*点数字*/}
                        <View style={{flex:1}}>
                            <Text style={{paddingTop:14,paddingLeft:37,height:40}}>点数字</Text>
                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>
                            {/*点数字1*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                firstPointSwitchStatus: value,
                                                                firstPoint:'',
                                                                firstPointBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:0}}>点数字1</Text>
                                </View>

                                <View style={{flex:2,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.firstPointSwitchStatus?"点数字":"请滑动"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.firstPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateFirstPoint(event.nativeEvent.text)
                                            }
                                        value={this.state.firstPoint}
                                        style={styles.default}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:10}}>元宝</Text>
                                </View>

                                <View style={{flex:4,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.firstPointSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.firstPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateFirstPointBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.firstPointBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

                            {/*点数字2*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                secondPointSwitchStatus: value,
                                                                secondPoint:'',
                                                                secondPointBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:0}}>点数字2</Text>
                                </View>

                                <View style={{flex:2,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.secondPointSwitchStatus?"点数字":"请滑动"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.secondPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateSecondPoint(event.nativeEvent.text)
                                            }
                                        value={this.state.secondPoint}
                                        style={styles.default}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:10}}>元宝</Text>
                                </View>

                                <View style={{flex:4,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.secondPointSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.secondPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateSecondPointBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.secondPointBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

                            {/*点数字3*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                thirdPointSwitchStatus: value,
                                                                thirdPoint:'',
                                                                thirdPointBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:0}}>点数字3</Text>
                                </View>

                                <View style={{flex:2,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.thirdPointSwitchStatus?"点数字":"请滑动"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.thirdPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateThirdPoint(event.nativeEvent.text)
                                            }
                                        value={this.state.thirdPoint}
                                        style={styles.default}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:10}}>元宝</Text>
                                </View>

                                <View style={{flex:4,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.thirdPointSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.thirdPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateThirdPointBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.thirdPointBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

                            {/*点数字4*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                fourthPointSwitchStatus: value,
                                                                fourthPoint:'',
                                                                fourthPointBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:0}}>点数字4</Text>
                                </View>

                                <View style={{flex:2,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.fourthPointSwitchStatus?"点数字":"请滑动"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.fourthPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateFourthPoint(event.nativeEvent.text)
                                            }
                                        value={this.state.fourthPoint}
                                        style={styles.default}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:10}}>元宝</Text>
                                </View>

                                <View style={{flex:4,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.fourthPointSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.fourthPointSwitchStatus}
                                        onChange={
                                                (event) => this.updateFourthPointBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.fourthPointBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

                        </View>

                        {/*豹顺对*/}
                        <View style={{flex:1}}>
                            <Text style={{paddingTop:14,paddingLeft:37,height:40}}>豹顺对</Text>
                        </View>
                        <View
                            style={{backgroundColor:'white',flex:1,borderBottomColor:'#F5F5F5',borderBottomWidth:1,flexDirection: 'column'}}>
                            {/*豹子*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                leopardSwitchStatus: value,
                                                                leopardBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>豹子</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.leopardSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.leopardSwitchStatus}
                                        onChange={
                                                (event) => this.updateLeopardBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.leopardBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*顺子*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                sequenceSwitchStatus: value,
                                                                sequenceBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>顺子</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.sequenceSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.sequenceSwitchStatus}
                                        onChange={
                                                (event) => this.updateSequenceBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.sequenceBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>
                            {/*对子*/}
                            <View
                                style={{flex:1,marginRight:3, flexDirection: 'row',marginTop: 0,height: 40,alignItems: 'center',justifyContent: 'center',padding: 3}}>
                                <View style={{flex:2}}>
                                    <Switch
                                        onChange={(value)=>{
                                                            console.log(value);
                                                            this.setState({
                                                                pairSwitchStatus: value,
                                                                pairBettingNum:''
                                                            });
                                                            // console.log(that.refs.texInputRefer);
                                                            }}
                                    />
                                </View>
                                <View style={{flex:2}}>
                                    <Text style={{fontSize:15,marginLeft:15}}>对子</Text>
                                </View>

                                <View style={{flex:6,marginRight:3}}>
                                    <TextInput
                                        // ref="textInputRefer"
                                        autoCapitalize="none"
                                        placeholder={this.state.pairSwitchStatus?"请输入下注元宝数":"请滑动开关解锁"}
                                        autoCorrect={false}
                                        keyboardType="numeric"
                                        editable={this.state.pairSwitchStatus}
                                        onChange={
                                                (event) => this.updatePairBettingNum(event.nativeEvent.text)
                                            }
                                        value={this.state.pairBettingNum}
                                        style={styles.default}
                                    />
                                </View>
                            </View>

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
                    <Button type={this.state.bettingBtnDisabled?"":"primary"}
                            style={{borderRadius: 7,height: 0.05 * this.props.phoneHeigt}}
                            disabled={this.state.bettingBtnDisabled}
                            onClick={(e)=>{
                            let bettingContents =[];
                            //大小单双
                            if(this.state.bigSwitchStatus && this.state.bigBettingNum !=='' && parseInt(this.state.bigBettingNum, 10)>0 ){
                                console.log("大");
                                console.log(this.state.bigBettingNum);
                                bettingContents.push({
                                                        bettingName: "big",
                                                        bettingNum: parseInt(this.state.bigBettingNum, 10)
                                                        });
                            }
                            if(this.state.smallSwitchStatus && this.state.smallBettingNum !=='' && parseInt(this.state.smallBettingNum, 10)>0 ){
                                console.log("小");
                                console.log(this.state.smallBettingNum);
                                bettingContents.push({
                                                        bettingName: "small",
                                                        bettingNum: parseInt(this.state.smallBettingNum, 10)
                                                        });
                            }
                            if(this.state.singleSwitchStatus && this.state.singleBettingNum !=='' && parseInt(this.state.singleBettingNum, 10)>0 ){
                                console.log("单");
                                console.log(this.state.singleBettingNum);
                                bettingContents.push({
                                                        bettingName: "single",
                                                        bettingNum: parseInt(this.state.singleBettingNum, 10)
                                                        });
                            }
                            if(this.state.doubleSwitchStatus && this.state.doubleBettingNum !=='' && parseInt(this.state.doubleBettingNum, 10)>0 ){
                                console.log("双");
                                console.log(this.state.doubleBettingNum);
                                bettingContents.push({
                                                        bettingName: "double",
                                                        bettingNum: parseInt(this.state.doubleBettingNum, 10)
                                                        });
                            }

                            //组合
                            if(this.state.bigSingleSwitchStatus && this.state.bigSingleBettingNum !=='' && parseInt(this.state.bigSingleBettingNum, 10)>0 ){
                                console.log("大单");
                                console.log(this.state.bigSingleBettingNum);
                                bettingContents.push({
                                                        bettingName: "bigSingle",
                                                        bettingNum: parseInt(this.state.bigSingleBettingNum, 10)
                                                        });
                            }
                            if(this.state.smallSingleSwitchStatus && this.state.smallSingleBettingNum !=='' && parseInt(this.state.smallSingleBettingNum, 10)>0 ){
                                console.log("小单");
                                console.log(this.state.smallSingleBettingNum);
                                bettingContents.push({
                                                        bettingName: "smallSingle",
                                                        bettingNum: parseInt(this.state.smallSingleBettingNum, 10)
                                                        });
                            }
                            if(this.state.bigDoubleSwitchStatus && this.state.bigDoubleBettingNum !=='' && parseInt(this.state.bigDoubleBettingNum, 10)>0 ){
                                console.log("大双");
                                console.log(this.state.bigDoubleBettingNum);
                                bettingContents.push({
                                                        bettingName: "bigDouble",
                                                        bettingNum: parseInt(this.state.bigDoubleBettingNum, 10)
                                                        });
                            }
                            if(this.state.smallDoubleSwitchStatus && this.state.smallDoubleBettingNum !=='' && parseInt(this.state.smallDoubleBettingNum, 10)>0 ){
                                console.log("小双");
                                console.log(this.state.smallDoubleBettingNum);
                                bettingContents.push({
                                                        bettingName: "smallDouble",
                                                        bettingNum: parseInt(this.state.smallDoubleBettingNum, 10)
                                                        });
                            }

                            //极值
                            if(this.state.maximumSwitchStatus && this.state.maximumBettingNum !=='' && parseInt(this.state.maximumBettingNum, 10)>0 ){
                                console.log("极大");
                                console.log(this.state.maximumBettingNum);
                                bettingContents.push({
                                                        bettingName: "maximum",
                                                        bettingNum: parseInt(this.state.maximumBettingNum, 10)
                                                        });
                            }
                            if(this.state.minimalSwitchStatus && this.state.minimalBettingNum !=='' && parseInt(this.state.minimalBettingNum, 10)>0 ){
                                console.log("极小");
                                console.log(this.state.minimalBettingNum);
                                bettingContents.push({
                                                        bettingName: "minimal",
                                                        bettingNum: parseInt(this.state.minimalBettingNum, 10)
                                                        });
                            }

                            //点数字
                            if(this.state.firstPointSwitchStatus && this.state.firstPointBettingNum !=='' && this.state.firstPoint !=='' && parseInt(this.state.firstPointBettingNum, 10)>0 ){
                                console.log("点数字1");
                                console.log(this.state.firstPoint);
                                console.log(this.state.firstPointBettingNum);
                                bettingContents.push({
                                                        bettingName: "point",
                                                        pointNum:this.state.firstPoint,
                                                        bettingNum: parseInt(this.state.firstPointBettingNum, 10)
                                                        });
                            }
                            if(this.state.secondPointSwitchStatus && this.state.secondPointBettingNum !=='' && this.state.secondPoint !=='' && parseInt(this.state.secondPointBettingNum, 10)>0 ){
                                console.log("点数字2");
                                console.log(this.state.secondPoint);
                                console.log(this.state.secondPointBettingNum);
                                bettingContents.push({
                                                        bettingName: "point",
                                                        pointNum:this.state.secondPoint,
                                                        bettingNum: parseInt(this.state.secondPointBettingNum, 10)
                                                        });
                            }
                            if(this.state.thirdPointSwitchStatus && this.state.thirdPointBettingNum !=='' && this.state.thirdPoint !=='' && parseInt(this.state.thirdPointBettingNum, 10)>0 ){
                                console.log("点数字3");
                                console.log(this.state.thirdPoint);
                                console.log(this.state.thirdPointBettingNum);
                                bettingContents.push({
                                                        bettingName: "point",
                                                        pointNum:this.state.thirdPoint,
                                                        bettingNum: parseInt(this.state.thirdPointBettingNum, 10)
                                                        });
                            }
                            if(this.state.fourthPointSwitchStatus && this.state.fourthPointBettingNum !=='' && this.state.fourthPoint !=='' && parseInt(this.state.fourthPointBettingNum, 10)>0 ){
                                console.log("点数字4");
                                console.log(this.state.fourthPoint);
                                console.log(this.state.fourthPointBettingNum);
                                bettingContents.push({
                                                        bettingName: "point",
                                                        pointNum:this.state.fourthPoint,
                                                        bettingNum: parseInt(this.state.fourthPointBettingNum, 10)
                                                        });
                            }

                            //豹顺对
                            if(this.state.leopardSwitchStatus && this.state.leopardBettingNum !=='' && parseInt(this.state.leopardBettingNum, 10)>0 ){
                                console.log("豹子");
                                console.log(this.state.leopardBettingNum);
                                bettingContents.push({
                                                        bettingName: "leopard",
                                                        bettingNum: parseInt(this.state.leopardBettingNum, 10)
                                                        });
                            }
                            if(this.state.sequenceSwitchStatus && this.state.sequenceBettingNum !=='' && parseInt(this.state.sequenceBettingNum, 10)>0 ){
                                console.log("顺子");
                                console.log(this.state.sequenceBettingNum);
                                bettingContents.push({
                                                        bettingName: "sequence",
                                                        bettingNum: parseInt(this.state.sequenceBettingNum, 10)
                                                        });
                            }
                            if(this.state.pairSwitchStatus && this.state.pairBettingNum !=='' && parseInt(this.state.pairBettingNum, 10)>0 ){
                                console.log("对子");
                                console.log(this.state.pairBettingNum);
                                bettingContents.push({
                                                        bettingName: "pair",
                                                        bettingNum: parseInt(this.state.pairBettingNum, 10)
                                                        });
                            }
                            
                            if(bettingContents.length>0){
                                console.log(bettingContents);
                                this.setState({
                                        bettingBtnDisabled:true
                                    });
                                let Test_Query = `mutation submitBetting($accountName: String!, $token: String!, $bettingContents: [BettingContent]) {
                                                        submitBettingRecord(accountName: $accountName,token: $token,bettingContents: $bettingContents) {
                                                            message
                                                        }
                                                    }`;
                                fetch(globalServerIP, {
                                    method: 'POST',
                                    body: JSON.stringify({
                                        "query": Test_Query,
                                        "variables":{
                                            "accountName":globalUser.accountName,
                                            "token":globalUser.token,
                                            "bettingContents":bettingContents
                                        }
                                    }),
                                    headers: {'Content-Type': 'application/json'}
                                })
                                .then(function (res) {
                                    return res.json();
                                }).then(function (json) {
                                    console.log(json);
                                    if(json.data.submitBettingRecord.message==="下注成功"){
                                        Toast.success("下注成功",0.5);
                                    }else {
                                        Toast.fail(json.data.submitBettingRecord.message,0.5);
                                    }
                                }.bind(this)).catch((err)=> {
                                    console.log(err);
                                    // this.setState({
                                    //     bettingBtnDisabled:false
                                    // });
                                    Toast.fail("网络错误",0.5);
                                });
                            }else {
                                this.props.onClose();
                            }
                            }}
                    ><Text style={{fontSize:12}}>{this.state.bettingBtnDisabled ? "loading" : "投注"}</Text></Button>

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
