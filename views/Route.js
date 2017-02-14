/**
 * Created by zhubg on 2016/12/15.
 */

// import { setGlobalHandler } from 'ErrorUtils'; /* eslint import/no-extraneous-dependencies: 0, import/extensions: 0 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

import {Match, MemoryRouter as Router, Miss} from 'react-router';

//apollo
import {ApolloProvider} from 'react-apollo';
import {client} from '../data/apolloClient';

//redux

// const SET_TOKEN = 'SET_TOKEN';

//action
// function setToken(token) {
//     return {type: SET_TOKEN, token}
// }

//reducer
// function userReducer(state = {}, action) {
//
//     switch (action.type) {
//         case SET_TOKEN:
//             // store.save('TOKEN', action.payload); // 先更新本地存储
//             return action.token; // 然后更新 Redux
//
//         default:
//             return state;
//     }
// }

// import {createStore, combineReducers, applyMiddleware, compose} from 'redux';

// import { todoReducer, userReducer } from './reducers';

// const store = createStore(
//     combineReducers({
//         users: userReducer,
//         apollo: client.reducer()
//     }),
//     {}, // initial state
//     compose(
//         applyMiddleware(client.middleware()),
//         // If you are using the devToolsExtension, you can add it here also
//         window.devToolsExtension ? window.devToolsExtension() : f => f,
//     )
// );

// import { connect } from 'react-redux';
// import reduxStore from '../data/reduxStore';

import Index from './components/Index';
import BjrankNav from './components/home/tegame/BjrankNav';
import RoomNav from './components/home/tegame/RoomNav';
import BettingNav from './components/home/tegame/BettingNav';

// 防止闪退
// setGlobalHandler((err) => console.warn(err)); // eslint-disable-line

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height:600,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: 'silver',
    },
    route: {
        color: '#701010',
        fontSize: 40
    },
    routeLink: {
        color: '#0000FF'
    },
    routeContainer: {
        // flex: 1,
        justifyContent: 'center'
    }
});


const componentFactory = routeName => () => (
    <View>
        <Text style={styles.route}>{routeName}</Text>
        <Button
            onPress={e=>{alert('1234')}}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
        />
    </View>
);

export default class Route extends Component {
    render() {
        return (
            // <ApolloProvider client={client} store={store}>
            <ApolloProvider client={client}>
                <Router>
                    <View style={styles.container}>
                        <Match exactly pattern="/" component={Index}/>
                        <Match pattern="/bj28" component={BjrankNav}/>
                        <Match pattern="/room" component={RoomNav}/>
                        <Match pattern="/betting" component={BettingNav}/>
                        <Miss component={componentFactory('Nope, nothing here')}/>
                    </View>
                </Router>
            </ApolloProvider>
        );
    }
}
