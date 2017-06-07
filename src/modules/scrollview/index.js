import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet } from 'react-native'

const items = Array.from(new Array(50)).map((item, index) => ({id: index, text: 'aaa'}))

export default class MyScrollView extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>垂直：</Text>
        <View style={styles.vScroll}> 
          <ScrollView
            ref={(ref) => {this._vScrollView = ref}}
            onScroll={() => {console.log('--->>vScroll onScroll')}}
            scrollEventThrottle={200}
            style={styles.scrollView}>
            {
              items.map((item) => {
                return (
                  <View style={styles.item} key={item.id}>
                    <Text>{item.text}</Text>
                  </View>
                )
              }) 
            }
          </ScrollView>
        </View>
        <Text>水平：</Text>
        <View style={styles.hScroll}>
          <ScrollView
            ref={(ref) => {this._hScrollView = ref}}
            onScroll={() => {console.log('--->>>>hScroll onScroll')}}
            scrollEventThrottle={200}
            horizontal={true}
            style={styles.scrollView}>
            {
              items.map((item) => {
                return (
                  <View style={styles.item} key={item.id}>
                    <Text>{item.text}</Text>
                  </View>
                )
              })
            }
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  vScroll: {
    height: 300
  },
  hScroll: {
    height: 30,
    marginTop: 10,
  },
  scrollView: {
    backgroundColor: '#eeeeee',
  },
  item: {
    width: 100,
    height: 100,
    alignItems: 'center',
  }
})
