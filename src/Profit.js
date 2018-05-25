import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          완료된 주문 매출건 수 월별 매출 등이 나옴.
        </Text>
      </View>
    );
  }

}


export default Profit;
