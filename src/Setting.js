import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

class Setting extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '세팅',
  };

  static navigationOptions = {
    tabBarLabel: 'MY'
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          계좌, 주문완료 인삿말 등을 입력함
        </Text>
      </View>
    );
  }

}


export default Setting;
