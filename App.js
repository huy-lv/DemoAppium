/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      
    }
  }
  login(){
    if(this.state.username === 'admin' && this.state.password === 'admin'){
      Alert.alert('Info', 'Login success')
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <Text style={{fontSize: 20, margin: 10}}>Username</Text>
        <TextInput 
          value={this.state.username}
          onChangeText={(text)=>this.setState({username: text})}
          placeholder='enter username'/>
        <Text style={{fontSize: 20, margin: 10}}>Password</Text>
        <TextInput 
          value={this.state.password}
          onChangeText={(text)=>this.setState({password: text})}
          placeholder='enter password' 
          secureTextEntry={true}
          />

        <TouchableOpacity onPress={()=> this.login()}>
          <Text style={{margin: 10, fontSize: 20, backgroundColor: 'blue', width: 100, textAlign: 'center', color: 'white'}}>Login</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
