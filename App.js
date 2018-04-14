import React, { Component } from 'react'
import { SectionList, StyleSheet, Text, View } from 'react-native'

export default class App extends Component {
  render () {
    return (
      <View style={styles.container}>
        <SectionList
          sections={[
            {title: '嫁艦', data: ['雪風']},
            {title: '陽炎型駆逐艦',
              data: [
                '陽炎',
                '不知火',
                '黒潮',
                '親潮',
                '早潮',
                '夏潮',
                '初風',
                '雪風',
                '天津風',
                '時津風',
                '浦風',
                '磯風',
                '浜風',
                '谷風',
                '野分',
                '嵐',
                '萩風',
                '舞風',
                '秋雲',
              ]
            },
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
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
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247, 247, 247, 1.0)',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
})
