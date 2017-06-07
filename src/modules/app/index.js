import React, {Component} from 'react';
import {AppState, NetInfo} from 'react-native';

class AppChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentAppState: AppState.currentState
    }
    this._handleAppStateChange = this._handleAppStateChange.bind(this);
  } 
  componentDidMount() {
    AppState.addEventListener('change', this._handleAppStateChange);
    NetInfo.fetch().then((connectionType) => {
        console.log('Connection type:', connectionType);
    });
  }
  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }
  _handleAppStateChange = (currentAppState) => {
    console.log('------>>>>>>currentAppState = ', currentAppState);
    this.setState({ currentAppState });
  }
  render() {
    const {children} = this.props;
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default AppChild;
