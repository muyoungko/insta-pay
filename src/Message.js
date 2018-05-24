import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

class Message extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: 'XX고객님과의 메세지',
  };

  render() {

    return (
      <Text>
        고객과의 메세지 창
      </Text>
    );
  }

}


export default Message;
