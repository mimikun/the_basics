import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.align_items}>
        <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
      </View>
    )
  }
}

// Try setting `alignItems` to 'flex-start'
// Try setting `justifyContent` to `flex-end`.
// Try setting `flexDirection` to `row`.


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  align_items: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
