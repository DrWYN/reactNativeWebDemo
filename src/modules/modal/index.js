import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'

import Modal from '../../modules';

class MyModal extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View styles={styles.container}>
        <Modal>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

})
