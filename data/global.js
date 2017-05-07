/**
 * Created by zhubg on 2017/2/18.
 */
//storages
import { AsyncStorage } from 'react-native';
import Storage from 'react-native-storage';
import {Toast} from 'antd-mobile';

// SocketIO初始化
global.globalSocket = {};

var storages = new Storage({
    size: 1000,
    storageBackend: AsyncStorage,
    defaultExpires: 1000 * 3600 * 24 * 7,
    enableCache: true
});
global.globalStorage = storages;

//serverIP
const serverIP = "http://192.168.1.103:3000/graphql";
// const serverIP = "http://120.27.124.108:3000/graphql";
// const serverIP = "http://www.elfdragontechnology.cn:3000/graphql";
global.globalServerIP = serverIP;

//WsServerIP
const wsServerIP = "http://192.168.1.103:3001";
// const wsServerIP = "http://120.27.124.108:3001";
// const wsServerIP = "http://www.elfdragontechnology.cn:3001";
global.globalWsServerIP = wsServerIP;

//user
globalStorage.load({
    key: 'loginState',
    autoSync: true,
    syncInBackground: true,
    syncParams: {}
}).then(ret => {
    //global.globalUser {accountName,,token}
    console.log("globalUser");
    global.globalUser = ret;
    console.log(globalUser);
    Toast.loading("连接中", 0);
    // SocketIO数据填充
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
            accountName:globalUser.accountName,
            token: globalUser.token
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
            Toast.loading("聊天服务器断开",0);
        });
    });
    socket.on('connect_error', function (err) {
        console.log(err);
        // AlertIOS.alert(
        //     "错误",
        //     "聊天服务器初始化失败",
        //     [
        //         {
        //             text: '退出', onPress: () => {
        //             globalRouter.transitionTo('/room');
        //         }, style: 'cancel'
        //         }
        //     ],
        // );
        Toast.loading("聊天服务器已经断开连接", 0);
        socket.removeListener('connect_error');
    });
    global.globalSocket = socket;

    // console.log(globalUser.token===undefined);
}).catch(err => {
    switch (err.name) {
        case 'NotFoundError':
            // TODO;
            console.log("没有数据");
            global.globalUser={};
            break;
        case 'ExpiredError':
            // TODO
            console.log("数据过期");
            global.globalUser={};
            break;
    }
});


export {serverIP};

// globalStorage.remove({
//     key: 'loginState'
// });