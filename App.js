import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={styles.red}>Open up App.js to start working on your app!</Text>
        <Text style={styles.bigblue}>Changes you make will automatically reload.</Text>
        <Text style={[styles.bigblue, styles.red]}>Shake your phone to open the developer menu.</Text>
        <Text style={[styles.red, styles.bigblue]}>I'm Deaf Web Developer.</Text>
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
  },
  bigblue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red'
  }
})
