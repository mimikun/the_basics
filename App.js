import React, { Component } from 'react'
import {
  Alert,
  Button,
  StyleSheet,
  Text,
  View
} from 'react-native'

export default class App extends Component {
  _onPressButton () {
    Alert.alert('あなたはボタンをタップしました！')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Press Me'
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title='Press Me'
            color='#841584'
          />
        </View>
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title='This lools great!'
          />
          <Button
            onPress={this._onPressButton}
            title='OK!'
            color='#841584'
          />
        </View>
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
