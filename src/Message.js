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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          고객과의 메세지 창
        </Text>
      </View>
    );
  }

}


export default Message;
