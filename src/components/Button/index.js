import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Text, 
  TouchableOpacity
} from 'react-native';

//import StyleSheetPropType from 'StyleSheetPropType';
//import ViewStylePropTypes from 'ViewStylePropTypes';
//import TextStylePropTypes from 'TextStylePropTypes';

//let ViewStylePropType = StyleSheetPropType(ViewStylePropTypes);
//let TextStylePropType = StyleSheetPropType(TextStylePropTypes);


class Button extends Component{
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress() {
    const {disabled, onPress} = this.props;
    if (disabled) return null;
    onPress && onPress();
  }

  render() {
    const {style, textStyle, text} = this.props;
    return (
      <TouchableOpacity
        style={style}
        onPress={this.onPress}>
        <Text numberOfLines={1} style={textStyle}>
          {text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const propTypes = {
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  style: PropTypes.any,
  textStyle: PropTypes.any,
  text: PropTypes.string,
  testID: PropTypes.string,
  accessibilityLabel: PropTypes.string
}

Button.propTypes = propTypes;

Button.defaultProps = {
  onPress: function() {},
  disabled: false
}

export default Button;
