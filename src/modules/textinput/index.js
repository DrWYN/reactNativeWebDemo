import React, { Component } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'

export default class MyTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
    this._onBlur = this._onBlur.bind(this);
    this._onFocus = this._onFocus.bind(this);
  }

  _onBlur(e) {
    this.setState({isFocused: false});
  }

  _onFocus(e) {
    this.setState({isFocused: true});
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput
          accessibilityLabel='Write a status update'
          multiline
          numberOfLines={1}
          onBlur={this._onBlur}
          onFocus={this._onFocus}
          placeholder="place input"
          keyboardType="numeric"
          style={[styles.default, this.state.isFocused && styles.focused]}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  default: {
    flex: 1,
    borderColor: 'gray',
    borderBottomWidth: 2
  },
  focused: {
    borderColor: 'red'
  }
})
