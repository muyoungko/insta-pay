import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

class MessageList extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '메세지 리스트',
  };

  static navigationOptions = {
    tabBarLabel: 'Shop'
  };

  render() {

    return (
      <Text>
        고객이 문의한 내용들
      </Text>
    );
  }

}


export default MessageList;
