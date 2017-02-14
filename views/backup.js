/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


import {Button, Toast, TabBar,Icon} from 'antd-mobile';
// import {Test} from './views/Test';
//apollo
import ApolloClient, {createNetworkInterface} from 'apollo-client';
import {ApolloProvider, graphql} from 'react-apollo';
import gql from 'graphql-tag';

const MyQuery = gql`query {
                        getToken (id:"1234"){ 
                            token
                        } 
                    }`;

const client = new ApolloClient({
    networkInterface: createNetworkInterface({uri: 'http://192.168.0.101:3000/graphql'})
});

let PhoneGame = React.createClass({
    test(){
        console.log(this.props.data.getToken);
        Toast.info('token: ' + this.props.data.getToken.token);
        // Toast.info('token: ');
    },
    getInitialState() {
        return {
            selectedTab: 'redTab',
            notifCount: 0,
            presses: 0,
        };
    },
    renderContent(pageText, num) {
        return (
            <View style={{ flex: 1, alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ margin: 50 }}>{pageText}</Text>
                <Text style={{ margin: 50 }}>{num} re-renders of the {pageText}</Text>
                <Icon type="down" />
            </View>
        );
    },
    render() {
        var base64Icon = 'data:image/png;base64,data:image/png;base64,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';
        var base64Icon1 = 'data:image/png;base64,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';

        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
            >
                <TabBar.Item
                    title="首页"
                    icon={{uri: base64Icon1, scale: 5}}
                    selectedIcon={{uri: base64Icon, scale: 5}}
                    selected={this.state.selectedTab === 'blueTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
            });
          }}>
                    {this.renderContent('生活 Tab')}
                </TabBar.Item>
                <TabBar.Item
                    icon={require('./TabBar_HomeBar_web.png')}
                    selectedIcon={require('./TabBar_HomeBar_Sel_web.png')}
                    title="口碑"
                    badge={this.state.notifCount > 0 ? this.state.notifCount : undefined}
                    selected={this.state.selectedTab === 'redTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'redTab',
              notifCount: this.state.notifCount + 1,
            });
          }}>
                    {this.renderContent('口碑 Tab', this.state.notifCount)}
                </TabBar.Item>
                <TabBar.Item
                    icon={require('./TabBar_HomeBar_web.png')}
                    selectedIcon={require('./TabBar_HomeBar_Sel_web.png')}
                    title="朋友"
                    selected={this.state.selectedTab === 'greenTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'greenTab',
              presses: this.state.presses + 1,
            });
          }}>
                    {this.renderContent('朋友 Tab', this.state.presses)}
                </TabBar.Item>
                <TabBar.Item
                    icon={require('./TabBar_HomeBar_web.png')}
                    selectedIcon={require('./TabBar_HomeBar_Sel_web.png')}
                    title="我的"
                    selected={this.state.selectedTab === 'yellowTab'}
                    onPress={() => {
            this.setState({
              selectedTab: 'yellowTab',
              presses: this.state.presses + 1,
            });
          }}>
                    {this.renderContent('我的 Tab', this.state.presses)}
                </TabBar.Item>
            </TabBar>
        );
    }
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5
    }
});

PhoneGame = graphql(MyQuery)(PhoneGame);

export default class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <PhoneGame />
            </ApolloProvider>
        )
    }
}

AppRegistry.registerComponent('PhoneGame', () => App);

