import React from 'react';
import { View, Text, Button, WebView} from 'react-native';
import {NavigationActions} from 'react-navigation';
import url from 'url';
import queryString from 'query-string';
const GLOBAL = require('./Global.js');

class ProductList extends React.Component {
  constructor()
  {
    super();
  }

  componentDidMount()
  {
    
  }

  static navigationOptions = {
    title: '상품을 선택해주세요',
  };

  static navigationOptions = {
    tabBarLabel: '상품'
  };

  render() {

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>
          상품목록 - {GLOBAL.CODE}
        </Text>
      </View>
    );
  }

}


export default ProductList;
