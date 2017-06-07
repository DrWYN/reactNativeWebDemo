import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';

//if(Platform.OS !== 'web') {
 //import {
   //home, 
   //homePage,
   //activityIndicator, 
   //button, 
   //image, 
   //progressbar,
   //scrollview,
   //mySwitch,
   //textinput,
   //animated
 //} from '../../webrouter/router.js' 
//}

//const pageList = [
  //{name: 'home', path: '/home', component: home},
  //{name: 'activityIndicator', path: '/activity-indicator', component: activityIndicator},
  //{name: 'button', path: '/button', component: button},
  //{name: 'image', path: '/image', component: image},
  //{name: 'progress', path: '/progress', component: progressbar},
  //{name: 'scrollview', path: '/scrollview', component: scrollview},
  //{name: 'switch', path: '/switch', component: mySwitch},
  //{name: 'textInput', path: '/text-input', component: textinput},
  //{name: 'animated', path: '/animated', component: animated},
//];

import {pageList, pressPage} from './pageList';

const phone_width = Dimensions.get('window').width;
console.log('--->>>>>>phone_width = ', phone_width);
//const phone_height = Dimensions.get('window').height;

class Home extends Component{
  constructor(props) {
    super(props);
    this.renderChild = this.renderChild.bind(this);
  }

  pressPageItem(item) {
    const {navigator={}} = this.props;
    pressPage(item, navigator);
    //const {name, path, component} = item;
    //if(Platform.OS === 'web') {
      //Util.openNewPage(path);
    //} else {
      //Util.openNewPage(this.props.navigator, name, component) 
    //}
  }

  renderChild() {
    let itemList = pageList.map((item, index) => {
      return (
        <TouchableOpacity key={index} style={styles.item} onPress={() => {this.pressPageItem(item)}}>
          <Text>{item.name}</Text>
        </TouchableOpacity>
      )
    })
    return itemList;
  }

  render() {
    return(
      <ScrollView
        children={this.renderChild()}
        contentContainerStyle={styles.container}
        style={styles.root}/>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    width: phone_width,
    backgroundColor: '#fff'
  },
  container: {
    padding: 10,
  },
  item: {
    height: 30,
    borderColor: 'red',
    borderWidth: 1,
    margin: 5,
  }
}) 

export default Home;
