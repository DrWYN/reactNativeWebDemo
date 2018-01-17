//Modal
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';

import MyModal from './modal';

class Modal extends Component {
  render() {
    const {children, animated, onShow, visible} = this.props;
    if(Platform.OS === 'web') {
      return (
        <MyModal
          visible={visible}>
          {children}
        </MyModal>
      );
    } else {
      return (
        <MyModal
          visible={visible}
          animated={animated}>
          {children}
        </MyModal>
      );
    }
  }
}

const propTypes = {
  children: PropTypes.node,
  animated: PropTypes.oneOf(['none', 'slide', 'fade']),
  onShow: PropTypes.func,
  visible: PropTypes.bool,
}

Modal.propTypes = propTypes;

Modal.defaultProps = {
  visible: false,
  animated: 'none',
}

export default Modal;
