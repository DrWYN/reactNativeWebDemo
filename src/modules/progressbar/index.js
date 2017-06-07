
import React, {Component} from 'react';
import {/*ProgressBar, */Text, View, StyleSheet} from 'react-native';

import ProgressBar from '../../components/ProgressBar';

export default class MyProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0.0
    }
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      if(this.state.progress < 1.0) {
        this.setState({progress: this.state.progress + 0.01})
      } else {
        clearInterval(this.timer);
      }
    }, 100)
  }
  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }
  render() {
    return(
      <View style={styles.container}>
        <ProgressBar
          color="green"
          style={styles.progress}
          progress={this.state.progress}
          trackColor="red"/>
        <Text>{this.state.progress}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  progress: {
    marginTop: 20,
    height: 30,
  }
})
