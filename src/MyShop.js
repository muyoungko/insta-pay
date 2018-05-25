import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

class MyShop extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '인스타 연동을 해주세요~',
  };

  static navigationOptions = {
    tabBarLabel: 'Shop'
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          내 쇼핑몰 미리보기
        </Text>
      </View>
    );
  }

}


export default MyShop;
