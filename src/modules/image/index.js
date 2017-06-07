import placeholder from './placeholder.png';
import React, {Component} from 'react';
import {Image, View, StyleSheet} from 'react-native';

const url = 'https://static.jk.cn/image/T1xMWQBjCT1RCvBVdK';

export default class MyImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    }
    this._onLoad = this._onLoad.bind(this);
  }
  _onLoad() {
    this.setState({loading: false})
  }
  render() {
    return(
      <View style={styles.container}>
        <Image
          accessibilityLabel="image"
          defaultSource={{uri: placeholder}}
          onLoad={this._onLoad}
          resizeMode="cover"
          source={{uri: url}}
          style={styles.image}/>
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
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#000'
  },
  loading: {
    opacity: .5,
  }
})
