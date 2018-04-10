import React, { Component } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {text: ''}
  }

  render () {
    return (
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder='翻訳するにはここに入力してください'
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
