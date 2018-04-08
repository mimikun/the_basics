import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

class Blink extends Component {
  constructor (props) {
    super(props)
    this.state = {isShowingText: true}

    // 毎秒stateを切り替える
    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText }
      })
    }, 1000)
  }

  render () {
    let display = this.state.isShowingText ? this.props.text : ' '
    return (
      <Text>{display}</Text>
    )
  }
}

export default class App extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Blink text='Open up App.js to start working on your app!' />
        <Blink text='Changes you make will automatically reload.' />
        <Blink text='Shake your phone to open the developer menu.' />
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
