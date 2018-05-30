import React from 'react';
import { View, Text, Button, WebView, StyleSheet} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

class Profit extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '매출'
  };

  static navigationOptions = {
    tabBarLabel: '성과'
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome, {backgroundColor:'#ff0000'}}>
          Welcome to the React Native Playground!
        </Text>
        <View style={[styles.overlay, { height: 360}]} />
      </View>
    );
  }

}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    margin: 10,
  },
  // Flex to fill, position absolute,
  // Fixed left/top, and the width set to the window width
  overlay: {
    flex: 1,
    position: 'absolute',
    right: 0,
    bottom: 0,
    opacity: 0.5,
    backgroundColor: 'black',
    width: 300
  }
});


export default Profit;
