import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
let { width, height } = require('Dimensions').get('window');
export default class App extends React.Component {
    render() {
        return (React.createElement(View, { style: styles.container },
            React.createElement(View, { style: styles.topbar },
                React.createElement(Text, { style: styles.topTitle }, "\u9605\u7247\u5E73\u53F0")),
            React.createElement(View, { style: styles.middlebox },
                React.createElement(Image, { style: styles.topimage, source: require('../imgs/qq.jpg') }),
                React.createElement(View, { style: styles.inputview },
                    React.createElement(TextInput, { style: styles.inputstyle, placeholder: 'QQ号/手机号/邮箱' }),
                    React.createElement(TextInput, { style: styles.inputstyle, secureTextEntry: true, placeholder: '密码' })),
                React.createElement(TouchableOpacity, { activeOpacity: 0.7 },
                    React.createElement(View, { style: styles.loginview },
                        React.createElement(Text, { style: { color: '#fff', fontSize: 18 } }, "\u767B\u00A0\u5F55"))),
                React.createElement(View, { style: styles.bottomTip },
                    React.createElement(Text, { style: { color: '#1FBAF3', fontSize: 16 } }, "\u65E0\u6CD5\u767B\u9646\uFF1F"),
                    React.createElement(Text, { style: { color: '#1FBAF3', fontSize: 16 } }, "\u7ACB\u5373\u6CE8\u518C")))));
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#AFE6ED'
    },
    topbar: {
        height: 44,
        backgroundColor: '#18B4ED',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topTitle: {
        color: '#fff',
        fontSize: 18
    },
    middlebox: {
        flex: 1,
        alignItems: 'center'
    },
    topimage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginTop: 30
    },
    inputview: {
        width: width,
        marginTop: 20
    },
    inputstyle: {
        paddingLeft: 20,
        paddingRight: 20,
        height: 50,
        fontSize: 16,
        backgroundColor: '#fff'
    },
    loginview: {
        marginTop: 20,
        width: width * 0.9,
        backgroundColor: '#1FBAF3',
        borderRadius: 5,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bottomTip: {
        marginTop: 20,
        width: width * 0.9,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
});
