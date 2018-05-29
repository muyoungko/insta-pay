import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
import InstaApi from './instaapi/InstaApi.js';
const GLOBAL = require('./Global.js');

class OrderDetail extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {
      InstaApi.say();
  }

  static navigationOptions = {
    title: '주문상세',
  };


  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          주문상세 - {GLOBAL.CODE}
        </Text>
      </View>
    );
  }

}


export default ProductList;
