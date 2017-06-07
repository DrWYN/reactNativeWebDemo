import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../components/Button';

class MyButton extends Component {
  constructor(props) {
    super(props);
    this.pressButton = this.pressButton.bind(this);
  }

  pressButton() {
    console.log('---->>>>>pressButton');
  }

  render() {
    return (
      <View style={styles.container}>
        <Button
          accessibilityLabel="accessibilityLabel"
          style={styles.button}
          textStyle={styles.buttonText}
          text="Learn More"
          onPress={this.pressButton}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  buttonText: {
    color: '#f0f0f0'
  }
})

export default MyButton;
