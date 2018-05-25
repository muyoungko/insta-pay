import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';

class Order extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {

  }

  static navigationOptions = {
    title: '주문 목록',
  };

  static navigationOptions = {
    tabBarLabel: '주문'
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          처리해야할 주문 목록
        </Text>
      </View>
    );
  }

}


export default Order;
