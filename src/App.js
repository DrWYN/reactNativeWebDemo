import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Navigator} from 'react-native';

import HomePage from './modules/home';

export default class App extends Component{

	constructor(props){
		super(props);
		this.configureScene = this.configureScene.bind(this);
	}

	/**
	 * 配置场景动画
	 * @param route 路由
	 * @param routeStack 路由栈
	 * @returns {*} 动画
	 */
	configureScene(route, routeStack) {
	  if (route.type == 'Bottom') {
	    return Navigator.SceneConfigs.FloatFromBottom; // 底部弹出
	  }
	  return Navigator.SceneConfigs.PushFromRight; // 右侧弹出
	}

	render() {
		let defaultName = 'home';
		let defaultComponent = HomePage;

		return (
			<Navigator
				initialRoute={{name: defaultName, component: defaultComponent}}
				configureScene={(route, routeStack) => this.configureScene(route, routeStack)}
				renderScene={(route, navigator) => {
					let Component = route.component;
					// console.log(Component.name);
					return (<Component {...route.params} navigator={navigator}/>);
				}}/>
		);
	}
}
