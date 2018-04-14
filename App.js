import React, { Component } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <FlatList
          data={[
            {key: '陽炎'},
            {key: '不知火'},
            {key: '黒潮'},
            {key: '親潮'},
            {key: '早潮'},
            {key: '夏潮'},
            {key: '初風'},
            {key: '雪風'},
            {key: '天津風'},
            {key: '時津風'},
            {key: '浦風'},
            {key: '磯風'},
            {key: '浜風'},
            {key: '谷風'},
            {key: '野分'},
            {key: '嵐'},
            {key: '萩風'},
            {key: '舞風'},
            {key: '秋雲'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
