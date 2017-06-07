import React, { Component } from 'react'
import { Animated, PanResponder, Text } from 'react-native'

//animate
export default class MyAnimate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fadeAnim: new Animated.Value(0)
    }
  }
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {toValue: 1},
    ).start();
  }
  render() {
    return (
      <Animated.View
        style={{opacity: this.state.fadeAnim}}>
        <Text>testaaaaaaa</Text>
      </Animated.View>
    )
  }
}

//DraggableView
//export default class MyDraggableView extends Component {
  //constructor(props) {
    //super(props);
    //this.state = {
      //pan: new Animated.ValueXY(),
    //}
    //this.state.panResponder = PanResponder.create({
          //onStartShouldSetPanResponder: () => true,
          //onPanResponderMove: Animated.event([null, {
              //dx: this.state.pan.x, // x,y are Animated.Value
              //dy: this.state.pan.y,
            //}]),
          //onPanResponderRelease: () => {
              //Animated.spring(
                //this.state.pan,         // Auto-multiplexed
                //{toValue: {x: 0, y: 0}} // Back to zero
              //).start();
          //},
      //})
  //}
  //render() {
    //return (
      //<Animated.View
        //{...this.state.panResponder.panHandlers}
        //style={this.state.pan.getLayout()}>
        //<Text>testaaaaaaa</Text>
      //</Animated.View>
    //)
  //}
//}
