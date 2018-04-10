import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.justify_content}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  justify_content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  }
})
