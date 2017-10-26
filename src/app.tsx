import React from 'react'
import { AppRegistry, StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native'

let { width, height } = require('Dimensions').get('window')
export default class App extends React.Component<any, any> {
  public render() {
    return (
      <View style={styles.container}>
        <View style={styles.topbar}>
          <Text style={styles.topTitle}>阅片平台</Text>
        </View>
        <View style={styles.middlebox}>
          <Image style={styles.topimage} source={require('../imgs/qq.jpg')} />
          <View style={styles.inputview}>
            <TextInput style={styles.inputstyle} placeholder={'QQ号/手机号/邮箱'}/>
            <TextInput style={styles.inputstyle} secureTextEntry={true} placeholder={'密码'}/>
          </View>
          <TouchableOpacity activeOpacity={0.7}>
            <View style={styles.loginview}>
              <Text style={{color: '#fff',fontSize:18}}>登&nbsp;录</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.bottomTip}>
            <Text style={{color: '#1FBAF3',fontSize:16}}>无法登陆？</Text>
            <Text style={{color: '#1FBAF3',fontSize:16}}>立即注册</Text>
          </View>
        </View>
      </View>
    )
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
})