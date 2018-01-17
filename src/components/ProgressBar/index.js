import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform} from 'react-native';

import Progress from './progress';

class ProgressBar extends Component {

  render() {
    const {style, color, progress, trackColor} = this.props;
    if(Platform.OS === 'ios') { //ios
      return (
        <Progress
          progressTintColor={color}
          trackTintColor={trackColor}
          progress={progress}
          />
      ); 
    } else if(Platform.OS === 'android') {  //android
      return(<Progress
        color={color}
        size="large"
        style={style}/>);
    } else {
      return (
        <Progress
          color={color}
          style={style}
          progress={progress}
          trackColor={trackColor}/>
      );  
    }
  }
}

const propTypes = {
  color: PropTypes.string,
  progress: PropTypes.number,
  trackColor: PropTypes.string,
  style: PropTypes.any,
  testID: PropTypes.string,
}

ProgressBar.propTypes = propTypes;

ProgressBar.defaultProps = {
  progress: 0,
  color: '#1976D2',
  trackColor: 'transparent'
}

export default ProgressBar;
