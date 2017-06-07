import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Switch from '../../components/Switch';

export default class MySwitch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorTrueIsOn: true,
      colorFalseIsOn: false
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <Switch
          activeThumbColor='#428BCA'
          activeTrackColor='#A0C4E3'
          onValueChange={(value) => this.setState({ colorFalseIsOn: value })}
          value={this.state.colorFalseIsOn}/>
        <Switch
          activeThumbColor='#5CB85C'
          activeTrackColor='#ADDAAD'
          onValueChange={(value) => this.setState({ colorTrueIsOn: value })}
          thumbColor='#EBA9A7'
          trackColor='#D9534F'
          value={this.state.colorTrueIsOn}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
