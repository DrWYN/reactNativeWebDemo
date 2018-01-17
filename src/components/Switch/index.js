import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { Switch, Platform } from 'react-native'

class MySwitch extends Component {
  render() {
    let {disabled, value, thumbColor, trackColor, activeThumbColor, activeTrackColor, onValueChange} = this.props;
    if(!activeThumbColor || !activeThumbColor.length) activeThumbColor = thumbColor;
    if(!activeTrackColor || !activeTrackColor.length) activeTrackColor = trackColor;
    if(Platform.OS ===  'web') {  //web
      return (
        <Switch
          disabled={disabled}
          value = {value}
          thumbColor={thumbColor}
          trackColor={trackColor}
          activeThumbColor={activeThumbColor}
          activeTrackColor={activeTrackColor}
          onValueChange={(v)=>{onValueChange && onValueChange(v)}}/>
      );
    } else {
      return (
        <Switch
          disabled={disabled}
          value={value}
          tintColor={trackColor}
          onTintColor={activeTrackColor}
          thumbTintColor={activeThumbColor}
          onValueChange={(v)=>{onValueChange && onValueChange(v)}}/>
      );
    }
  }
}

const propTypes = {
  thumbColor: PropTypes.string,
  trackColor: PropTypes.string,
  activeThumbColor: PropTypes.string,
  activeTrackColor: PropTypes.string,
  onValueChange: PropTypes.func,
  value: PropTypes.bool,
  disabled: PropTypes.bool,
}

MySwitch.propTypes = propTypes;

MySwitch.defaultProps = {
  thumbColor: '#EBA9A7',
  trackColor: '#D9534F',
  value: false,
  disabled: false
}

export default MySwitch;
