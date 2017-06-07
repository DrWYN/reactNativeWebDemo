import React, { Component } from 'react'
import { View, Button, ActivityIndicator, StyleSheet } from 'react-native'

class MyActivityIndicator extends Component {
    constructor(props) {
      super(props)
      this.state = { animating: true };
      this.changeAnimat = this.changeAnimat.bind(this);
    }

  changeAnimat() {
    this.setState({animating: !this.state.animating});
  }

    render() {
      return (
        <View style={styles.container}>
          <Button 
            title="change state"
            onPress={this.changeAnimat}/>
          <ActivityIndicator
            animating={this.state.animating}
            size="large"
            color="red"
            style={[styles.centering, { height: 80 }]} />
        </View>
      );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    centering: {
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default MyActivityIndicator;
